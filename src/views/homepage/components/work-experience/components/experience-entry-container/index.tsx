import Box from "@mui/material/Box";
import { WorkExperienceEntryType } from "../../types";
import { Typography, useTheme } from "@mui/material";
import {
  CalendarMonthOutlined,
  PlayArrow,
  WorkOutline,
} from "@mui/icons-material";

interface Props {
  experienceEntry: WorkExperienceEntryType;
}

export default function ExperienceEntryContainer(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minWidth: { lg: "900px", md: "700px", xs: "auto" },
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#131316",
        p: "16px",
        gap: "8px",
        border: `1px solid ${theme.palette.grey[800]}`,
        borderRadius: "8px",
        justifyContent: "space-between",
        transition: "300ms",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: `
            0 0 9px ${theme.palette.primary.dark},
            0 0 12px  ${theme.palette.primary.dark},
            0 0 15px  ${theme.palette.primary.dark}
          `,
          border: `1px solid ${theme.palette.primary.main}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "row",
            xs: "column",
            justifyContent: "space-between",
            gap: "8px",
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <WorkOutline color="primary" />
          <Typography color="white" variant="h5">
            {" "}
            {props.experienceEntry.specialization}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <CalendarMonthOutlined />
          <Typography color="grayText">
            {props.experienceEntry.dateEnd
              ? `${props.experienceEntry.dateStart} - ${props.experienceEntry.dateEnd}`
              : props.experienceEntry.dateStart}
          </Typography>
        </Box>
      </Box>
      <Typography sx={{ fontSize: "16px" }} color="primary">
        {props.experienceEntry.companyName}
      </Typography>
      <Typography variant="body1" color="grayText">
        {props.experienceEntry.description}
      </Typography>
      {props.experienceEntry.responsibilites.map((res) => (
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <PlayArrow sx={{ fontSize: "12px" }} color="primary" />
          <Typography variant="body1" sx={{ color: theme.palette.grey[600] }}>
            {res}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
