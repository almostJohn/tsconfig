import {
	PageHeader,
	PageHeaderBody,
	PageHeaderContainer,
	PageHeaderDescription,
	PageHeaderTitle,
} from "~/components/PageHeader";
import { ConfigCodeBlock } from "~/components/ConfigCodeBlock";
import { Announcements } from "~/components/Announcements";

export default function Page() {
	return (
		<main className="relative">
			<PageHeader>
				<PageHeaderContainer>
					<PageHeaderBody>
						<Announcements />
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
