"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { tsConfig, tsConfigShort } from "~/util/tsconfig";

function useMediaQuery(query: string) {
	const isClient = typeof window === "object";

	const [matches, setMatches] = React.useState(isClient ? window.matchMedia(query).matches : false);

	React.useEffect(() => {
		if (!isClient) {
			return;
		}

		const mediaQuery = window.matchMedia(query);
		const handler = (e: MediaQueryListEvent) => {
			setMatches(e.matches);
		};

		mediaQuery.addEventListener("change", handler);
		setMatches(mediaQuery.matches);

		return () => mediaQuery.removeEventListener("change", handler);
	}, [query, isClient]);

	return matches;
}

export function TypescriptConfigEditor() {
	const [interacted, setInteracted] = React.useState(false);
	const isMobile = useMediaQuery("(max-width: 640px)");

	const handleCopy = (): void => {
		navigator.clipboard.writeText(tsConfig).then(() => {
			setInteracted(true);
			setTimeout(() => {
				setInteracted(false);
			}, 3_000);
		});
	};

	return (
		<div className="container relative items-center overflow-auto max-h-96 border border-input px-3 py-1 bg-background rounded-lg">
			<div className="relative">
				<pre>
					<code className="text-xs/relaxed">{isMobile ? tsConfigShort : tsConfig}</code>
				</pre>
			</div>
			<div className="absolute right-0 top-0 mt-2 mx-2">
				<Button variant="outline" size="icon" onClick={handleCopy}>
					{interacted ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
				</Button>
			</div>
		</div>
	);
}
