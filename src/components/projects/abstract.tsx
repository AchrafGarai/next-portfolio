"use client";
import { Canvas } from "@react-three/fiber";

import { Environment, PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
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

export function AbstractShape({
	color,
	material,
}: {
	color: string;
	material?: MaterialProps;
}) {
	const { theme } = useTheme();
	const bg = theme === "light" ? "hsl(0,0%, 97%)" : "hsl(0 ,0%, 0%)";
	return (
		<Canvas style={{ height: "85vh" }}>
			<Model matColor={color} material={material} />
			<directionalLight intensity={2} position={[0, 2, 3]} />
			<Environment preset="city" />
			<color attach="background" args={[bg]} />
		</Canvas>
	);
}

function Model({
	matColor,

	material,
}: {
	matColor: string;
	material?: MaterialProps;
}) {
	const { theme } = useTheme();
	const { nodes } = useGLTF("/medias/abstract.glb");
	const { viewport } = useThree();
	const object = useRef<THREE.Mesh>(null);

	useFrame(() => {
		if (object.current) {
			object.current.rotation.x += 0.02;
		}
	});

	/* 	const materialProps = useControls({
		thickness: { value: 0.6, min: 0, max: 3, step: 0.05 },
		roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		transmission: { value: 1, min: 0, max: 1, step: 0.1 },
		ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
		chromaticAberration: { value: 0.08, min: 0, max: 1 },
		backside: { value: false },
		color: { value: matColor },
	}); */

	const overrideMaterial = material
		? { ...material, color: new THREE.Color(matColor) }
		: {
				thickness: 0.6,
				roughness: 0.1,
				transmission: 1,
				ior: 0.9,
				chromaticAberration: 0.08,
				backside: false,
				color: new THREE.Color(matColor),
			};

	return (
		<group ref={object} position={[0, 0, 0]} scale={4} rotation={[0, 10, 0]}>
			<mesh {...nodes.abstract}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
			<mesh ref={object} {...nodes.inner}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
			<mesh ref={object} {...nodes.shpere1}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
			<mesh ref={object} {...nodes.sphere2}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
		</group>
	);
}
