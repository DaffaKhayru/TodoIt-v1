import { create } from "zustand";

interface AboutState {
  isAboutVisible: boolean,
  toggleAbout: () => void,
}

// Zustand store
const useAbout = create<AboutState>((set) => ({
  isAboutVisible: false,
  toggleAbout: () => set((state) => ({ isAboutVisible: !state.isAboutVisible })),
}));

export default useAbout;
