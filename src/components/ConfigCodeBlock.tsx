"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { template } from "~/lib/tsconfig";
import { buttonVariants } from "~/styles/button";
import { cn } from "~/lib/utils";
import { useToast } from "~/components/ui/use-toast";

export function ConfigCodeBlock() {
	const { toast } = useToast();
	const [interacted, setInteracted] = React.useState(false);

	const handleCopy = (): void => {
		navigator.clipboard.writeText(template).then(() => {
			setInteracted(true);
			toast({
				className: "bg-neutral-100 dark:bg-neutral-900",
				description: "Copied to clipboard",
			});
			setTimeout(() => {
				setInteracted(false);
			}, 3_000);
		});
	};

	return (
		<div className="container relative items-center overflow-y-auto w-full max-h-72 shadow px-5 py-2 border border-neutral-200 dark:border dark:border-neutral-800 rounded">
			<button
				className={cn(
					buttonVariants({
						variant: "ghost",
						size: "icon",
						className: "absolute top-2 right-2",
					}),
				)}
				onClick={handleCopy}
			>
				{interacted ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
			</button>
			<pre className="overflow-auto">
				<code className="text-sm/relaxed">{template}</code>
			</pre>
		</div>
	);
}
