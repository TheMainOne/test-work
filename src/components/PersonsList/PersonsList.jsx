import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AddButton } from "components/AddButton/AddButton";
import { fetchAllPersons } from "services/fetchPersons";

fetchAllPersons().then((data) => console.log(data));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", 60, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
];

export default function PersonList() {
  return (
    <>
      <AddButton />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Birth date</TableCell>
              <TableCell>Department</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
