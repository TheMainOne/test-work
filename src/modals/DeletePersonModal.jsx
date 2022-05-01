import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import {
  DeleteButton,
  ExitButton,
} from "components/PersonsList/MenuItem.styled";
import { deletePerson } from "services/fetchPersons";

export const DeletePersonModal = ({
  open,
  handleClose,
  id,
  fetchingNewContact,
  name,
}) => {
  return (
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
          width: 500,
          height: 300,
          bgcolor: "#e9e9e9",
          outline: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontSize="14px"
            marginRight={"355px"}
            marginLeft={"20px"}
          >
            Optional label
          </Typography>
          <CloseIcon
            fontSize="small"
            sx={{ cursor: "pointer" }}
            onClick={handleClose}
          />
        </Box>
        <Typography
          id="modal-modal-title"
          component="p"
          fontSize="24px"
          marginLeft={"20px"}
        >
          Danger modal title
        </Typography>
        <Typography
          id="modal-modal-title"
          component="p"
          fontSize="16px"
          marginLeft={"20px"}
          marginTop={"20px"}
          marginBottom={"20px"}
          maxWidth="450px"
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium
        </Typography>
        <ExitButton type="button" onClick={handleClose}>
          Cancel
        </ExitButton>
        <DeleteButton
          type="button"
          onClick={() => {
            deletePerson(`persons/${id}`).then(() => {
              fetchingNewContact(true);
              toast.success(`${name} has succesfully removed`);
            });
          }}
        >
          Danger
        </DeleteButton>
      </Box>
    </Modal>
  );
};
