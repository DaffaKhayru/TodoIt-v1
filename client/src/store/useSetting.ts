import { create } from "zustand";

interface SettingState {
  isSettingVisible: boolean,
  toggleSetting: () => void,
}

// Zustand store
const useSetting = create<SettingState>((set) => ({
  isSettingVisible: false,
  toggleSetting: () => set((state) => ({ isSettingVisible: !state.isSettingVisible })),
}));

export default useSetting;
