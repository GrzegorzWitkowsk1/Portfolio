import { styled, Typography } from "@mui/material";

export const SectionLabel = styled(Typography)(({ theme }) => ({
	fontSize: "17px",
	fontWeight: 600,
	letterSpacing: "0.5px",
	textTransform: "uppercase",
	color:
		theme.palette.mode === "light"
			? theme.palette.grey[500]
			: theme.palette.grey[100],
}));