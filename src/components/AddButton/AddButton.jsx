import * as React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { AddButtonWrapper } from "./AddButton.styled";

export const AddButton = () => {
  return (
    <AddButtonWrapper>
      <SearchIcon fontSize="small" sx={{ marginRight: 1 }} />
      <Button
        variant="contained"
        sx={{
          borderRadius: 0,
          textTransform: "inherit",
        }}
        endIcon={<AddIcon fontSize="small" />}
        onClick={() => alert("clicked")}
      >
        Add person
      </Button>
    </AddButtonWrapper>
  );
};
