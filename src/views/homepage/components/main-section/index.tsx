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
import { keyframes, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const arrowAnimation = keyframes`
  0%   { transform: translateY(0); opacity: 1; }
  50%  { transform: translateY(10px); opacity: 0.7; }
  100% { transform: translateY(0); opacity: 1; }
`;

interface Props {
	aboutScrollHandler: () => void;
	contactScrollHandler: () => void;
	myWorkScrollHandler: () => void;
}

export default function MainSection({
	aboutScrollHandler,
	contactScrollHandler,
	myWorkScrollHandler,
}: Props) {
	const theme = useTheme();
	const { t } = useTranslation();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: { lg: "32px", md: "24px", xs: "12px" },
				justifyContent: "center",
				alignItems: "center",
				px: { lg: "20%", md: "10%", xs: "2.5%" },
				minHeight: "100vh",
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
				<Typography variant={isMobile ? "h3" : "h2"}>{t("main.hi")}</Typography>
				<Typography variant={isMobile ? "h3" : "h2"}>
					{t("main.iAm")}
				</Typography>
				<NeonTypography variant={isMobile ? "h3" : "h2"} fontWeight={"bold"}>
					Grzegorz
				</NeonTypography>
			</Box>
			<Typography
				textAlign={"center"}
				variant={isMobile ? "h6" : "h5"}
				color={theme.palette.grey[600]}
			>
				{t("main.role")}
			</Typography>
			<Typography
				variant={isMobile ? "body2" : "body1"}
				textAlign={"center"}
				color={theme.palette.grey[600]}
			>
				{t("main.desc")}
			</Typography>
			<Box
				sx={{
					display: "flex",
					gap: { lg: "24px", md: "18px", xs: "12px" },
				}}
			>
				<ContainedStyledButton onClick={myWorkScrollHandler}>
					{t("main.myWorkButton")}
				</ContainedStyledButton>
				<OutlinedStyledButton onClick={contactScrollHandler}>
					{t("main.getInTouchButton")}
				</OutlinedStyledButton>
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
							"_blank",
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
				onClick={aboutScrollHandler}
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
