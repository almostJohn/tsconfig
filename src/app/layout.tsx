import * as React from "react";
import type { Metadata } from "next";
import { inter, jetBrainsMono } from "~/util/fonts";

import "../styles/globals.css";
import "../styles/defaultStyles.css";

export const metadata: Metadata = {
	title: "tsconfig",
	description: "TypeScript configuration that you can copy and paste into your projects.",
	icons: {
		other: [
			{
				url: "/tsconfig.svg",
				sizes: "32x32",
				type: "image/svg",
			},
			{
				url: "/tsconfig.svg",
				sizes: "16x16",
				type: "image/svg",
			},
		],
	},
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="bg-neutral-900 text-neutral-50 antialiased">{children}</body>
		</html>
	);
}
