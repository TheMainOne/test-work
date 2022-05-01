import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Form } from "./AddNewPersonForm.styled";
import InputLabel from "@mui/material/InputLabel";

export const ContactForm = () => {
  const departments = ["A1", "B2", "C3"];

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
      }}
    >
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
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
};
