import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <Toaster />
      <Suspense fallback="aaaa" />
      <GlobalStyle />
    </>
  );
};
