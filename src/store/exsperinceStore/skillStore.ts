import { create } from "zustand";

import { type skillSchemasDTO } from "@/Schemas/Expseriences-Schemas/SkillSchema";
import { data } from "react-router";

interface SkillState {
  data: skillSchemasDTO;
  setData: (data: skillSchemasDTO) => void;
}

export const useSkillStore = create<SkillState>((set) => ({
  data: { nama: [] },
  setData: (data) => set({ data }),
}));
