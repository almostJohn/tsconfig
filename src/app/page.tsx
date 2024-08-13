import * as React from "react";
import {
	PageHeader,
	PageHeaderBody,
	PageHeaderContainer,
	PageHeaderDescription,
	PageHeaderTitle,
} from "~/components/PageHeader";
import { ConfigCodeBlock } from "~/components/ConfigCodeBlock";
import { Announcement } from "~/components/Announcement";

export default function Page() {
	return (
		<main className="relative">
			<PageHeader>
				<PageHeaderContainer>
					<PageHeaderBody>
						<Announcement />
						<PageHeaderTitle>Build Your App with TypeScript</PageHeaderTitle>
						<PageHeaderDescription>
							A TypeScript configuration that you can copy and paste into your projects.
						</PageHeaderDescription>
					</PageHeaderBody>
					<div className="items-start flex text-start">
						<ConfigCodeBlock />
					</div>
				</PageHeaderContainer>
			</PageHeader>
		</main>
	);
}
