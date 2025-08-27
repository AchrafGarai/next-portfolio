"use client";
import { UIProjectMap } from "@/data/ui/projects";
import { Image, OrthographicCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
// Take first 4 thumbnails
const firstFour = UIProjectMap.slice(0, 4).map((p) => p.thumbnail);

// Repeat them twice
const Images = [...firstFour, ...firstFour];
export const Cylinder = ({
	className,
	images = [],
}: {
	className?: string;
	images?: string[]; // Array of image URLs
}) => {
	const groupRef = useRef<THREE.Group>(null);
	const numPlanes = 8;
	const angleStep = (2 * Math.PI) / numPlanes;
	const radius = 1.25;

	// Generate default placeholder images if none provided
	const defaultImages = Array.from(
		{ length: numPlanes },
		(_, i) => "/branding/lofiapp/mockup-2.jpg",
	);

	useFrame((state, delta: number | undefined) => {
		if (groupRef.current) {
			groupRef.current.rotation.x += 0.003;
		}
	});

	const { viewport } = useThree();
	return (
		<>
			<OrthographicCamera
				makeDefault
				position={[-1.2, 0.1, 1]}
				zoom={500}
				/* 	zoom={500} Default */
				rotation={[0, 0, -0.4]}
			/>
			<group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 11]}>
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

					// Get the image for this plane (cycle through available images)
					const imageUrl = defaultImages[index % defaultImages.length];

					return (
						<Image
							key={uniqueKey}
							url={Images[index]}
							position={[x, 0, z]}
							rotation={[euler.x, euler.y, euler.z + Math.PI / 2]}
							scale={[1.75, 1]} // Width, height, depth
							segments={32} // Add segments for bending
							radius={0.05}
						/>
					);
				})}
			</group>
		</>
	);
};
