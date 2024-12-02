 
'use client'
import { Cylinder }  from "@/components/projects/cylinder-scroll";
import { Gallery } from "../projects/project-gallery";
import { Canvas } from "@react-three/fiber";

export function CodeGallery() {
  return (
    <section className=" min-h-screen flex flex-col gap-6 justify-center items-center">
      <div className=" flex flex-col gap-6 justify-center items-center max-w-[600px]">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sodales ac tellus eu velit. At
          vel
        </p>
        <h3 className="text-6xl font-tanker text-center">
          Discover the world's largest shared adventure, crafted by everyone
        </h3>
      </div>
      <div className="h-screen w-full">
        <Canvas >
            <Cylinder/>
            <ambientLight />
        </Canvas>
      </div>
    </section>
  );
}
