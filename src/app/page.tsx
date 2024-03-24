import * as React from "react";
import Link from "next/link";
import { Announcement } from "~/components/announcement";
import { CopyTSConfig, CopyTSConfigEslint } from "~/components/copy-config-button";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "~/components/page-header";
import { cn } from "~/util/cn";
import { ArrowUpRightIcon } from "lucide-react";
import { buttonVariants } from "~/components/button";

export default function Page() {
	return (
		<main className="min-h-screen flex flex-col container max-w-7xl p-4 mx-auto">
			<PageHeader>
				<Announcement />
				<PageHeaderHeading>
					<span className="text-sky-600">TS</span>Config
				</PageHeaderHeading>
				<PageHeaderDescription>
					Harness the power of TypeScript&apos;s robust features for building scalable applications. Whether you&apos;re
					coding a personal project or a large-scale application, this configuration ensures productivity and code
					quality. Copy, paste, and unlock TypeScript&apos;s full potential in your development journey.
				</PageHeaderDescription>
				<PageActions>
					<Link href="https://github.com/almostJohn/tsconfig" className={cn(buttonVariants({ variant: "outline" }))}>
						GitHub <ArrowUpRightIcon />
					</Link>
				</PageActions>
				<div className="pt-2 flex flex-col items-center justify-center gap-4">
					<CopyTSConfig />
					<CopyTSConfigEslint />
				</div>
			</PageHeader>
		</main>
	);
}
