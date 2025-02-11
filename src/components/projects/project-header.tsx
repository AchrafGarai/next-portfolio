import React from "react";
import Artbaord from "@/components/projects/artboard";
import Image from "next/image";
import ThemedImage from "./themed-image";
import { TextReveal } from "@/components/magicui/text-reveal";

function ProjectHeader({
  title,
  description,
  imageSrc,
}: {
  title: string;
  description: string;
  imageSrc?: { lightSrc: string; darkSrc: string };
}) {
  return (
    <div className="flex flex-col flex-grow justify-center items-center py-12 min-h-screen ">
      <div className="relative mb-12">
        {/* <Artbaord title="Artboard 1" /> */}
        {/* <div className="h-96 bg-gradient-to-t from-background via-50% w-full absolute bottom-0" /> */}

        {imageSrc && (
          <div className="p-2 bg-gradient-to-b from-accent  rounded-3xl backdrop-blur border absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[960px] z-0 opacity-20 ">
            <ThemedImage
              srcLight={imageSrc.lightSrc}
              srcDark={imageSrc.darkSrc}
              alt={title}
              width={960}
              height={540}
              className="border-4 rounded-2xl shadow-2xl "
            />
          </div>
        )}
      </div>

      <div className="max-w-3xl mb-9 absolute z-30 ">
        <div className=" flex flex-col gap-6 justify-center items-center">
          <p className="text-muted-foreground">Case Study</p>
          <h3 className="text-8xl font-tanker text-center">
            Aichor -{" "}
            <span className=" text-muted-foreground">
              Building a next Gen AI Platform
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
