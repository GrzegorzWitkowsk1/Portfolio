import { Box, styled, Typography, useTheme } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

type LinkCardProps = {
	label: string;
	handle: string;
	href: string;
};

const CardRoot = styled("a")(({ theme }) => ({
	position: "relative",
	display: "flex",
	alignItems: "center",
	gap: "8px",
	width: "100%",
	padding: "14px 16px",
	borderRadius: "8px",
	textDecoration: "none",
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	border: `2px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[200]
			: theme.palette.grey[500]
	}`,
	transition: "border-color 0.2s ease, transform 0.2s ease",
	"&:hover": {
		borderColor: theme.palette.primary.main,
		transform: "translateY(-4px)",
	},
	"&:hover .link-arrow": {
		opacity: 1,
	},
}));

const HoverArrow = styled(Box)(({ theme }) => ({
	position: "absolute",
	top: "-12px",
	right: "-12px",
	width: "28px",
	height: "28px",
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	color: theme.palette.text.secondary,
	opacity: 0,
	transition: "opacity 0.2s ease",
}));

export function LinkCard({ label, handle, href }: LinkCardProps) {
	const theme = useTheme();

	return (
		<CardRoot href={href} target="_blank" rel="noopener noreferrer">
			<Typography
				sx={{
					fontSize: "15px",
					fontWeight: 500,
					color: "text.primary",
				}}
			>
				{label}
			</Typography>
			<Typography sx={{ fontSize: "13px", color: "text.secondary" }}>
				{handle}
			</Typography>
			<HoverArrow className="link-arrow">
				<ArrowUpRight size={18} color={theme.palette.text.secondary} />
			</HoverArrow>
		</CardRoot>
	);
}
