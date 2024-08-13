import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "~/components/ModeToggle";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-100/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/60 dark:bg-neutral-900/95 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-neutral-900/60">
			<div className="container flex max-w-7xl h-20 items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-bold tracking-tight">
						<span className="text-blue-500">ts</span>config
					</Link>
				</div>
				<ModeToggle />
			</div>
		</header>
	);
}
