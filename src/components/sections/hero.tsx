import { cn } from "@/lib/utils";

const LEFT_TITLE = "REDEFINE";
const RIGHT_TITLE = "GAMING";

function HeroSection() {
  return (
    <div className=" max-w-[1980px] mx-auto">
      <div className="relative h-screen bg-light-gray overflow-hidden">
        {/* Background titles */}
        <LeftTitle />
        <RightTitle />

        <div
          className="absolute top-0 left-0 w-full h-full bg-indigo-500"
          style={{ clipPath: "polygon(20% 0%, 80% 0%, 86% 90%, 10% 57%)" }}
        >
          {/* Foreground titles  */}
          <LeftTitle className="z-20 text-background" />
          <RightTitle className="z-20 text-background" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

function LeftTitle({ className }: { className?: string }) {
  return (
    <div className={cn("absolute top-4 left-16 leading-tight  ", className)}>
      <h1 className=" text-[10rem] font-bold font-tanker">{LEFT_TITLE}</h1>
      <p>Hello world</p>
    </div>
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
