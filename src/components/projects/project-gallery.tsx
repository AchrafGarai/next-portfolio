"use client";
import { BrandingProjectMap } from "@/data/branding/projects";
import { UIProjectMap } from "@/data/ui/projects";
import {
	Environment,
	Image,
	ScrollControls,
	useScroll,
	useTexture,
} from "@react-three/drei";
import {
	Canvas,
	ReactThreeFiber,
	type ThreeEvent,
	extend,
	useFrame,
} from "@react-three/fiber";
import { easing } from "maath";
import type React from "react";
import { type JSX, useImperativeHandle, useState } from "react";
import { useRef } from "react";
import * as THREE from "three";
import { Button } from "../ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSpring } from "motion/react";

// Paul West @prisoner849 https://discourse.threejs.org/u/prisoner849
// https://discourse.threejs.org/t/simple-curved-plane/26647/10
class BentPlaneGeometry extends THREE.PlaneGeometry {
	constructor(radius: number, ...args: number[]) {
		super(...args);
		const p = this.parameters;
		const hw = p.width * 0.5;
		const a = new THREE.Vector2(-hw, 0);
		const b = new THREE.Vector2(0, radius);
		const c = new THREE.Vector2(hw, 0);
		const ab = new THREE.Vector2().subVectors(a, b);
		const bc = new THREE.Vector2().subVectors(b, c);
		const ac = new THREE.Vector2().subVectors(a, c);
		const r =
			(ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));
		const center = new THREE.Vector2(0, radius - r);
		const baseV = new THREE.Vector2().subVectors(a, center);
		const baseAngle = baseV.angle() - Math.PI * 0.5;
		const arc = baseAngle * 2;
		const uv = this.attributes.uv;
		const pos = this.attributes.position;
		const mainV = new THREE.Vector2();
		for (let i = 0; i < uv.count; i++) {
			const uvRatio = 1 - uv.getX(i);
			const y = pos.getY(i);
			mainV.copy(c).rotateAround(center, arc * uvRatio);
			pos.setXYZ(i, mainV.x, y, -mainV.y);
		}
		pos.needsUpdate = true;
	}
}

