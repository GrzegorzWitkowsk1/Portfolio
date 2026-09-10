import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "disableHover",
})<{ disableHover?: boolean }>(({ theme, disableHover }) => ({
	background: "rgba(19, 19, 22)",
	border: "1px solid rgba(36, 36, 41)",
	borderRadius: "8px",
	padding: "32px",
	display: "flex",
	flexDirection: "column",
	alignItems: "space-between",
	gap: "12px",
	...(!disableHover && {
		"&:hover": {
			border: `1px solid ${theme.palette.primary.main}`,

			boxShadow: `
      0 0 9px ${theme.palette.primary.dark},
      0 0 12px  ${theme.palette.primary.dark},
      0 0 15px  ${theme.palette.primary.dark}
      `,
			transform: "translateY(-15px)",
			...(theme.breakpoints.down("md") && {
				transform: "translateY(-5px)",
			}),
		},
	}),
	transition: "500ms",
}));
