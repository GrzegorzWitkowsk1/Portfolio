import { IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  border: "none",
  backgroundColor: "transparent",
  borderRadius: "8px",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
  },
}));
