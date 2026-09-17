import { ReactNode } from "react";
import { create } from "zustand";

export type Tab = {
	id: string;
	label: string;
	icon: ReactNode;
};

export type FolderName = "projects" | "work-experience";

type NavigationState = {
	tabs: Tab[];
	activeTabId: string | null;
	openFolder: FolderName | null;

	openFile: (tab: Tab) => void;
	closeTab: (id: string) => void;
	setActiveTab: (id: string | null) => void;
	setOpenFolder: (name: FolderName) => void;
	closeFolder: () => void;
};

export const useNavigationStore = create<NavigationState>((set) => ({
	tabs: [],
	activeTabId: null,
	openFolder: null,

	openFile: (tab) =>
		set((state) => {
			const exists = state.tabs.find((t) => t.id === tab.id);
			if (exists) {
				return { activeTabId: tab.id };
			}
			return {
				tabs: [...state.tabs, tab],
				activeTabId: tab.id,
			};
		}),

	closeTab: (id) =>
		set((state) => {
			const filtered = state.tabs.filter((t) => t.id !== id);
			const wasActive = state.activeTabId === id;
			return {
				tabs: filtered,
				activeTabId: wasActive
					? filtered.length > 0
						? filtered[filtered.length - 1].id
						: null
					: state.activeTabId,
			};
		}),

	setActiveTab: (id) => set({ activeTabId: id }),

	setOpenFolder: (name) =>
		set((state) => ({
			openFolder: name,
			activeTabId: state.tabs.length === 0 ? null : state.activeTabId,
		})),

	closeFolder: () => set({ openFolder: null }),
}));
