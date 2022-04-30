import { Field } from "./MainField.styled";
import { MainFieldTitle } from "components/MainFieldTitle/MainFieldTitle";
import PersonList from "components/PersonsList/PersonsList";

const MainField = () => {
  return (
    <Field>
      <MainFieldTitle />
      <PersonList />
    </Field>
  );
};

export default MainField;
