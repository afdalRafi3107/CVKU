import { create } from "zustand";

import { type skillSchemasDTO } from "@/Schemas/Expseriences-Schemas/SkillSchema";

interface SkillState {
  data: skillSchemasDTO;
  setData: (data: skillSchemasDTO) => void;
}

export const useSkillStore = create<SkillState>((set) => ({
  data: { nama: [] },
  setData: (data) => set({ data }),
}));
