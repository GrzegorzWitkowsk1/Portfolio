import {
	Box,
	ButtonBase,
	styled,
	SxProps,
	Theme,
	Typography,
	useTheme,
} from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type ItemCardProps = {
	icon: ReactNode;
	name: string;
	secondary?: string;
	technologies?: string[];
	onClick?: () => void;
};

const MAX_VISIBLE_TECH = 3;

const badgeSx = (theme: Theme): SxProps<Theme> => ({
	padding: "2px 8px",
	borderRadius: "4px",
	fontSize: "11px",
	fontWeight: 500,
	color:
		theme.palette.mode === "light"
			? theme.palette.grey[400]
			: theme.palette.grey[300],
	backgroundColor: theme.palette.mode === "light" ? "white" : "#13171d",
	border: `2px solid ${
		theme.palette.mode === "light"
			? theme.palette.grey[300]
			: theme.palette.grey[500]
	}`,
});

const CardRoot = styled(ButtonBase)(({ theme }) => ({
	position: "relative",
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	justifyContent: "flex-start",
	gap: "12px",
	width: "100%",
	padding: "20px",
	borderRadius: "8px",
	textAlign: "left",
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
	"&:hover .hover-arrow": {
		opacity: 1,
	},
}));

const TopRow = styled(Box)({
	display: "flex",
	alignItems: "center",
});

const IconBox = styled(Box)(({ theme }) => ({
	width: "40px",
	height: "40px",
	borderRadius: "8px",
	backgroundColor: theme.palette.mode === "dark" ? "#1d2c31" : "#eaf6f6",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
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

export function ItemCard({
	icon,
	name,
	secondary,
	technologies,
	onClick,
}: ItemCardProps) {
	const theme = useTheme();
	const visibleTech = technologies?.slice(0, MAX_VISIBLE_TECH) ?? [];
	const restCount = Math.max((technologies?.length ?? 0) - MAX_VISIBLE_TECH, 0);

	return (
		<CardRoot onClick={onClick}>
			<TopRow>
				<IconBox>{icon}</IconBox>
				<HoverArrow className="hover-arrow">
					<ArrowUpRight size={20} />
				</HoverArrow>
			</TopRow>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
				<Typography
					sx={{
						fontSize: "15px",
						fontWeight: 600,
						color: "text.primary",
						whiteSpace: "nowrap",
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					{name}
				</Typography>
				{secondary && (
					<Typography
						sx={{
							fontSize: "13px",
							color:
								theme.palette.mode === "dark"
									? theme.palette.grey[300]
									: theme.palette.grey[500],
						}}
					>
						{secondary}
					</Typography>
				)}
			</Box>
			{visibleTech.length > 0 && (
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: "6px",
					}}
				>
					{visibleTech.map((tech) => (
						<Box key={tech} sx={badgeSx(theme)}>
							{tech}
						</Box>
					))}
					{restCount > 0 && <Box sx={badgeSx(theme)}>+{restCount}</Box>}
				</Box>
			)}
		</CardRoot>
	);
}
