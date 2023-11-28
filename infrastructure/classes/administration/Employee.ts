import { IEmployee } from "~/infrastructure/interfaces/administration/IEmployee";
import { IWorkingDay } from "~/infrastructure/interfaces/IWorkingDay";

export class Employee implements IEmployee {
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
  imageId: number;

  constructor(payload?: IEmployee) {
    this.userName = payload?.userName || "";
    this.lastNamre = payload?.lastNamre || "";
    this.firstName = payload?.firstName || "";
    this.midelName = payload?.midelName || "";
    this.phone = payload?.phone || "";
    this.workingDays = payload?.workingDays || [];
    this.email = payload?.email || "";
    this.password = payload?.password || "";
    this.cabinetId = payload?.cabinetId || null;
    this.jobPositionId = payload?.jobPositionId || null;
    this.examination = payload?.examination || null;
    this.useForms = payload?.useForms || null;
    this.accessGroup = payload?.accessGroup || null;
    this.imageId = payload?.imageId || null;
  }
}
