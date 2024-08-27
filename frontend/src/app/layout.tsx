import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "AI Festival finder",
	description: "Find festivals based on your music",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
