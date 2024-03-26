import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex px-6 py-2 gap-2 rounded-md items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-[#5865f2] text-neutral-50 hover:bg-[#5865f2]/90",
				outline: "border border-neutral-300 border-neutral-700 bg-transparent hover:bg-neutral-800/90",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
