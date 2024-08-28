import type { Metadata } from "next";
import "./globals.css";

import { TheHeader } from "@/components/header/TheHeader";

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
			<body className=" w-full bg-black-secondary h-[110vh]">
				<TheHeader isBeta={true} />
				{children}
			</body>
		</html>
	);
}