export class MeshSineMaterial extends THREE.MeshBasicMaterial {
	time: { value: number };
	constructor(parameters = {}) {
		super(parameters);
		this.setValues(parameters);
		this.time = { value: 0 };
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	onBeforeCompile(shader: any) {
		shader.uniforms.time = this.time;
		shader.vertexShader = `
	  uniform float time;
	  ${shader.vertexShader}
	`;
		shader.vertexShader = shader.vertexShader.replace(
			"#include <begin_vertex>",
			"vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);",
		);
	}
}

extend({ MeshSineMaterial, BentPlaneGeometry });

// Add type support to JSX Intrinsic Elements
declare module "@react-three/fiber" {
	interface ThreeElements {
		meshSineMaterial: {
			attach?: string;
			args?: ConstructorParameters<typeof MeshSineMaterial>;
			[key: string]: unknown; // Allow additional props for flexibility
		};
		bentPlaneGeometry: {
			attach?: string;
			args?: ConstructorParameters<typeof BentPlaneGeometry>;
			[key: string]: unknown; // Allow additional props for flexibility
		};
	}
}

export const Gallery = () => {
	const rigRef = useRef<{ pushRotation: (force: number) => void }>(null);

	return (
		<div className="relative w-full h-screen">
			{/* Buttons */}
			<div className="absolute z-10 flex gap-4 justify-center inset-x-0 bottom-32">
				<Button
					className="rounded-full w-8"
					variant={"outline"}
					onClick={() => rigRef.current?.pushRotation(1)}
				>
					<ArrowLeft />
				</Button>
				<Button
					className="rounded-full w-8"
					variant={"outline"}
					onClick={() => rigRef.current?.pushRotation(-1)}
				>
					<ArrowRight />
				</Button>
			</div>
			<Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
				<fog attach="fog" args={["#222222", 8.5, 12]} />
				{/* <ScrollControls pages={4} infinite></ScrollControls> */}
				<ScrollControls pages={0} infinite>
					<Rig rigRef={rigRef} rotation={[0, 0, 0.15]}>
						<Carousel />
					</Rig>
					{/* 					<Banner position={[0, -0.15, 0]} /> */}
				</ScrollControls>
			</Canvas>
		</div>
	);
};

function Rig(props: {
	[key: string]: unknown; // Allow additional props
	rigRef: React.Ref<{ pushRotation: (force: number) => void }>;
}) {
	const groupRef = useRef<THREE.Group>(null);
	// 1️⃣ Define velocity ref
	const velocity = useRef(0);

	useImperativeHandle(props.rigRef, () => ({
		pushRotation(force: number) {
			velocity.current += force * 5; // accumulate push force
		},
	}));

	useFrame((state, delta: number | undefined) => {
		const safeDelta = delta ?? 0;

		if (groupRef.current) {
			// Constant slow base rotation
			let base = groupRef.current.rotation.y + safeDelta * 0.15;

			// Apply velocity
			base += velocity.current * safeDelta;

			// Write back rotation
			groupRef.current.rotation.y = base;

			// Apply damping (friction)
			velocity.current *= 0.92; // lower = stronger damping
			if (Math.abs(velocity.current) < 0.0001) velocity.current = 0;
		}

		if (state.events.update) {
			state.events.update(); // Raycasts every frame rather than on pointer-move
			easing.damp3(
				state.camera.position,
				[-state.pointer.x * 2, state.pointer.y + 1.5, 10],
				0.3,
				safeDelta,
			);
			// Move camera
			state.camera.lookAt(0, 0, 0); // Look at center
		}
	});

	if (groupRef) {
		return <group ref={groupRef} {...props} />;
	}
}

function Carousel({ radius = 1.3, count = 6 }) {
	return Array.from({ length: count }, (_, i) => (
		<Card
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			key={i}
			url={BrandingProjectMap[i].coverImage}
			position={[
				Math.sin((i / count) * Math.PI * 2) * radius,
				0,
				Math.cos((i / count) * Math.PI * 2) * radius,
			]}
			rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
		/>
	));
}
// Simple approach: Use two separate Image components
function Card({
	url,
	...props
}: {
	url: string;
	position: [x: number, y: number, z: number];
	rotation: [x: number, y: number, z: number];
}) {
	const [hovered, hover] = useState(false);
	const pointerOver = (e: ThreeEvent<PointerEvent>) => {
		e.stopPropagation();
		hover(true);
	};
	const frontRef = useRef<THREE.Mesh>(null);
	const backRef = useRef<THREE.Mesh>(null);

	const pointerOut = () => hover(false);

	useFrame((state, delta) => {
		if (frontRef.current && backRef.current) {
			const scale = hovered ? 1.15 : 1;
			easing.damp3(frontRef.current.scale, scale, 0.1, delta);
			easing.damp3(backRef.current.scale, scale, 0.1, delta);

			// Apply hover effects to both materials
			easing.damp(
				frontRef.current.material,
				"radius",
				hovered ? 0.25 : 0.1,
				0.2,
				delta,
			);
			easing.damp(
				frontRef.current.material,
				"zoom",
				hovered ? 1 : 1.2,
				0.2,
				delta,
			);
			easing.damp(
				backRef.current.material,
				"radius",
				hovered ? 0.25 : 0.1,
				0.2,
				delta,
			);
			easing.damp(
				backRef.current.material,
				"zoom",
				hovered ? 1 : 1.2,
				0.2,
				delta,
			);
		}
	});

	return (
		<group {...props}>
			{/* Front face */}
			<Image
				ref={frontRef}
				url={url}
				transparent
				position={[0, 0, 0.001]} // Slight forward offset
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
			>
				<bentPlaneGeometry args={[0.1, 1.3, 0.8, 20, 20]} />
			</Image>

			{/* Back face - rotated 180 degrees around Y axis to flip it */}
			<Image
				ref={backRef}
				url={url}
				transparent
				position={[0, 0, -0.001]} // Slight backward offset
				rotation={[0, Math.PI, 0]}
				scale={[1, 1]} // Flip the Z-scale to make the bend curve outward
				onPointerOver={pointerOver}
				onPointerOut={pointerOut}
			>
				<bentPlaneGeometry args={[0.1, 1.3, 0.8, 20, 20]} />
			</Image>
		</group>
	);
}
