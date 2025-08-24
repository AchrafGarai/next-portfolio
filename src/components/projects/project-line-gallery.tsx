import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";
import { BrandingProjectMap } from "@/data/branding/projects";

const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
	new THREE.Vector3(0, -0.5, 0),
	new THREE.Vector3(0, 0.5, 0),
]);
const state = proxy<{
	clicked: number | null;
	urls: string[];
}>({
	clicked: null,
	urls: BrandingProjectMap.map(
		(item: { coverImage: string }) => item.coverImage,
	),
});

function Minimap() {
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const ref = useRef<THREE.Group>(null!);
	const scroll = useScroll();
	const { urls } = useSnapshot(state);
	const { height } = useThree((state) => state.viewport);
	useFrame((state, delta) => {
		if (ref.current) {
			ref.current.children.forEach((child, index) => {
				// Give me a value between 0 and 1
				//   starting at the position of my item
				//   ranging across 4 / total length
				//   make it a sine, so the value goes from 0 to 1 to 0.
				const y = scroll.curve(
					index / urls.length - 1.5 / urls.length,
					4 / urls.length,
				);
				easing.damp(child.scale, "y", 0.15 + y / 6, 0.15, delta);
			});
		}
	});
	return (
		<group ref={ref}>
			{urls.map((_, i) => (
				<primitive
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={i}
					object={new THREE.Line(geometry, material)}
					position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
				/>
			))}
		</group>
	);
}

type ItemProps = {
	index: number;
	position: [number, number, number];
	scale: [number, number, number];
	c?: THREE.Color;
	url?: string;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: any;
};

function Item({
	index,
	position,
	scale,
	c = new THREE.Color(),
	...props
}: ItemProps) {
	const ref = useRef<THREE.Mesh>(null);
	const scroll = useScroll();
	const { clicked, urls } = useSnapshot(state);
	const [hovered, hover] = useState(false);
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	const click = () => (state.clicked = index === clicked ? null : index);
	const over = () => hover(true);
	const out = () => hover(false);
	useFrame((state, delta) => {
		const y = scroll.curve(
			index / urls.length - 1.5 / urls.length,
			4 / urls.length,
		);
		if (ref.current) {
			easing.damp3(
				ref.current.scale,
				[clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1],
				0.15,
				delta,
			);
			// Removed invalid material.scale assignment; scale is handled via mesh's scale property.
			if (clicked !== null && index < clicked)
				easing.damp(ref.current.position, "x", position[0] - 2, 0.15, delta);
			if (clicked !== null && index > clicked)
				easing.damp(ref.current.position, "x", position[0] + 2, 0.15, delta);
			if (clicked === null || clicked === index)
				easing.damp(ref.current.position, "x", position[0], 0.15, delta);
			easing.damp(
				ref.current.material,
				"grayscale",
				hovered || clicked === index ? 0 : Math.max(0, 1 - y),
				0.15,
				delta,
			);
			easing.dampC(
				(ref.current.material as THREE.MeshStandardMaterial).color,
				hovered || clicked === index ? "white" : "#aaa",
				hovered ? 0.3 : 0.15,
				delta,
			);
		}
	});
	return (
		<Image
			ref={ref}
			{...props}
			position={position}
			scale={[scale[0], scale[1]]}
			onClick={click}
			onPointerOver={over}
			onPointerOut={out}
			url={props.url ?? ""}
		/>
	);
}

function Items({ w = 0.7, gap = 0.15 }) {
	const { urls } = useSnapshot(state);
	const { width } = useThree((state) => state.viewport);
	const xW = w + gap;
	return (
		<ScrollControls
			horizontal
			damping={0.1}
			pages={(width - xW + urls.length * xW) / width}
		>
			<Minimap />
			<Scroll>
				{
					urls.map((url, i) => (
						<Item
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							index={i}
							position={[i * xW, 0, 0]}
							scale={[w, 4, 1]}
							url={url}
						/>
					)) /* prettier-ignore */
				}
			</Scroll>
		</ScrollControls>
	);
}

export const ProjectGallery2 = () => (
	<Canvas
		className="min-h-[100vh] w-full"
		gl={{ antialias: false }}
		dpr={[1, 1.5]}
		// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
		onPointerMissed={() => (state.clicked = null)}
		style={{ height: "100vh" }}
	>
		<Items />
	</Canvas>
);
