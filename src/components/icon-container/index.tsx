import { Box, styled } from "@mui/material";

export const IconContainer = styled(Box)(({ theme }) => ({
	borderRadius: "12px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	maxWidth: "max-content",
	background: "rgba(146, 92, 240, 0.1)",
	color: theme.palette.primary.main,
	padding: "12px",
}));
