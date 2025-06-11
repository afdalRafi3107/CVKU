import { create } from "zustand";

import { type skillSchemasDTO } from "@/Schemas/SkillSchema";

type skillState = {
  skill: skillSchemasDTO | null;
  setSkill: (data: skillSchemasDTO) => void;
};

export const useSkillStore = create<skillState>((set) => ({
  skill: null,
  setSkill: (data) => set({ skill: data }),
}));
