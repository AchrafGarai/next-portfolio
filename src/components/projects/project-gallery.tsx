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
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import * as THREE from "three";

// Paul West @prisoner849 https://discourse.threejs.org/u/prisoner849
// https://discourse.threejs.org/t/simple-curved-plane/26647/10
class BentPlaneGeometry extends THREE.PlaneGeometry {
	constructor(radius: number, ...args: any) {
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
	onBeforeCompile(shader: any) {
		shader.uniforms.time = this.time;
		shader.vertexShader = `
      uniform float time;
      ${shader.vertexShader}
    `;
		shader.vertexShader = shader.vertexShader.replace(
			"#include <begin_vertex>",
			`vec3 transformed = vec3(position.x, position.y + sin(time + uv.x * PI * 4.0) / 4.0, position.z);`,
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
			[key: string]: any; // Allow additional props for flexibility
		};
		bentPlaneGeometry: {
			attach?: string;
			args?: ConstructorParameters<typeof BentPlaneGeometry>;
			[key: string]: any; // Allow additional props for flexibility
		};
	}
}

export const Gallery = () => {
	return (
		<Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
			{/* <fog attach="fog" args={["#a79", 8.5, 12]} /> */}
			{/* <ScrollControls pages={4} infinite></ScrollControls> */}
			<ScrollControls pages={0} infinite>
				<Rig rotation={[0, 0, 0.15]}>
					<Carousel />
				</Rig>
				<Banner position={[0, -0.15, 0]} />
			</ScrollControls>
			{/* <Environment preset="dawn" background blur={0.5} /> */}
		</Canvas>
	);
};

function Rig(props: {
	rotation?: [number, number, number];
	[key: string]: any; // Allow additional props
}) {
	const ref = useRef<THREE.Group>(null);
	const scroll = useScroll();
	useFrame((state, delta: number | undefined) => {
		/*     if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    } */
		if (state.events.update) {
			state.events.update(); // Raycasts every frame rather than on pointer-move
			easing.damp3(
				state.camera.position,
				[-state.pointer.x * 2, state.pointer.y + 1.5, 10],
				0.3,
				delta,
			);
			// Move camera
			state.camera.lookAt(0, 0, 0); // Look at center
		}
	});

	if (ref) {
		return <group ref={ref} {...props} />;
	}
}

function Carousel({ radius = 1.4, count = 6 }) {
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
	const ref = useRef<THREE.Mesh>(null);

	const pointerOut = () => hover(false);

	useFrame((state: any, delta: number | undefined) => {
		if (ref.current) {
			easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
			easing.damp(
				ref.current.material,
				"radius",
				hovered ? 0.25 : 0.1,
				0.2,
				delta,
			);
			easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
		}
	});

	return (
		<Image
			ref={ref}
			url={url}
			transparent
			side={THREE.DoubleSide}
			onPointerOver={pointerOver}
			onPointerOut={pointerOut}
			{...props}
		>
			<bentPlaneGeometry args={[0.1, 1.3, 1, 20, 20]} />
		</Image>
	);
}

function Banner(props: any) {
	// Use useRef to refer to the mesh
	const ref = useRef<THREE.Mesh>(null);

	// Load texture and set wrapS and wrapT
	const texture = useTexture("/01.png") as THREE.Texture;
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	// Handle scroll position
	const scroll = useScroll();

	// Use useFrame to update mesh properties each frame
	useFrame((state: any, delta: number) => {
		if (ref.current) {
			// Ensure the material is set properly
			const material = ref.current.material as any;
			if (material.time) {
				material.time.value += Math.abs(scroll.delta) * 4;
			}
			if (material.map) {
				material.map.offset.x += delta / 2;
			}
		}
	});

	return (
		<mesh ref={ref} {...props}>
			<cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
			<meshSineMaterial
				map={texture}
				map-anisotropy={16}
				map-repeat={[30, 1]}
				side={THREE.DoubleSide}
				toneMapped={false}
			/>
		</mesh>
	);
}
