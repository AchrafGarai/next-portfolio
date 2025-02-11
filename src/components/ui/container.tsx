import React, { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="w-full mx-auto m-6 max-w-screen-xl">{children}</div>;
}
