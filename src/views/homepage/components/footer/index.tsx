import { Box, Divider, Typography, useTheme } from "@mui/material";

export default function Footer() {
	const theme = useTheme();
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
				{`© ${currentYear} Grzegorz Witkowski. Built with React, Typescript and Material UI
`}
			</Typography>
		</Box>
	);
}
