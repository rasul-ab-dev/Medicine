import { IDistrict } from "../../interfaces//administration/IDistrict";

export class District implements IDistrict {
  name: string;
  cityId: number;

  constructor(payload?: IDistrict) {
    this.name = payload?.name || "";
    this.cityId = payload?.cityId || null;
  }
}
