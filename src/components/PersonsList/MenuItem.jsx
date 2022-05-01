import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DeletePersonModal } from "modals/DeletePersonModal";
import { ViewPersonModal } from "modals/ViewPersonModal";

export const DporMenu = ({ id, name, fetchingNewContact }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const handleOpenViewModal = () => setOpenViewModal(true);
  const handleCloseViewModal = () => setOpenViewModal(false);

  const handleOpenUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Tooltip title="Open settings">
          <MoreVertIcon
            sx={{ p: 0, cursor: "pointer" }}
            onClick={handleOpenUserMenu}
          />
        </Tooltip>
        <Menu
          sx={{ mt: "25px" }}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>
            <Typography textAlign="left" onClick={handleOpenViewModal}>
              View
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="left">Edit</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="left" onClick={handleOpen}>
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
      <DeletePersonModal
        open={open}
        handleClose={handleClose}
        id={id}
        fetchingNewContact={fetchingNewContact}
        name={name}
      />
      <ViewPersonModal
        openViewModal={openViewModal}
        handleCloseViewModal={handleCloseViewModal}
        id={id}
      />
    </>
  );
};
