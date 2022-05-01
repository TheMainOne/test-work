import { useState } from "react";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deletePerson } from "services/fetchPersons";

export const DporMenu = ({ id, name, fetchingNewContact }) => {
  const [anchorEl, setAnchorEl] = useState(null);

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
            <Typography textAlign="left">View</Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="left">Edit</Typography>
          </MenuItem>
          <MenuItem>
            <Typography
              textAlign="left"
              onClick={() => {
                deletePerson(`persons/${id}`).then(() => {
                  fetchingNewContact(true);
                  toast.success(`${name} has succesfully removed`);
                });
              }}
            >
              Delete
            </Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
