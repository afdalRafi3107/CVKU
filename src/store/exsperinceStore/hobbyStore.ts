import { create } from "zustand";

import { type hobbySchemaDTO } from "@/Schemas/Expseriences-Schemas/HobbyScemas";

type HobbyState = {
  hobby: hobbySchemaDTO | null;
  setHobby: (data: hobbySchemaDTO) => void;
};

export const useHobbyStore = create<HobbyState>((set) => ({
  hobby: null,
  setHobby: (data) => set({ hobby: data }),
}));
