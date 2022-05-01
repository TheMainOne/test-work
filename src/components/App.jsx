import { useState, useEffect } from "react";
import { GlobalStyle } from "./GlobalStyles";
import MainField from "./MainField/MainField";
import { fetchAllPersons } from "services/fetchPersons";

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
