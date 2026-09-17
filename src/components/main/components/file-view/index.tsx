import { Box, styled, Typography, useTheme } from "@mui/material";

const FileViewRoot = styled(Box)({
	display: "flex",
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
});

type FileViewProps = {
	icon: React.ReactNode;
	label: string;
};

export function FileView({ icon, label }: FileViewProps) {
	const theme = useTheme();

	return (
		<FileViewRoot>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "12px",
					color: theme.palette.text.secondary,
				}}
			>
				{icon}
				<Typography sx={{ fontSize: "14px", color: "inherit" }}>
					{label}
				</Typography>
			</Box>
		</FileViewRoot>
	);
}
