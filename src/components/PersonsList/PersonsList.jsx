import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AddButton } from "components/AddButton/AddButton";
import { LoadingNotification } from "./PersonList.styled";
import { DporMenu } from "./MenuItem";

export default function PersonList({ persons, fetchingNewContact }) {
  return (
    <>
      <AddButton persons={persons} fetchingNewContact={fetchingNewContact} />
      {persons ? (
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "#b1adad" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Birth date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {persons &&
                persons.map((person) => (
                  <TableRow
                    key={person.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {person.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {person.email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {person.BirthDate}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      component="th"
                      scope="row"
                    >
                      {person.department}
                      <DporMenu
                        id={person.id}
                        name={person.name}
                        fetchingNewContact={fetchingNewContact}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <LoadingNotification>Loading data...</LoadingNotification>
      )}
    </>
  );
}

// <Box sx={{ flexGrow: 0 }}>
//   <Tooltip title="Open settings">
//     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//       {isLoggedIn ? (
//         <Avatar
//           alt="avatar"
//           src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"
//         />
//       ) : (
//         <Avatar alt="avatar" src="" />
//       )}
//     </IconButton>
//   </Tooltip>
//   <Menu
//     sx={{ mt: "45px" }}
//     id="menu-appbar"
//     anchorEl={anchorElUser}
//     anchorOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     keepMounted
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     open={Boolean(anchorElUser)}
//     onClose={handleCloseUserMenu}
//   >
// {
//   settings.map((setting) => (
//     <MenuItem
//       key={setting}
//       onClick={() => {
//         if (!isLoggedIn) {
//           return;
//         }

//         dispatch(operations.logOut());
//       }}
//     >
//       <Typography textAlign="center">{setting}</Typography>
//     </MenuItem>
//   ));
// }
// //   </Menu>
// // </Box>;
