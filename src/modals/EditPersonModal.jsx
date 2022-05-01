import { useState, useEffect } from "react";
import validator from "validator";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { fetchPersonById } from "services/fetchPersons";
import {
  Form,
  CancelButton,
  SubmitButton,
} from "components/AddNewPersonForm/AddNewPersonForm.styled";
import { changePersonData } from "services/fetchPersons";

export const EditPersonModal = ({
  openEditModal,
  handleCloseEditModal,
  id,
  fetchingNewContact,
}) => {
  const [person, setPerson] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [department, setDepartment] = useState("");
  const departments = ["A1", "B2", "C3"];

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateOfBirthChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const date = form.elements.date.value;
    const department = form.elements.department.value;

    const newPersonData = {
      name: name,
      email: email,
      department: department,
      BirthDate: date,
    };

    if (!validator.isEmail(email)) {
      toast.error(`${email} is incorrect email`);
      return;
    }

    changePersonData(`persons/${id}`, newPersonData).then(() =>
      fetchingNewContact(true)
    );
    toast.success(`You have successfully  change ${name} data`);
    form.reset();
    handleCloseEditModal();
  };

  useEffect(() => {
    try {
      fetchPersonById(id).then((data) => {
        setPerson(data);
        setDepartment(data.department);
        setName(data.name);
        setEmail(data.email);
        setDateOfBirth(data.BirthDate);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      {person && (
        <Modal
          open={openEditModal}
          onClose={handleCloseEditModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 840,
              height: 510,
              bgcolor: "#e9e9e9",
              outline: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                textAlign={"center"}
                marginRight={"160px"}
              >
                Transactional modal title
              </Typography>
              <CloseIcon
                fontSize="small"
                sx={{ cursor: "pointer" }}
                onClick={handleCloseEditModal}
              />
            </Box>
            {/* ==================== */}
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
                  value={name}
                  onChange={handleNameChange}
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
                  value={email}
                  onChange={handleEmailChange}
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
                  value={dateOfBirth}
                  onChange={handleDateOfBirthChange}
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
                  value={department}
                  onChange={handleDepartmentChange}
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
                <CancelButton type="button" onClick={handleCloseEditModal}>
                  Cancel
                </CancelButton>
                <SubmitButton type="submit">Save</SubmitButton>
              </div>
            </Form>
            {/* ==================== */}
          </Box>
        </Modal>
      )}
    </>
  );
};
