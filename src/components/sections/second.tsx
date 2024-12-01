import { cn } from "@/lib/utils";
import React from "react";

function SecondSection() {
  return (
    <section className="h-screen">
      <div className="relative w-full h-full">
        <MasketContent />
        <div
          className="relative w-full h-full bg-indigo-500"
          style={{ clipPath: "polygon(41% 38%, 56% 34%, 60% 73%, 43% 58%)" }}
        >
          <MasketContent className=" z-20 text-background " />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;

function MasketContent({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute m-auto left-0 right-0 top-0 bottom-0 flex flex-col gap-3 justify-center items-center text-center leading-tight",
        className
      )}
    >
      <p>Hello world</p>
      <h2 className=" text-9xl font-tanker">Redefine gaming</h2>
    </div>
  );
}
