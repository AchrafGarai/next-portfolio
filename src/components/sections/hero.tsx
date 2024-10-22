import { cn } from "@/lib/utils";
import React from "react";

const LEFT_TITLE = "REDEFINE";
const RIGHT_TITLE = "GAMING";

function HeroSection() {
  return (
    <div className="relative w-screen h-screen bg-light-gray overflow-hidden">
      {/* Background titles */}
      <LeftTitle />
      <RightTitle />

      <div
        id="polygon-mask"
        className="absolute top-0 left-0 w-full h-full bg-red-500"
        style={{ clipPath: "polygon(20% 0%, 80% 0%, 86% 90%, 10% 57%)" }}
      >
        {/* Foreground titles  */}
        <LeftTitle className="z-20 text-background" />
        <RightTitle className="z-20 text-background" />
      </div>
    </div>
  );
}

export default HeroSection;

function LeftTitle({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "absolute top-4 left-16 text-[10rem] font- font-tanker",
        className
      )}
    >
      {LEFT_TITLE}
    </h1>
  );
}

function RightTitle({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "absolute bottom-4 right-16 text-[10rem] font-bold font-tanker",
        className
      )}
    >
      {RIGHT_TITLE}
    </h1>
  );
}
