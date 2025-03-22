import { create } from "zustand";
import axios from "axios";

type AuthStore = {
  authUser: boolean;
  loading: boolean;
  checkAuth: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: false,
  loading: true, // Start with loading=true

  checkAuth: async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/verifyuser`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        set({ authUser: true, loading: false });
      } else {
        set({ authUser: false, loading: false });
      }
    } catch (error) {
      console.error("Error while calling verifyuser endpoint:", error);
      set({ authUser: false, loading: false });
    }
  },
}));
