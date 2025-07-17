import { create } from "zustand";

interface ProfileImageState {
  image: string | null;
  setImage: (url: string | null) => void;
}

export const useProfileImageStore = create<ProfileImageState>((set) => ({
  image: null,
  setImage: (url) => set({ image: url }),
}));
