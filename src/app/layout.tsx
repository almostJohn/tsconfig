import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "~/app/providers";
import { inter, jetBrainsMono, fontSans } from "~/lib/fonts";
import { cn } from "~/lib/utils";
import { Navbar } from "~/components/Navbar";
import { Toaster } from "~/components/ui/toaster";
import { siteConfig } from "~/config/site";

import "~/styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description,
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

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background text-foreground antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>
					<section className="relative flex flex-col">
						<Navbar />
						{children}
					</section>
					<Toaster />
				</Providers>
			</body>
		</html>
	);
}
