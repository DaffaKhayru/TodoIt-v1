import { create } from "zustand";

interface AccountState {
  isAccountVisible: boolean,
  toggleAccount: () => void,
}

// Zustand store
const useAccount = create<AccountState>((set) => ({
  isAccountVisible: false,
  toggleAccount: () => set((state) => ({ isAccountVisible: !state.isAccountVisible })),
}));

export default useAccount;
