"use client";
import { Image, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

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
	const radius = 1.5;

	// Generate default placeholder images if none provided
	const defaultImages = Array.from(
		{ length: numPlanes },
		(_, i) => "/branding/lofiapp/mockup-2.jpg",
	);

	useFrame((state, delta: number | undefined) => {
		if (groupRef.current) {
			groupRef.current.rotation.x += 0.001;
		}
	});

	return (
		<>
			<OrthographicCamera
				makeDefault
				position={[0, 0, 0]}
				zoom={500}
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
							url={imageUrl}
							position={[x, 0, z]}
							rotation={euler}
							scale={[1, 2]} // Width, height, depth
						/>
					);
				})}
			</group>
		</>
	);
};
