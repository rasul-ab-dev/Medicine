import { IProfile } from "~/infrastructure/interfaces/administration/IProfile";
import { IWorkingDay } from "~/infrastructure/interfaces/IWorkingDay";

export class Profile implements IProfile {
  lastName: string;
  firstName: string;
  midelName: string;
  email: string;
  phone: string;
  workingDays: IWorkingDay[];
  cabinetId: number;
  jobPositionId: number;

  constructor(payload?: IProfile) {
    this.lastName = payload?.lastName || "";
    this.firstName = payload?.firstName || "";
    this.midelName = payload?.midelName || "";
    this.email = payload?.email || "";
    this.phone = payload?.phone || "";
    this.workingDays = payload?.workingDays || [];
    this.cabinetId = payload?.cabinetId || null;
    this.jobPositionId = payload?.jobPositionId || null;
  }
}
