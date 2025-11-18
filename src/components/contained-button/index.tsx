import { Button, ButtonProps, darken, styled } from "@mui/material";

const buttonBase = (props: ButtonProps) => (
  <Button {...props} variant="contained" />
);

export const ContainedStyledButton = styled(buttonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontSize: "0.875rem",
  paddingRight: "20px",
  paddingLeft: "20px",
  textTransform: "none",
  borderRadius: "8px",
  boxShadow: `
  0 0 3px ${theme.palette.primary.dark},
  0 0 5px  ${theme.palette.primary.dark},
  0 0 12px  ${theme.palette.primary.dark}
`,
  "&:hover": {
    backgroundColor: darken(theme.palette.primary.main, 0.1),
    boxShadow: `
    0 0 12px ${theme.palette.primary.dark},
    0 0 15px  ${theme.palette.primary.dark},
    0 0 18px  ${theme.palette.primary.dark}
  `,
  },
}));
