export const siteConfig = {
	title: {
		default: "tsconfig",
		template: "%s | tsconfig",
	},
	name: "tsconfig",
	description: "a typescript configuration that you can copy and paste into your projects.",
	links: {
		typescriptWebsite: "https://www.typescriptlang.org",
		twitter: "https://x.com/almostJohn1",
		github: "https://github.com/almostJohn/tsconfig",
	},
};

export type SiteConfig = typeof siteConfig;
