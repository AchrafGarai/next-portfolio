import Artbaord from "@/components/projects/artboard";
import ProjectHeader from "@/components/projects/project-header";
import BrandingGalley from "@/components/sections/branding-callery";
import { Container } from "@/components/ui/container";
import Image from "next/image";
const ImageSouurce = {
  lightSrc: "/aichor/aichor-experiments.png",
  darkSrc: "/aichor/aichor-experiments-dark.png",
};

function Page() {
  return (
    <>
      <Container>
        <ProjectHeader
          title={"Aichor-Building a next Gen AI Platform"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At vel"
          }
          imageSrc={ImageSouurce}
        />

        <div className="min-h-screen flex items-center justify-center">
          <Image
            className="drop-shadow-[0px_0px_194px_#0ea5e9]"
            width={128}
            height={128}
            src={"/aichor/aichor-logo.png"}
            alt=""
          />
        </div>

        <div className="text-2xl font-medium text-left">
          <div className=" pb-6 border-b flex ">
            <div className="flex-grow flex  items-start gap-4">
              <span className=" text-muted-foreground">About</span>
              <span>Aichor</span>
            </div>
            <div>Case Study</div>
          </div>
          <p className="mt-6 font">
            Lorem ipsum dolor sit amet consectetur. Maecenas ac turpis semper
            cras velit vulputate congue viverra. Maecenas nulla odio fringilla
            mi arcu faucibus ultrices cras. Tempus phasellus urna.
          </p>
        </div>

        <BrandingGalley />
      </Container>
    </>
  );
}

export default Page;
