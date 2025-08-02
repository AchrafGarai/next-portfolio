// lib/store.ts
import { create } from "zustand";

type UIState = {
	showGrid: boolean;
	lensActive: boolean;
	toggleGrid: () => void;
	toggleLens: () => void;
	setLens: (value: boolean) => void;
	pointerColor: string;
	setPointerColor: (value: string) => void;
};

export const useUIStore = create<UIState>((set) => ({
	showGrid: true,
	lensActive: false,
	toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
	toggleLens: () => set((state) => ({ lensActive: !state.lensActive })),
	setLens: (value) => set(() => ({ lensActive: value })),
	pointerColor: "fill-zinc-900",
	setPointerColor: (color: string) => set({ pointerColor: color }),
}));
