import * as React from "react";
import Link from "next/link";
import { Announcement } from "~/components/announcement";
import { CopyConfigButton } from "~/components/copy-config-button";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header";
import { cn } from "~/util/cn";
import { ArrowUpRightIcon } from "lucide-react";

export default function Page() {
	return (
		<main className="min-h-screen flex flex-col container max-w-7xl p-4 mx-auto">
			<PageHeader>
				<Announcement />
				<PageHeaderHeading>
					<span className="text-sky-600">TS</span>Config. Make it yours.
				</PageHeaderHeading>
				<PageHeaderDescription>
					Harness the power of TypeScript&apos;s robust features for building scalable applications. Whether you&apos;re
					coding a personal project or a large-scale application, this configuration ensures productivity and code
					quality. Copy, paste, and unlock TypeScript&apos;s full potential in your development journey.
				</PageHeaderDescription>
				<PageActions>
					<Link
						href="https://github.com/almostJohn/tsconfig"
						className={cn(
							"inline-flex px-6 py-2 rounded-md items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-neutral-300 bg-neutral-50 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-transparent dark:hover:bg-neutral-800",
						)}
					>
						GitHub <ArrowUpRightIcon />
					</Link>
				</PageActions>
				<div className="pt-4" />
				<CopyConfigButton />
			</PageHeader>
		</main>
	);
}
