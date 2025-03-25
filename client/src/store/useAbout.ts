import { create } from "zustand";

interface SidebarState {
  isAboutVisible: boolean,
  toggleAbout: () => void,
}

// Zustand store
const useAbout = create<SidebarState>((set) => ({
  isAboutVisible: false,
  toggleAbout: () => set((state) => ({ isAboutVisible: !state.isAboutVisible })),
}));

export default useAbout;
