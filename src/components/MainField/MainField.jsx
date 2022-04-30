import { Field } from "./MainField.styled";
import { MainFieldTitle } from "components/MainFieldTitle/MainFieldTitle";
import PersonList from "components/PersonsList/PersonsList";

const MainField = ({ persons }) => {
  return (
    <Field>
      <MainFieldTitle />
      <PersonList persons={persons} />
    </Field>
  );
};

export default MainField;
