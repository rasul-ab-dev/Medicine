import { IWorkingDay } from "~/infrastructure/interfaces/IWorkingDay";
export interface IProfile {
  lastName: string;
  firstName: string;
  midelName: string;
  email: string;
  phone: string;
  workingDays: IWorkingDay[];
  cabinetId: number;
  jobPositionId: number;
  imageId?: number;
}
