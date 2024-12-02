'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export const Cylinder = () => {
  const groupRef = useRef<THREE.Group>(null); // Reference for the parent group
  const numPlanes = 6; // Total number of planes for the cylinder
  const angleStep = (2 * Math.PI) / numPlanes;

  // Rotate the parent group
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Slowly rotate the entire cylinder
    }
  });

  return (
    <group ref={groupRef}>
      {/* Generate 6 plane meshes arranged in a circular shape */}
      {Array.from({ length: numPlanes }, (_, index) => {
        const angle = angleStep * index;
        const x = Math.cos(angle) * 2; // Circular x-coordinate
        const z = Math.sin(angle) * 2; // Circular z-coordinate
        const lookAtPosition = new THREE.Vector3(0, 0, 0); // Center of the cylinder

        // Compute direction vector for plane to look at the center
        const planePosition = new THREE.Vector3(x, 0, z);
        const directionToCenter = lookAtPosition.clone().sub(planePosition).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, 1), // Default plane normal (z-axis)
          directionToCenter
        );

        return (
          <mesh
            key={index}
            position={[x, 0, z]} // Circular positioning
            quaternion={quaternion} // Use quaternion to make the plane face the center
          >
            <planeGeometry args={[1, 1]} />
            <meshStandardMaterial
              color={new THREE.Color(`hsl(${(360 / numPlanes) * index}, 100%, 60%)`)} // Solid color
              side={THREE.DoubleSide} // Make it visible from both sides
            />
          </mesh>
        );
      })}
    </group>
  );
};
