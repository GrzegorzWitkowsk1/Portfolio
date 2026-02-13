import { Box, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
	const theme = useTheme();
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<Box
			sx={{
				backgroundColor: "#0F0F12",

				display: "flex",
				flexDirection: "column",
				py: { lg: "16px", md: "12px", xs: "8px" },
			}}
		>
			<Divider flexItem />
			<Typography
				color={theme.palette.grey[600]}
				sx={{
					mt: { lg: "30px", md: "30px", xs: "15px" },
				}}
				textAlign={"center"}
			>
				{t("footer.copyright", { year: currentYear })}
			</Typography>
		</Box>
	);
}
