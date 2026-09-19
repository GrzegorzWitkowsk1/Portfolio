import { SxProps, Theme } from "@mui/material";

export const badgeSx = (theme: Theme): SxProps<Theme> => ({
	padding: "4px 12px",
	borderRadius: "6px",
	fontSize: "13px",
	fontWeight: 600,
	color: theme.palette.mode === "light" ? "black" : "white",
	backgroundColor: theme.palette.mode === "light" ? "white" : "#13171d",
	border: `2px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[500]
	}`,
});
