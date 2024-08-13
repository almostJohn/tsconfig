"use client";

import * as React from "react";
import { Provider } from "jotai";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<ThemeProvider attribute="class">
			<Provider>{children}</Provider>
		</ThemeProvider>
	);
}
