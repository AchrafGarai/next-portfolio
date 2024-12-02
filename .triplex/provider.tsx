import React from "react";

export default function Provider({
    children,
    sky,
  }: React.PropsWithChildren<{ sky?: "dark" | "light" }>) {
    return (
      <>
        {children}
      </>
    );
  }