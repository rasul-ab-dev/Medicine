import { IApplicationDisease } from "~/infrastructure/interfaces/IApplicationDisease";

export class ApplicationDisease implements IApplicationDisease {
  description: string;
  diseaseId: number;

  constructor(payload?: IApplicationDisease) {
    this.description = payload?.description;
    this.diseaseId = payload?.diseaseId;
  }
}
