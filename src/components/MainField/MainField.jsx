import { Field } from "./MainField.styled";
import { MainFieldTitle } from "components/MainFieldTitle/MainFieldTitle";
import PersonList from "components/PersonsList/PersonsList";

const MainField = ({ persons, fetchingNewContact }) => {
  return (
    <Field>
      <MainFieldTitle />
      <PersonList persons={persons} fetchingNewContact={fetchingNewContact} />
    </Field>
  );
};

export default MainField;
