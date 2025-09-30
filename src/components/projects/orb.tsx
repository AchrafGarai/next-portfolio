"use client";
import { Canvas } from "@react-three/fiber";
import {
	Environment,
	PerspectiveCamera,
	Sphere,
	Text,
} from "@react-three/drei";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { useTheme } from "next-themes";

type MaterialProps = {
	thickness: number;
	roughness: number;
	transmission: number;
	ior: number;
	chromaticAberration: number;
	backside: boolean;
};

export function Orb({
	content,
	color,
	material,
}: {
	content: string;
	title: string;
	color: string;
	material?: MaterialProps;
}) {
	const { theme } = useTheme();
	const bg = theme === "light" ? "hsl(0,0%, 97%)" : "hsl(0 ,0%, 0%)";

	return (
		<Canvas style={{ height: "85vh" }}>
			<Model matColor={color} text={content} material={material} />
			<directionalLight intensity={2} position={[0, 2, 3]} />
			<Environment preset="city" />
			<color attach="background" args={[bg]} />
		</Canvas>
	);
}

function Model({
	matColor,
	text,
	material,
}: {
	text: string;
	matColor: string;
	material?: MaterialProps;
}) {
	const { theme } = useTheme();
	const { viewport } = useThree();
	const object = useRef<THREE.Mesh>(null);

	useFrame(() => {
		if (object.current) {
			object.current.rotation.x += 0.002;
		}
	});

	// 🔹 Leva controls for sphere transform
	const { position, rotation, scale } = useControls("Sphere Transform", {
		position: { value: [0, 0, 0], step: 0.1 },
		rotation: { value: [0, 0, 0], step: 0.1 },
		scale: { value: 1, min: 0.1, max: 5, step: 0.1 },
	});

	// 🔹 Leva controls for material
	const materialProps = useControls("Material", {
		thickness: { value: 0.6, min: 0, max: 3, step: 0.05 },
		roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		transmission: { value: 1, min: 0, max: 1, step: 0.1 },
		ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
		chromaticAberration: { value: 0.08, min: 0, max: 1 },
		backside: { value: false },
		color: { value: matColor },
	});

	const overrideMaterial = material
		? { ...material, color: new THREE.Color(matColor) }
		: { ...materialProps, color: new THREE.Color(matColor) };

	return (
		<group scale={viewport.width / 3.75}>
			<Text
				font={"/fonts/Tanker-Regular.ttf"}
				position={[0, 0, -1]}
				fontSize={1}
				color={theme === "light" ? "black" : "white"}
				anchorX="center"
				anchorY="middle"
			>
				{text}
			</Text>
			<Sphere
				ref={object}
				args={[1, 64, 64]}
				position={position}
				rotation={rotation}
				scale={scale}
			>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</Sphere>
		</group>
	);
}
