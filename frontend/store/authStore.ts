import { create } from "zustand";
import axios from "axios";

export const useAuthStore = create((set) => ({
   authUser: false,

  checkAuth: async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/verifyuser`,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        set({ authUser: true });
      } else {
        set({ authUser: false });
      }
    } catch (error) {
      console.error("Error while calling verifyuser endpoint:", error);
      set({ authUser: false });
    }
  },
}));
