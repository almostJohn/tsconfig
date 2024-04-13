"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "./ui/button";
import { template } from "~/util/tsconfig";

export function TypescriptConfigEditor() {
	const [interacted, setInteracted] = React.useState(false);

	const handleCopy = (): void => {
		navigator.clipboard.writeText(template).then(() => {
			setInteracted(true);
			setTimeout(() => {
				setInteracted(false);
			}, 3_000);
		});
	};

	return (
		<div className="container relative items-center overflow-auto max-h-96 border border-input px-3 py-1 bg-background rounded-lg">
			<Button variant="outline" size="icon" className="absolute top-2 right-2" onClick={handleCopy}>
				{interacted ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
			</Button>
			<pre className="overflow-auto">
				<code className="text-sm/relaxed">{template}</code>
			</pre>
		</div>
	);
}
