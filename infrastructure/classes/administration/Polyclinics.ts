import { IPolyclinics } from "~/infrastructure/interfaces/administration/IPolyclinics";

export class Polyclinics implements IPolyclinics {
  name: string;

  constructor(payload?: IPolyclinics) {
    this.name = payload?.name || "";
  }
}
