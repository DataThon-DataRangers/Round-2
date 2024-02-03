import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return (
		<div className="relative w-full">
			<input
				type={type}
				className={cn(
					"flex h-14 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
			<svg
				className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-10"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</div>
	);
});
Input.displayName = "Input";

export { Input };
