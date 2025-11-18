import Box from "@mui/material/Box";
import { NeonTypography } from "../../../../components/neon-typography";
import Typography from "@mui/material/Typography";
import { ContainedStyledButton } from "../../../../components/contained-button";
import { OutlinedStyledButton } from "../../../../components/outlined-button";
import { StyledIconButton } from "../../../../components/icon-button";
import {
  ArrowDownward,
  GitHub,
  LinkedIn,
  MailOutline,
} from "@mui/icons-material";
import { keyframes } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const arrowAnimation = keyframes`
  0%   { transform: translateY(0); opacity: 1; }
  50%  { transform: translateY(10px); opacity: 0.7; }
  100% { transform: translateY(0); opacity: 1; }
`;

interface Props {
  scrollHandler: () => void;
}

export default function MainSection({ scrollHandler }: Props) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { lg: "32px", md: "24px", xs: "12px" },
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: { lg: 0, md: 0, xs: "16px" },
        background:
          "radial-gradient(circle at center, rgba(123, 63, 255, 0.15) 0%, rgba(10, 10, 20, 1) 50%)",
        backgroundColor: "#0a0a14",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "14px",
          color: "white",
        }}
      >
        <Typography variant={isMobile ? "h3" : "h2"}>Hi,</Typography>
        <Typography variant={isMobile ? "h3" : "h2"}>Im</Typography>
        <NeonTypography variant={isMobile ? "h3" : "h2"} fontWeight={"bold"}>
          Grzegorz
        </NeonTypography>
      </Box>
      <Typography
        textAlign={"center"}
        variant={isMobile ? "h6" : "h5"}
        color="grayText"
      >
        Frontend Developer with passion
      </Typography>
      <Typography
        variant={isMobile ? "body2" : "body1"}
        textAlign={"center"}
        sx={{ width: { lg: "35%", md: "60%", xs: "80%" } }}
        color="grayText"
      >
        Crafting beautiful, functional, responsive web experiences with React JS
        and Typescript. I like simple solutions and make things good-looking.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: { lg: "24px", md: "18px", xs: "12px" },
        }}
      >
        <ContainedStyledButton>View My Work</ContainedStyledButton>
        <OutlinedStyledButton>Get In Touch</OutlinedStyledButton>
      </Box>
      <Box
        sx={{ display: "flex", gap: { lg: "24px", md: "18px", xs: "12px" } }}
      >
        <StyledIconButton
          onClick={() =>
            window.open("https://github.com/GrzegorzWitkowsk1", "_blank")
          }
        >
          <GitHub />
        </StyledIconButton>
        <StyledIconButton
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/grzegorz-witkowski-b0b11a234",
              "_blank"
            );
          }}
        >
          <LinkedIn />
        </StyledIconButton>
        <a href="mailto:grzegorz.witkowski999@gmail.com">
          <StyledIconButton>
            <MailOutline />
          </StyledIconButton>
        </a>
      </Box>
      <StyledIconButton
        onClick={scrollHandler}
        sx={{
          position: "absolute",
          bottom: 15,
          animation: `${arrowAnimation} 1s ease-in-out infinite`,
        }}
      >
        <ArrowDownward />
      </StyledIconButton>
    </Box>
  );
}
