import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { inter, jetBrainsMono, fontSans } from "~/util/fonts";
import { cn } from "~/lib/utils";

import "../styles/globals.css";
import "../styles/default-styles.css";

export const metadata: Metadata = {
	title: "tsconfig",
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

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
