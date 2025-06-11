import { type experiencesSchemaDTO } from "@/Schemas/Expseriences-Schemas/ExperiencesSchemas";
import { create } from "zustand";

type experiencesState = {
  experience: experiencesSchemaDTO | null;
  setExperience: (data: experiencesSchemaDTO) => void;
};

export const useExperiencesStore = create<experiencesState>((set) => ({
  experience: null,
  setExperience: (data) => set({ experience: data }),
}));
