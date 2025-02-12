"use client";
import { Canvas } from "@react-three/fiber";

import { Environment } from "@react-three/drei";
import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";
import { color } from "motion/react";

export function Logo3d({ title, color }: { title: string; color: string }) {
	return (
		<Canvas style={{ height: "75vh" }}>
			<Model title={title} matColor={color} />
			<directionalLight intensity={2} position={[0, 2, 3]} />
			<Environment preset="city" />
		</Canvas>
	);
}

function Model({ title, matColor }: { title: string; matColor: string }) {
	const { nodes } = useGLTF(`/medias/${title}.glb`);
	const { viewport } = useThree();
	const object = useRef<THREE.Mesh>(null);

	useFrame(() => {
		if (object.current) {
			object.current.rotation.x += 0.02;
		}
	});

	const materialProps = useControls({
		thickness: { value: 0.6, min: 0, max: 3, step: 0.05 },
		roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
		transmission: { value: 1, min: 0, max: 1, step: 0.1 },
		ior: { value: 0.9, min: 0, max: 3, step: 0.1 },
		chromaticAberration: { value: 0.08, min: 0, max: 1 },
		backside: { value: false },
		color: { value: matColor },
	});

	const material = {
		thickness: 0.6,
		roughness: 0.1,
		transmission: 1,
		ior: 0.9,
		chromaticAberration: 0.08,
		backside: false,
		color: new THREE.Color(matColor),
	};

	return (
		<group scale={viewport.width / 3.75}>
			<Text
				font={"/fonts/Tanker-Regular.ttf"}
				position={[0, 0, -1]}
				fontSize={1}
				color="white"
				anchorX="center"
				anchorY="middle"
			>
				{title}
			</Text>
			<mesh ref={object} {...nodes[title]}>
				<MeshTransmissionMaterial {...material} />
			</mesh>
		</group>
	);
}
