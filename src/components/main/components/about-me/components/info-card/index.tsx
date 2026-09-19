import { Box, styled, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";

type InfoCardProps = {
	icon: ReactNode;
	title: string;
	value: string;
};

const CardRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	justifyContent: "flex-start",
	width: "100%",
	padding: "6px",
	borderRadius: "8px",
	backgroundColor:
		theme.palette.mode === "light" ? "white" : theme.palette.grey[600],
	border: `2px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[200]
			: theme.palette.grey[500]
	}`,
}));

const TitleRow = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "8px",
});

const IconBox = styled(Box)({
	width: "40px",
	height: "40px",
	borderRadius: "8px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

export function InfoCard({ icon, title, value }: InfoCardProps) {
	const theme = useTheme();
	const titleColor =
		theme.palette.mode === "light"
			? theme.palette.grey[500]
			: theme.palette.grey[200];

	return (
		<CardRoot>
			<TitleRow>
				<IconBox>{icon}</IconBox>
				<Typography
					sx={{
						fontSize: "12px",
						fontWeight: 600,
						letterSpacing: "0.5px",
						textTransform: "uppercase",
						color: titleColor,
					}}
				>
					{title}
				</Typography>
			</TitleRow>
			<Typography
				sx={{
					fontSize: "15px",
					pl:'12px',
					fontWeight: 500,
					color: "text.primary",
				}}
			>
				{value}
			</Typography>
		</CardRoot>
	);
}
