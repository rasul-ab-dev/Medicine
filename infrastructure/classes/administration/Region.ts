import { IRegion } from "./../../interfaces/administration/IRegion";

export class Region implements IRegion {
  name: string;

  constructor(payload?: IRegion) {
    this.name = payload?.name || "";
  }
}
