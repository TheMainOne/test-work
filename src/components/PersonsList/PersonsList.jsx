import { useState, useEffect } from "react";
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
  const [reversePersons, setReversePersons] = useState(null);

  useEffect(() => {
    try {
      const reverseArray = persons.reverse();
      setReversePersons(reverseArray);
    } catch (error) {}
  }, [persons]);

  return (
    <>
      <AddButton persons={persons} fetchingNewContact={fetchingNewContact} />
      {reversePersons ? (
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
              {reversePersons &&
                reversePersons.map((person) => (
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
