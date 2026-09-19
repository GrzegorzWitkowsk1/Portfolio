import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
	Typography,
	useTheme,
} from "@mui/material";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/grzegorz.witkowski999@gmail.com";

type FieldName = "name" | "email" | "message";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewMessage() {
	const theme = useTheme();

	const [values, setValues] = useState<Record<FieldName, string>>({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
	const [status, setStatus] = useState<Status>("idle");

	const labelSx = {
		position: "static",
		transform: "none",
		marginBottom: "4px",
		fontSize: "15px",
		color: theme.palette.text.secondary,
		"&.Mui-focused": {
			color: theme.palette.primary.main,
		},
	} as const;

	const outlinedInputSx = {
		borderRadius: "14px",
		backgroundColor: "transparent",
		"& fieldset": {
			borderRadius: "14px",
			borderColor:
				theme.palette.mode === "light"
					? theme.palette.grey[300]
					: theme.palette.grey[400],
		},
		"&:hover fieldset": {
			borderColor: theme.palette.primary.main,
		},
		"&.Mui-focused fieldset": {
			borderColor: theme.palette.primary.main,
		},
		"& input, & textarea": {
			color: "text.primary",
			paddingBlock: "8px",
		},
	} as const;

	const handleChange =
		(field: FieldName) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setValues((prev) => ({ ...prev, [field]: event.target.value }));
			if (errors[field]) {
				setErrors((prev) => ({ ...prev, [field]: undefined }));
			}
		};

	const validate = (): boolean => {
		const next: Partial<Record<FieldName, string>> = {};
		if (!values.name.trim()) {
			next.name = "Name is required.";
		}
		if (!values.email.trim()) {
			next.email = "Email is required.";
		} else if (!EMAIL_REGEX.test(values.email.trim())) {
			next.email = "Please enter a valid email address.";
		}
		if (!values.message.trim()) {
			next.message = "Message is required.";
		}
		setErrors(next);
		return Object.keys(next).length === 0;
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (status === "sending") {
			return;
		}
		if (!validate()) {
			return;
		}

		setStatus("sending");
		setErrors({});

		const formData = new FormData();
		formData.append("name", values.name.trim());
		formData.append("email", values.email.trim());
		formData.append("message", values.message.trim());
		formData.append("_subject", "New message from portfolio");
		formData.append("_captcha", "false");

		try {
			const response = await fetch(FORM_SUBMIT_URL, {
				method: "POST",
				body: formData,
			});
			if (response.ok) {
				setStatus("success");
				setValues({ name: "", email: "", message: "" });
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	};

	return (
		<Box
			sx={{
				width: "100%",
				maxWidth: { xs: "100%", md: "50%" },
				marginLeft: "auto",
				marginRight: "auto",
				display: "flex",
				flexDirection: "column",
				gap: "35px",
				padding: "0 24px 32px",
			}}
		>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					<Typography
						sx={{
							fontSize: "26px",
							fontWeight: 600,
							lineHeight: 1.2,
							color: theme.palette.mode === "light" ? "black" : "white",
						}}
					>
						Get in touch
					</Typography>
					<Typography
						sx={{
							fontSize: "15px",
							lineHeight: 1.6,
							color: "text.secondary",
						}}
					>
						Have a project in mind or just want to say hi? Drop a message below
						or reach me at{" "}
						<Box
							component="a"
							href="mailto:grzegorz.witkowski999@gmail.com"
							sx={{
								textDecoration: "none",
								color: theme.palette.primary.main,
								'&:hover':{  
									textDecoration:'underline'
								}
							}}
						>
							grzegorz.witkowski999@gmail.com
						</Box>
						.
					</Typography>
				</Box>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
						gap: "16px",
					}}
				>
					<FormControl fullWidth required error={Boolean(errors.name)}>
						<InputLabel htmlFor="contact-name" shrink sx={labelSx}>
							Name
						</InputLabel>
						<OutlinedInput
							id="contact-name"
							notched={false}
							placeholder="Your name"
							value={values.name}
							onChange={handleChange("name")}
							sx={outlinedInputSx}
						/>
						{errors.name && (
							<FormHelperText>{errors.name}</FormHelperText>
						)}
					</FormControl>
					<FormControl fullWidth required error={Boolean(errors.email)}>
						<InputLabel htmlFor="contact-email" shrink sx={labelSx}>
							Email
						</InputLabel>
						<OutlinedInput
							id="contact-email"
							notched={false}
							type="email"
							placeholder="Your email"
							value={values.email}
							onChange={handleChange("email")}
							sx={outlinedInputSx}
						/>
						{errors.email && (
							<FormHelperText>{errors.email}</FormHelperText>
						)}
					</FormControl>
				</Box>

				<FormControl fullWidth required error={Boolean(errors.message)}>
					<InputLabel htmlFor="contact-message" shrink sx={labelSx}>
						Message
					</InputLabel>
					<OutlinedInput
						id="contact-message"
						notched={false}
						multiline
						minRows={4}
						placeholder="Tell me about your project and how can I help you..."
						value={values.message}
						onChange={handleChange("message")}
						sx={outlinedInputSx}
					/>
					{errors.message && (
						<FormHelperText>{errors.message}</FormHelperText>
					)}
				</FormControl>

				<Button
					type="submit"
					variant="contained"
					disabled={status === "sending"}
					fullWidth
					startIcon={<Send size={18} />}
					sx={{
						paddingY: "12px",
						fontSize: "15px",
						fontWeight: 600,
						textTransform: "none",
						borderRadius: "14px",
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
						"&:hover": {
							backgroundColor: theme.palette.primary.dark,
						},
					}}
				>
					{status === "sending" ? "Sending..." : "Send message"}
				</Button>

				{status === "success" && (
					<Typography
						sx={{
							fontSize: "14px",
							color: theme.palette.success.main,
						}}
					>
						Your message has been sent. Thanks for reaching out!
					</Typography>
				)}
				{status === "error" && (
					<Typography
						sx={{
							fontSize: "14px",
							color: theme.palette.error.main,
						}}
					>
						Something went wrong. Please try again or email me directly.
					</Typography>
				)}
			</Box>
		</Box>
	);
}