"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import copy from "clipboard-copy";
import { cn } from "~/util/cn";
import { tsConfigNodeJs, tsConfigNextJs, tsConfigEslint } from "~/util/tsconfig";

export function CopyNodeJsTSConfig() {
	const [interacted, setInteracted] = React.useState<boolean>(false);

	const handleClickCopy = () => {
		const jsonConfig = JSON.stringify(tsConfigNodeJs);
		copy(jsonConfig);
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<button
			className={cn(
				"cursor-copy rounded-md border px-4 py-2 font-mono  border-neutral-700 dark:bg-transparent hover:bg-neutral-800 text-neutral-50 place-self-center",
			)}
			onClick={handleClickCopy}
			type="button"
		>
			<span className="font-semibold text-[#5865f2]">{">"}</span> node.js tsconfig.json{" "}
			{interacted ? (
				<Check className="ml-1 inline-block h-4 w-4 text-green-500" />
			) : (
				<Copy className="ml-1 inline-block h-4 w-4" />
			)}
		</button>
	);
}

export function CopyNextJsTSConfig() {
	const [interacted, setInteracted] = React.useState<boolean>(false);

	const handleClickCopy = () => {
		const jsonConfig = JSON.stringify(tsConfigNextJs);
		copy(jsonConfig);
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<button
			className={cn(
				"cursor-copy rounded-md border px-4 py-2 font-mono border-neutral-700 dark:bg-transparent hover:bg-neutral-800 text-neutral-50 place-self-center",
			)}
			onClick={handleClickCopy}
			type="button"
		>
			<span className="font-semibold text-[#5865f2]">{">"}</span> next.js tsconfig.json{" "}
			{interacted ? (
				<Check className="ml-1 inline-block h-4 w-4 text-green-500" />
			) : (
				<Copy className="ml-1 inline-block h-4 w-4" />
			)}
		</button>
	);
}

export function CopyTSConfigEslint() {
	const [interacted, setInteracted] = React.useState<boolean>(false);

	const handleClickCopy = () => {
		const jsonConfig = JSON.stringify(tsConfigEslint);
		copy(jsonConfig);
		setInteracted(true);
		setTimeout(() => setInteracted(false), 2_000);
	};

	return (
		<button
			className={cn(
				"cursor-copy rounded-md border px-4 py-2 font-mono  border-neutral-700 dark:bg-transparent hover:bg-neutral-800 text-neutral-50 place-self-center",
			)}
			onClick={handleClickCopy}
			type="button"
		>
			<span className="font-semibold text-[#5865f2]">{">"}</span> tsconfig.eslint.json{" "}
			{interacted ? (
				<Check className="ml-1 inline-block h-4 w-4 text-green-500" />
			) : (
				<Copy className="ml-1 inline-block h-4 w-4" />
			)}
		</button>
	);
}
