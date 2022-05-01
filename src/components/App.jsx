import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "./GlobalStyles";
import MainField from "./MainField/MainField";
import { fetchAllPersons } from "services/fetchPersons";

export const App = () => {
  const [persons, setPersons] = useState(null);
  const [newContact, setNewContact] = useState(null);

  const fetchingNewContact = () => setNewContact(true);

  useEffect(() => {
    try {
      fetchAllPersons().then((persons) => setPersons(persons));
      setNewContact(null);
    } catch (error) {
      console.log(error);
    }
  }, [newContact]);

  return (
    <>
      <GlobalStyle />
      <MainField persons={persons} fetchingNewContact={fetchingNewContact} />
      <Toaster />
    </>
  );
};
