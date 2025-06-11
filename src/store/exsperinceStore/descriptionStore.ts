import { create } from "zustand";

import { type descriptionSchemaDTO } from "@/Schemas/Expseriences-Schemas/DescriptionShemas";

type descriptionState = {
  description: descriptionSchemaDTO | null;
  setDescription: (data: descriptionSchemaDTO) => void;
};

export const useDescriptionStore = create<descriptionState>((set) => ({
  description: null,
  setDescription: (data) => set({ description: data }),
}));
