import { Box, Slide, styled, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Header } from "components/header";
import { Main } from "components/main";
import { Sidebar } from "components/sidebar";

const HEADER_HEIGHT = 50;
const NAV_WIDTH = 280;

const LayoutRoot = styled(Box)({
	display: "flex",
	flexDirection: "column",
	height: "100vh",
	overflow: "hidden",
});

const Body = styled(Box)({
	display: "flex",
	flex: 1,
	minHeight: 0,
	overflow: "hidden",
});

const NavArea = styled(Box)(({ theme }) => ({
	position: "fixed",
	top: `${HEADER_HEIGHT}px`,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: theme.zIndex.drawer,
	pointerEvents: "none",
}));

const NavBackdrop = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: "rgba(0, 0, 0, 0.5)",
	pointerEvents: "auto",
});

const NavPanel = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	bottom: 0,
	width: `${NAV_WIDTH}px`,
	display: "flex",
	pointerEvents: "auto",
});

export function Layout() {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	useEffect(() => {
		if (!mobileNavOpen) {
			return;
		}
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMobileNavOpen(false);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [mobileNavOpen]);

	return (
		<LayoutRoot>
			<Header onToggleNavigation={() => setMobileNavOpen((prev) => !prev)} />
			<Body>
				{!isMobile && <Sidebar />}
				<Main />
			</Body>
			{isMobile && (
				<NavArea>
					{mobileNavOpen && (
						<NavBackdrop onClick={() => setMobileNavOpen(false)} />
					)}
					<Slide
						direction="right"
						in={mobileNavOpen}
						mountOnEnter
						unmountOnExit
					>
						<NavPanel>
							<Sidebar />
						</NavPanel>
					</Slide>
				</NavArea>
			)}
		</LayoutRoot>
	);
}
