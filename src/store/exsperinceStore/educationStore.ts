import { create } from "zustand";

import { type EducationSchema } from "@/Schemas/Expseriences-Schemas/EducationSchemas";

type EducationState = {
  education: EducationSchema | null;
  setEducation: (data: EducationSchema) => void;
};

export const useEducationStore = create<EducationState>((set) => ({
  education: null,
  setEducation: (data) => set({ education: data }),
}));
