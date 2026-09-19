import { alpha, Box, styled } from "@mui/material";

export const AvailabilityDot = styled(Box)(({ theme }) => ({
	width: "8px",
	height: "8px",
	borderRadius: "50%",
	backgroundColor: theme.palette.success.main,
	"@keyframes pulse": {
		"0%": {
			boxShadow: `0 0 0 0 ${alpha(theme.palette.success.main, 0.5)}`,
		},
		"70%": {
			boxShadow: `0 0 0 8px ${alpha(theme.palette.success.main, 0)}`,
		},
		"100%": {
			boxShadow: `0 0 0 0 ${alpha(theme.palette.success.main, 0)}`,
		},
	},
	animation: "pulse 2s infinite ease-out",
}));
