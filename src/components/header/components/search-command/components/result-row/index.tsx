import {
	alpha,
	Box,
	ButtonBase,
	styled,
	Typography,
	useTheme,
} from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type ResultRowProps = {
	icon: ReactNode;
	name: string;
	secondary: string;
	onClick: () => void;
};

const RowRoot = styled(ButtonBase)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	width: "100%",
	padding: "8px 12px",
	borderRadius: "6px",
	justifyContent: "flex-start",
	textAlign: "left",
	transition: "background-color 0.2s ease",
	"&:hover": {
		backgroundColor: alpha(theme.palette.primary.main, 0.12),
	},
	"&:hover .search-row-arrow": {
		opacity: 1,
	},
}));

export function ResultRow({ icon, name, secondary, onClick }: ResultRowProps) {
	const theme = useTheme();

	return (
		<RowRoot onClick={onClick}>
			<Box sx={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
				{icon}
			</Box>
			<Box
				sx={{
					flex: 1,
					minWidth: 0,
					display: "flex",
					flexDirection: "column",
					gap: "1px",
				}}
			>
				<Typography
					sx={{
						fontSize: "14px",
						fontWeight: 500,
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
						color: theme.palette.mode === "light" ? "black" : "white",
					}}
				>
					{name}
				</Typography>
				{secondary && (
					<Typography
						sx={{
							fontSize: "12px",
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "ellipsis",
							color:
								theme.palette.mode === "light"
									? theme.palette.grey[500]
									: theme.palette.grey[300],
						}}
					>
						{secondary}
					</Typography>
				)}
			</Box>
			<ArrowUpRight
				className="search-row-arrow"
				size={16}
				color={theme.palette.primary.main}
				style={{ opacity: 0, transition: "opacity 0.2s ease", flexShrink: 0 }}
			/>
		</RowRoot>
	);
}
