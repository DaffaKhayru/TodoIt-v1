import { create } from "zustand";

interface SidebarState {
  isSidebarWide: boolean,
  toggleSidebar: () => void,
}

// Zustand store
const useSidebar = create<SidebarState>((set) => ({
  isSidebarWide: true,
  toggleSidebar: () => set((state) => ({ isSidebarWide: !state.isSidebarWide })),
}));

export default useSidebar;
