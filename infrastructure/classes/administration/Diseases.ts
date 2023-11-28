import { IDiseases } from "~/infrastructure/interfaces/administration/iDiseases";

export class Diseases implements IDiseases {
  name: string;
  code?: string;

  constructor(payload?: IDiseases) {
    this.name = payload?.name || "";
    this.code = payload?.code || "";
  }
}
