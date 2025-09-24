"use client";
import { UIProjectMap } from "@/data/ui/projects";
import { Image, OrthographicCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// Take first 4 thumbnails
const firstFour = UIProjectMap.slice(0, 4).map((p) => p.thumbnail);

// Repeat them twice
const Images = [...firstFour, ...firstFour];

export const Cylinder = ({
	className,
	cameraPosition,
	cameraRotation,
	cameraZoom,
	groupPosition,
	groupRotation,
	reverse = false,
}: {
	className?: string;
	images?: string[];
	cameraPosition: [number, number, number];
	cameraRotation: [number, number, number];
	cameraZoom: number;
	groupPosition: [number, number, number];
	groupRotation: [number, number, number];
	reverse?: boolean;
}) => {
	const groupRef = useRef<THREE.Group>(null);
	const numPlanes = 8;
	const angleStep = (2 * Math.PI) / numPlanes;
	const radius = 1.25;
	const direction = reverse ? -1 : 1;

	// Generate default placeholder images if none provided
	const defaultImages = Array.from(
		{ length: numPlanes },
		() => "/branding/lofiapp/mockup-2.jpg",
	);

	useFrame(() => {
		if (groupRef.current) {
			groupRef.current.rotation.x += 0.003 * direction;
		}
	});

	useThree();

	return (
		<>
			<OrthographicCamera
				makeDefault
				position={cameraPosition}
				zoom={cameraZoom}
				rotation={cameraRotation}
			/>
			<group ref={groupRef} position={groupPosition} rotation={groupRotation}>
				{Array.from({ length: numPlanes }, (_, index) => {
					const uniqueKey = `image-${index}-${Math.random()}`;
					const angle = angleStep * index;
					const x = Math.cos(angle) * radius;
					const z = Math.sin(angle) * radius;
					const lookAtPosition = new THREE.Vector3(0, 0, 0);

					const planePosition = new THREE.Vector3(x, 0, z);
					const directionToCenter = lookAtPosition
						.clone()
						.sub(planePosition)
						.normalize();

					// Calculate rotation to face the center
					const euler = new THREE.Euler().setFromQuaternion(
						new THREE.Quaternion().setFromUnitVectors(
							new THREE.Vector3(0, 0, 1),
							directionToCenter,
						),
					);

					// Get the image for this plane
					const imageUrl = defaultImages[index % defaultImages.length];

					return (
						<Image
							key={uniqueKey}
							url={Images[index]}
							position={[x, 0, z]}
							rotation={[euler.x, euler.y, euler.z + Math.PI / 2]}
							scale={[1.75, 1]}
							segments={32}
							radius={0.05}
						/>
					);
				})}
			</group>
		</>
	);
};
