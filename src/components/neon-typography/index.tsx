import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";

const NeonTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  textShadow: `
    0 0 9px ${theme.palette.primary.dark},
    0 0 12px  ${theme.palette.primary.dark},
    0 0 15px  ${theme.palette.primary.dark}
  `,
}));

export { NeonTypography };
