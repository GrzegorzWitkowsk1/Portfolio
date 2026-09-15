import { Box, styled } from "@mui/material";
import { ForkRight } from "@mui/icons-material";
import { Typography } from "@mui/material";

const BranchInfoRoot = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	height: "30px",
	padding: "0 14px",
	borderBottom: `1px solid ${
		theme.palette.mode === "dark"
			? theme.palette.grey[400]
			: theme.palette.grey[300]
	}`,
}));

export function BranchInfo() {
	return (
		<BranchInfoRoot>
			<Typography
				sx={{
					fontSize: "13px",
					color: "text.secondary",
				}}
			>
				Portfolio
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
				<ForkRight sx={{ fontSize: "16px", color: "text.secondary" }} />
				<Typography
					sx={{
						fontSize: "12px",
						color: "text.secondary",
					}}
				>
					main
				</Typography>
			</Box>
		</BranchInfoRoot>
	);
}
