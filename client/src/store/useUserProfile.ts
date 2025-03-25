import { create } from "zustand";

interface UserProfileState {
  isUserProfileVisible: boolean,
  toggleUserProfile: () => void,
}

// Zustand store
const useUserProfile = create<UserProfileState>((set) => ({
  isUserProfileVisible: false,
  toggleUserProfile: () => set((state) => ({ isUserProfileVisible: !state.isUserProfileVisible })),
}));

export default useUserProfile;
