import { SpeedDial, SpeedDialAction } from "@mui/material";
import { useEffect, useState } from "react";
import { locales } from "../../consts";
import { useTranslation } from "react-i18next";
import { ReactComponent as PlIcon } from "../../assets/flags/pl-PL.svg";
import { ReactComponent as EnIcon } from "../../assets/flags/en-EN.svg";

export default function LanguagePopover() {
	const [open, setOpen] = useState(false);
	const { i18n } = useTranslation();

	function onChangeLang(lang: string) {
		i18n.changeLanguage(lang);
	}

	function getLanguageIcon(lang?: string) {
		switch (lang) {
			case "en-EN":
				return <EnIcon height={32} width={32} />;
			case "pl-PL":
				return <PlIcon height={32} width={32} />;
			default:
				return null;
		}
	}

	function handleOpenMenu() {
		setOpen(true);
	}
	function handleCloseMenu() {
		setOpen(false);
	}

	useEffect(() => {
		console.log(i18n.language);
	}, [i18n.language]);

	return (
		<SpeedDial
			onMouseOver={handleOpenMenu}
			onMouseLeave={handleCloseMenu}
			open={open}
			ariaLabel="Language selector"
			sx={{
				"& .MuiButtonBase-root.MuiFab-root.MuiSpeedDial-fab": {
					backgroundColor: "white !important",
					color: "text.primary",
					width: "40px",
					height: "40px",
				},
				position: "fixed",
				bottom: 16,
				right: 16,
			}}
			icon={getLanguageIcon(i18n.language)}
		>
			{locales.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={getLanguageIcon(action.prefix)}
					onClick={() => {
						onChangeLang(action.prefix);
						handleCloseMenu();
					}}
				/>
			))}
		</SpeedDial>
	);
}
