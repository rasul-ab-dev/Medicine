import { IClameType } from "~/infrastructure/interfaces/IClameType";

export interface IToleranceGroup {
  name: string;
  claimTypesId: IClameType[];
}
