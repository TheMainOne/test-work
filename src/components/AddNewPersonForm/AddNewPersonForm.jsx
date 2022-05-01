import { useState } from "react";
import validator from "validator";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import toast from "react-hot-toast";
import { addPerson } from "services/fetchPersons";
import { Form, CancelButton, SubmitButton } from "./AddNewPersonForm.styled";

export const ContactForm = ({ handleClose, persons, fetchingNewContact }) => {
  const [value, setValue] = useState("");
  const departments = ["A1", "B2", "C3"];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const dateOfBirth = form.elements.date.value;
    const department = form.elements.department.value;
    const isNameInPersons = persons.find((person) => person.name === name);

    if (isNameInPersons) {
      toast.error(`${name} has been added already`);
      form.reset();
      return;
    } else if (!validator.isEmail(email)) {
      toast.error(`${email} is incorrect email`);
      form.reset();
      return;
    }

    const newContact = {
      name: name,
      email: email,
      department: department,
      BirthDate: dateOfBirth,
    };

    addPerson("persons", newContact).then(() => fetchingNewContact(true));
    toast.success(`${name} has succesfully added`);
    form.reset();
    handleClose();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <InputLabel
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          marginLeft: "220px",
        }}
      >
        Name
        <TextField
          id="outlined-basic"
          name="name"
          type="text"
          size="small"
          placeholder="Please enter your name"
          title="Please enter your name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        />
      </InputLabel>
      <InputLabel
        sx={{
          marginBottom: "20px",
          marginLeft: "220px",
        }}
      >
        Email
        <TextField
          id="outlined-basic"
          name="email"
          type="email"
          size="small"
          placeholder="Please enter your email"
          title="Please enter your email"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        />
      </InputLabel>
      <InputLabel
        sx={{
          marginBottom: "20px",
          marginLeft: "220px",
        }}
      >
        Date label
        <TextField
          variant="standard"
          type="date"
          name="date"
          size="small"
          title="Please choose your date of birth"
          required
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "223px",
            marginTop: "5px",
          }}
        />
      </InputLabel>
      <InputLabel
        sx={{
          marginBottom: "50px",
          marginLeft: "220px",
        }}
      >
        Department
        <TextField
          id="outlined-select-department"
          type="text"
          name="department"
          size="small"
          value={value}
          onChange={handleChange}
          select
          title="Please choose your department"
          required
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "223px",
          }}
        >
          {departments.map((department) => (
            <MenuItem key={department} value={department}>
              {department}
            </MenuItem>
          ))}
        </TextField>
      </InputLabel>
      <div>
        <CancelButton type="button" onClick={handleClose}>
          Cancel
        </CancelButton>
        <SubmitButton type="submit">Save</SubmitButton>
      </div>
    </Form>
  );
};
