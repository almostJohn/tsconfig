import * as React from "react";
import { PageHeader, PageHeaderHeading, PageActions, PageHeaderDescription } from "./page-header";
import { Announcement } from "./announcements";
import { siteConfig } from "~/config/site";
import { TypescriptConfigEditor } from "./typescript-config-editor";

export function HeroSection() {
	return (
		<div className="container relative">
			<PageHeader>
				<Announcement />
				<PageHeaderHeading>Build your App with TypeScript</PageHeaderHeading>
				<PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
				<PageActions>
					<TypescriptConfigEditor />
				</PageActions>
			</PageHeader>
		</div>
	);
}
