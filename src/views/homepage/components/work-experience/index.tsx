import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { WorkExperienceEntryType } from "./types";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import ExperienceEntryContainer from "./components/experience-entry-container";

const workExperience: WorkExperienceEntryType[] = [
  {
    companyName: "Motorro Sp. z.o.o",
    dateStart: "08.2021",
    dateEnd: "Present",
    specialization: "Frontend Developer",
    description:
      "Maintaining and developing react App and web extensions. Mentored younger colleagues.",
    responsibilites: [
      "Maintaining and developing whole React JS app from scratch.",
      "Implemented admin panel",
      "Mentoring junior dev",
      "Lead team. Distribute tasks, lead meetings and take care of tasks flow.",
    ],
  },
  {
    companyName: "MCA - WARE MIRON BALCERZAK",
    dateStart: "09.2024",
    dateEnd: "Present",
    specialization: "Frontend Developer",
    description: "Maintaining and developing react App.",
    responsibilites: ["Maintaining and developing React JS app from scratch."],
  },
  {
    companyName: "memogadget.com",
    dateStart: "2015",
    dateEnd: "Present",
    specialization: "Erasmus internship",
    description: "Erasmus intership in e-commerce company.",
    responsibilites: [
      "Making polish translations on main website of company",
      "Participating in discussions about features and fixes",
      "Learning about e-commerce, accelerating apps and google positioning",
      "Trying to find a use for VR in e-commerce platforms",
    ],
  },
  {
    companyName: "Liquid Systems Sp. z.o.o",
    dateStart: "Few interships in middle school",
    dateEnd: "",
    specialization: "Service technician",
    description: "Providing optical fiber internet and tv services.",
    responsibilites: [
      "Installations of hardware to get optical fiber internet for customers",
      "Helpdesk",
      "Working with customers, problem solving and providing informations about service.",
    ],
  },
];

export default function WorkExperience() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { lg: "32px", md: "24px", xs: "12px" },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        py: { lg: "60px", md: "60px", xs: "30px" },
      }}
    >
      <Typography
        textAlign={"center"}
        sx={{
          breakAfter: "all",
          maxWidth: "80%",
        }}
        variant="h3"
        color="white"
      >
        Work{" "}
        <span style={{ color: theme.palette.primary.main }}>Experience</span>
      </Typography>
      <Timeline
        sx={{
          "& ::before": {
            flex: {
              lg: 1,
              md: "0 !important",
              sm: "0 !important",
              xs: "0 !important",
            },
          },
          gap: "16px",
        }}
      >
        {workExperience.map((i) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                }}
              />
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceEntryContainer experienceEntry={i} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
