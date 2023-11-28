import { IClameType } from "~/infrastructure/interfaces/IClameType";
import { IToleranceGroup } from "~/infrastructure/interfaces/administration/IToleranceGroup";

export class ToleranceGroup implements IToleranceGroup {
  name: string;
  claimTypesId: IClameType[];

  constructor(payload?: IToleranceGroup) {
    this.name = payload?.name || "";
    this.claimTypesId = payload?.claimTypesId || [];
  }
}
