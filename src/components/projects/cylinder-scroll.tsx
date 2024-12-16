"use client";

import {
	MeshDistortMaterial,
	OrthographicCamera,
	PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import * as THREE from "three";

export const Cylinder = ({ className }: { className?: string }) => {
	const groupRef = useRef<THREE.Group>(null); // Reference for the parent group
	const numPlanes = 8; // Total number of planes for the cylinder
	const angleStep = (2 * Math.PI) / numPlanes; // Angle between adjacent planes
	const radius = 1.5; // Radius of the cylinder

	// Rotate the parent group
	useFrame((state, delta: number | undefined) => {
		if (groupRef.current) {
			groupRef.current.rotation.x += 0.001; // Slowly rotate the entire cylinder
		}
	});

	return (
		<>
			{/* Add an orthographic camera centered

       <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={200} />
      
      at the origin */}
			<OrthographicCamera
				makeDefault
				position={[0, 0, 0]}
				zoom={500}
				rotation={[0, 0, -0.4]}
			/>
			<group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 11]}>
				{/* Generate planes arranged in a circular shape */}
				{Array.from({ length: numPlanes }, (_, index) => {
					const uniqueKey = `plane-${index}-${Math.random()}`;
					const angle = angleStep * index;
					const x = Math.cos(angle) * radius; // Circular x-coordinate
					const z = Math.sin(angle) * radius; // Circular z-coordinate
					const lookAtPosition = new THREE.Vector3(0, 0, 0); // Center of the cylinder

					// Compute direction vector for the plane to look at the center
					const planePosition = new THREE.Vector3(x, 0, z);
					const directionToCenter = lookAtPosition
						.clone()
						.sub(planePosition)
						.normalize();
					const quaternion = new THREE.Quaternion().setFromUnitVectors(
						new THREE.Vector3(0, 0, 1), // Default plane normal (z-axis)
						directionToCenter,
					);

					return (
						<mesh
							key={uniqueKey}
							position={[x, 0, z]} // Circular positioning
							quaternion={quaternion} // Use quaternion to make the plane face the center
						>
							<planeGeometry args={[1, 2, 32, 32]} />
							<MeshDistortMaterial
								distort={0.25}
								speed={2}
								color={
									new THREE.Color(
										`hsl(${(360 / numPlanes) * index}, 100%, 60%)`,
									)
								}
							/>
						</mesh>
					);
				})}
			</group>
		</>
	);
};
