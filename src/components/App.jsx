import { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles";
import MainField from "./MainField/MainField";

export const App = () => {
  return (
    <>
      <Suspense fallback="aaaa" />
      <GlobalStyle />
      <MainField />
    </>
  );
};
