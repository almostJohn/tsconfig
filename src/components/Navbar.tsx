import Link from "next/link";
import { ModeToggle } from "~/components/ModeToggle";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
