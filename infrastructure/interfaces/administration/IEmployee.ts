import { IWorkingDay } from "~/infrastructure/interfaces/IWorkingDay";

export interface IEmployee {
  userName: string;
  lastNamre: string;
  firstName: string;
  midelName: string;
  phone: string;
  workingDays: IWorkingDay[];
  email: string;
  password: string;
  cabinetId: number;
  jobPositionId: number;
  examination: number;
  useForms: number;
  accessGroup: number;
  imageId?: number;
}
