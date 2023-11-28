import { IPatientsGroup } from "~/infrastructure/interfaces/administration/IPatientsGroup";

export class PatientsGroup implements IPatientsGroup {
  name: string;

  constructor(payload?: IPatientsGroup) {
    this.name = payload?.name || "";
  }
}
