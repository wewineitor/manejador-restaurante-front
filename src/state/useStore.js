import { create } from "zustand"

export const useStore = create((set) => ({
    authToken: null,
    setAuthToken: (token) => set({ authToken: token }),
}));
