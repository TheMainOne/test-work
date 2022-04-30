import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AddButton } from "components/AddButton/AddButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LoadingNotification } from "./PersonList.styled";

export default function PersonList({ persons }) {
  return (
    <>
      <AddButton />
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
                      <MoreVertIcon />
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

// import { AddButton } from "components/AddButton/AddButton";
// import { TableHead } from "./PersonList.styled";

// export const PersonsList = () => {
//   return (
//     <>
//       <AddButton />
//       <TableHead>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Birth date</th>
//             <th>Department</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Lola Atkinson</td>
//             <td>Ola.atkinson@mail.com</td>
//             <td>1988-12-13</td>
//             <td>A1</td>
//           </tr>
//         </tbody>
//       </TableHead>
//     </>
//   );
// };
