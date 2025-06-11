import { create } from "zustand";
import { type socialSchemaDTO } from "@/Schemas/Expseriences-Schemas/socialMediaShemas";

type socialState = {
  social: socialSchemaDTO | null;
  setSocial: (data: socialSchemaDTO) => void;
};

export const useSocialStore = create<socialState>((set) => ({
  social: null,
  setSocial: (data) => set({ social: data }),
}));
