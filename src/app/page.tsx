import HeroSection from "@/components/sections/hero";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <div className=" absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <section>
        <HeroSection />
      </section>
    </>
  );
}
