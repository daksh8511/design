import { create } from "zustand";

interface CollapseState {
  isCollapse: boolean;
  toggleCollapse: () => void;
}

export const useCollapse = create<CollapseState>((set, get) => ({
  isCollapse: false,
  toggleCollapse: () =>
    set({ isCollapse: !get().isCollapse }),
}));
