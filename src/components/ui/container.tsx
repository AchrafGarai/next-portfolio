import React, { type ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
	return <div className="w-full mx-auto  max-w-screen-xl px-8">{children}</div>;
}
