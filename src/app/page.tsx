import BrandingGalley from "@/components/sections/branding-callery";
import { CodeGallery } from "@/components/sections/code-gallery";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import { ProjectGallery } from "@/components/sections/project-gallery";
import SecondSection from "@/components/sections/second";
import SkillTags from "@/components/sections/skill-tags";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
	return (
		<>
			<div className=" absolute top-4 right-4 z-50">
				<ThemeToggle />
			</div>
			<section>
				<HeroSection />
				<SecondSection />
				<ProjectGallery />
				<CodeGallery />
				<BrandingGalley />
				<SkillTags />
				<Footer />
			</section>
		</>
	);
}
