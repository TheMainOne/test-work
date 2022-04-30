import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import MainField from "./MainField/MainField";
import { fetchAllPersons } from "services/fetchPersons";

// const dat = {
//   name: "MAks",
//   email: "masf@mail.com",
//   department: "B2",
//   BirthDate: "1990-10-30",
// };

// addPerson("persons", dat);

export const App = () => {
  const [persons, setPersons] = useState(null);

  useEffect(() => {
    try {
      fetchAllPersons().then((persons) => setPersons(persons));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainField persons={persons} />
    </>
  );
};
