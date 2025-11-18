import {
  Box,
  Card,
  CardMedia,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { ProjectType } from "../../types";
import { ContainedStyledButton } from "../../../../../../components/contained-button";
import { OutlinedStyledButton } from "../../../../../../components/outlined-button";
import { GitHub, OpenInNew } from "@mui/icons-material";

interface Props {
  project: ProjectType;
}

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  minHeight: "300px",
  flex: "1 1 calc(50% - 16px)",
  backgroundColor: "#131316",
  border: `1px solid ${theme.palette.grey[800]}`,
  "&:hover": {
    cursor: "pointer",
    boxShadow: `
    0 0 9px ${theme.palette.primary.dark},
    0 0 12px  ${theme.palette.primary.dark},
    0 0 15px  ${theme.palette.primary.dark}
  `,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const TechnologyBox = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  padding: "2px 4px",
  fontSize: "14px",
}));

export default function ProjectContainer(props: Props) {
  return (
    <StyledCard>
      <CardMedia
        sx={{ height: "200px", backgroundColor: "white" }}
        image={props.project.image}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-around",
          p: "16px",
          gap: "4px",
        }}
      >
        <Typography variant="h5" color="white">
          {props.project.title}
        </Typography>
        <Typography variant="body1" color="grayText">
          {props.project.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {props.project.technologies.map((t) => (
            <TechnologyBox key={t}>{t}</TechnologyBox>
          ))}
        </Box>
        <Box
          sx={{ display: "flex", gap: "10px", mt: "8px", alignItems: "center" }}
        >
          <Tooltip
            disableHoverListener={!!props.project.codeUrl}
            title="Unavailable according to company policy"
          >
            <div>
              <OutlinedStyledButton
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
                disabled={!props.project.codeUrl}
              >
                <GitHub />
                <Typography>Code</Typography>
              </OutlinedStyledButton>
            </div>
          </Tooltip>
          <Tooltip
            disableHoverListener={!!props.project.demoUrl}
            title="Unavailable according to company policy"
          >
            <div>
              <ContainedStyledButton
                sx={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
                disabled={!props.project.demoUrl}
              >
                <OpenInNew />
                <Typography>Live demo</Typography>
              </ContainedStyledButton>
            </div>
          </Tooltip>
        </Box>
      </Box>
    </StyledCard>
  );
}
