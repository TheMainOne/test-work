import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { fetchPersonById } from "services/fetchPersons";
import { ExitButton, SaveButton } from "./ViewPersonModal.styled";

export const ViewPersonModal = ({
  openViewModal,
  handleCloseViewModal,
  id,
}) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    try {
      fetchPersonById(id).then((data) => setPerson(data));
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      {person && (
        <Modal
          open={openViewModal}
          onClose={handleCloseViewModal}
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
                onClick={handleCloseViewModal}
              />
            </Box>
            <Typography
              component="p"
              fontSize="14px"
              marginTop={"25px"}
              marginLeft={"200px"}
            >
              Name
            </Typography>
            <Typography
              component="p"
              fontSize="15px"
              marginTop={"5px"}
              marginLeft={"200px"}
            >
              {person.name}
            </Typography>
            <Typography
              component="p"
              fontSize="14px"
              marginTop={"25px"}
              marginLeft={"200px"}
            >
              Email
            </Typography>
            <Typography
              component="p"
              fontSize="15px"
              marginTop={"5px"}
              marginLeft={"200px"}
            >
              {person.email}
            </Typography>
            <Typography
              component="p"
              fontSize="14px"
              marginTop={"25px"}
              marginLeft={"200px"}
            >
              Date
            </Typography>
            <Typography
              component="p"
              fontSize="15px"
              marginTop={"5px"}
              marginLeft={"200px"}
            >
              {person.BirthDate}
            </Typography>
            <Typography
              component="p"
              fontSize="14px"
              marginTop={"25px"}
              marginLeft={"200px"}
            >
              Departments
            </Typography>
            <Typography
              component="p"
              fontSize="15px"
              marginTop={"5px"}
              marginLeft={"200px"}
              marginBottom={"102px"}
            >
              {person.department}
            </Typography>
            <ExitButton type="button" onClick={handleCloseViewModal}>
              Cancel
            </ExitButton>
            <SaveButton type="button" disabled>
              Danger
            </SaveButton>
          </Box>
        </Modal>
      )}
    </>
  );
};
