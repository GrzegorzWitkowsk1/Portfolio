import { create } from "zustand";

type TerminalState = {
	isOpen: boolean;
	greetingShown: boolean;
	toggle: () => void;
	close: () => void;
	markGreetingShown: () => void;
};

export const useTerminalStore = create<TerminalState>((set) => ({
	isOpen: false,
	greetingShown: false,
	toggle: () => set((state) => ({ isOpen: !state.isOpen })),
	close: () => set({ isOpen: false }),
	markGreetingShown: () => set({ greetingShown: true }),
}));