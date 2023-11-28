import { ICities } from "../../interfaces/administration/ICities";

export class Cities implements ICities {
  name: string;
  regionId: 0;

  constructor(payload?: ICities) {
    this.name = payload?.name || "";
    this.regionId = payload?.regionId || null;
  }
}
