import { create } from "zustand";

interface AppState {
  pageState: "input" | "loading" | "copy";
  setPageState: (state: "input" | "loading" | "copy") => void;
}

export const useAppStore = create<AppState>((set) => ({
  pageState: "input",
  setPageState: (state) => set({ pageState: state }),
}));
