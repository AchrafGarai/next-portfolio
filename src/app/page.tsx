import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className=" absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <section>
        <div className="relative w-screen h-screen bg-light-gray overflow-hidden">
          <h1 className="absolute top-4 left-16 text-[10rem] font- font-tanker">
            REDEFINE
          </h1>
          <h1 className="absolute bottom-4 right-16 text-[10rem] font-bold font-tanker">
            GAMING
          </h1>
          {/* <PolygonMask /> */}
        </div>
      </section>
    </>
  );
}
