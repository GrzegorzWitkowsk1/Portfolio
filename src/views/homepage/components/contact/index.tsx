import { Box, Divider, styled, Typography, useTheme } from "@mui/material";
import { IconContainer } from "../../../../components/icon-container";
import {
  EmailOutlined,
  FilePresentOutlined,
  GitHub,
  LinkedIn,
  MailOutline,
} from "@mui/icons-material";
import { ContainedStyledButton } from "../../../../components/contained-button";

const ContactBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px",
  gap: "8px",
  flex: 1,
  alignItems: "center",
  border: `1px solid ${theme.palette.grey[800]}`,
  borderRadius: "8px",
  minWidth: 400,
  [theme.breakpoints.down("sm")]: {
    minWidth: "auto",
  },
  transition: "300ms",
  "&:hover": {
    cursor: "pointer",
    transform: "translateY(-10px)",
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: `
            0 0 9px ${theme.palette.primary.dark},
            0 0 12px  ${theme.palette.primary.dark},
            0 0 15px  ${theme.palette.primary.dark}
          `,
  },
}));

export default function Projects() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { lg: "32px", md: "24px", xs: "12px" },
        justifyContent: "center",
        alignItems: "center",
        px: { lg: 0, md: 0, xs: "16px" },
        backgroundColor: "#0F0F12",
        py: { lg: "60px", md: "60px", xs: "30px" },
      }}
    >
      <Typography textAlign={"center"} variant="h3" color="white">
        Get In <span style={{ color: theme.palette.primary.main }}>Touch</span>
      </Typography>
      <Typography textAlign={"center"} variant="h6" color="grayText">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: { lg: "32px", md: "24px", xs: "16px" },
          gap: { lg: "24px", md: "16px", xs: "12px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            mt: { lg: "32px", md: "24px", xs: "16px" },
            gap: { lg: "24px", md: "16px", xs: "12px" },
          }}
        >
          <ContactBox
            onClick={() =>
              window.open("https://github.com/GrzegorzWitkowsk1", "_blank")
            }
          >
            <IconContainer>
              <GitHub />
            </IconContainer>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="white">
                Github
              </Typography>
              <Typography color="grayText">@GrzegorzWitkowsk1</Typography>
            </Box>
          </ContactBox>
          <ContactBox
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/grzegorz-witkowski-b0b11a234",
                "_blank"
              )
            }
          >
            <IconContainer>
              <LinkedIn />
            </IconContainer>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="white">
                LinkedIn
              </Typography>
              <Typography color="grayText">/in/Grzegorz Witkowski</Typography>
            </Box>
          </ContactBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            gap: { lg: "24px", md: "16px", xs: "12px" },
          }}
        >
          <ContactBox
            onClick={() =>
              window.open("https://github.com/GrzegorzWitkowsk1", "_blank")
            }
          >
            <IconContainer>
              <FilePresentOutlined />
            </IconContainer>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="white">
                Portfolio
              </Typography>
              <Typography color="grayText">
                Portfolio React application
              </Typography>
            </Box>
          </ContactBox>
          <a
            style={{ textDecoration: "none" }}
            href={"mailto:grzegorz.witkowski999@gmail.com"}
          >
            <ContactBox>
              <IconContainer>
                <MailOutline />
              </IconContainer>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" color="white">
                  Email
                </Typography>
                <Typography color="grayText">
                  grzegorz.witkowski999@gmail.com
                </Typography>
              </Box>
            </ContactBox>
          </a>
        </Box>
      </Box>
      <ContainedStyledButton
        sx={{ display: "flex", gap: "8px", alignItems: "center" }}
      >
        <EmailOutlined />
        <Typography>Send me an email</Typography>
      </ContainedStyledButton>

      <Divider flexItem />
      <Typography
        color="grayText"
        sx={{
          mt: { lg: "30px", md: "30px", xs: "15px" },
        }}
        textAlign={"center"}
      >
        © 2025 Grzegorz Witkowski. Built with React, Typescript and Material UI
      </Typography>
    </Box>
  );
}
