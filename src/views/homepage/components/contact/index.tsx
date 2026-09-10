import { Box, styled, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { RefObject } from "react";
import {
	EmailOutlined,
	FilePresentOutlined,
	GitHub,
	LinkedIn,
	MailOutline,
} from "@mui/icons-material";

import { IconContainer } from "components/icon-container";
import { ContainedStyledButton } from "components/contained-button";

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

interface Props {
	ref: RefObject<HTMLElement | null>;
}

export default function Projects({ ref }: Props) {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Box
			ref={ref}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: { lg: "32px", md: "24px", xs: "12px" },
				justifyContent: "center",
				px: { lg: "20%", md: "10%", xs: "2.5%" },
				minHeight: "100vh",
				py: { lg: "16px", md: "12px", xs: "8px" },
				backgroundColor: "#0F0F12",
			}}
		>
			<Typography textAlign={"center"} variant="h3" color="white">
				{t("contact.getIn")}{" "}
				<span style={{ color: theme.palette.primary.main }}>
					{t("contact.touch")}
				</span>
			</Typography>
			<Typography
				textAlign={"center"}
				variant="h6"
				color={theme.palette.grey[600]}
			>
				{t("contact.contactInfo")}
			</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: { lg: "center", md: "center", xs: "stretch" },
					flexDirection: "column",
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
							<Typography color={theme.palette.grey[600]}>
								@GrzegorzWitkowsk1
							</Typography>
						</Box>
					</ContactBox>
					<ContactBox
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/grzegorz-witkowski-b0b11a234",
								"_blank",
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
							<Typography color={theme.palette.grey[600]}>
								/in/Grzegorz Witkowski
							</Typography>
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
							window.open(
								"https://github.com/GrzegorzWitkowsk1/Portfolio",
								"_blank",
							)
						}
					>
						<IconContainer>
							<FilePresentOutlined />
						</IconContainer>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="h6" color="white">
								Portfolio
							</Typography>
							<Typography color={theme.palette.grey[600]}>
								Portfolio React application
							</Typography>
						</Box>
					</ContactBox>
					<a
						style={{ textDecoration: "none" }}
						href="mailto:grzegorz.witkowski999@gmail.com"
					>
						<ContactBox>
							<IconContainer>
								<MailOutline />
							</IconContainer>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<Typography variant="h6" color="white">
									Email
								</Typography>
								<Typography color={theme.palette.grey[600]}>
									grzegorz.witkowski999@gmail.com
								</Typography>
							</Box>
						</ContactBox>
					</a>
				</Box>
			</Box>
			<a
				style={{ textDecoration: "none", alignSelf: "center" }}
				href={"mailto:grzegorz.witkowski999@gmail.com"}
			>
				<ContainedStyledButton
					sx={{ display: "flex", gap: "8px", alignItems: "center" }}
				>
					<EmailOutlined />
					<Typography>{t("contact.sendMeAnEmail")}</Typography>
				</ContainedStyledButton>
			</a>
		</Box>
	);
}
