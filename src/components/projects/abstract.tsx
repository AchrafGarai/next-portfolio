"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
	Environment,
	MeshTransmissionMaterial,
	useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import type React from "react";
import { useRef } from "react";
import { useTheme } from "next-themes";

type MaterialProps = React.ComponentProps<typeof MeshTransmissionMaterial>;

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
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const { nodes } = useGLTF("/medias/abstract.glb") as any;

	// refs for each mesh
	const refs = [
		useRef<THREE.Mesh>(null),
		useRef<THREE.Mesh>(null),
		useRef<THREE.Mesh>(null),
		useRef<THREE.Mesh>(null),
	];

	// Different speeds & directions for each mesh
	const speeds = [
		[0.01, 0.02, 0], // rotates on x & y
		[-0.015, 0, 0.01], // opposite direction
		[0, 0.01, -0.02], // z-axis spin
		[0.02, -0.01, 0], // mixed
	];

	useFrame(() => {
		refs.forEach((ref, i) => {
			if (ref.current) {
				ref.current.rotation.x += speeds[i][0];
				ref.current.rotation.y += speeds[i][1];
				ref.current.rotation.z += speeds[i][2];
			}
		});
	});

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
		<group scale={4}>
			<mesh ref={refs[0]} {...nodes.abstract}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
			<mesh ref={refs[1]} {...nodes.inner}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
			<mesh ref={refs[2]} {...nodes.shpere1}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
			<mesh ref={refs[3]} {...nodes.sphere2}>
				<MeshTransmissionMaterial {...overrideMaterial} />
			</mesh>
		</group>
	);
}
