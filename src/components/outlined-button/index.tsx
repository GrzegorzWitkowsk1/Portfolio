import { Button, ButtonProps, styled } from "@mui/material";

const BaseButton = (props: ButtonProps) => (
  <Button {...props} variant="outlined" />
);

export const OutlinedStyledButton = styled(BaseButton)(({ theme }) => ({
  color: "white",
  fontSize: "0.875rem",
  paddingRight: "20px",
  paddingLeft: "20px",
  textTransform: "none",
  borderRadius: "8px",

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    boxShadow: `
    0 0 7px ${theme.palette.primary.dark},
    0 0 9px  ${theme.palette.primary.dark},
    0 0 11px  ${theme.palette.primary.dark}
  `,
  },
}));
