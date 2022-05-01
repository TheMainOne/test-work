import { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { AddButtonWrapper } from "./AddButton.styled";
import { ContactForm } from "components/AddNewPersonForm/AddNewPersonForm";

export const AddButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {" "}
      <AddButtonWrapper>
        <SearchIcon fontSize="small" sx={{ marginRight: 1 }} />
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            textTransform: "inherit",
          }}
          endIcon={<AddIcon fontSize="small" />}
          onClick={handleOpen}
        >
          Add person
        </Button>
      </AddButtonWrapper>
      <Modal
        open={open}
        onClose={handleClose}
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
            <CloseIcon fontSize="small" onClick={handleClose} />
          </Box>
          <ContactForm />
        </Box>
      </Modal>
    </>
  );
};
