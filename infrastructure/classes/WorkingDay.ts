import { IWorkingDay } from "@/infrastructure/interfaces/IWorkingDay";

export class WorkingDay implements IWorkingDay {
  startDate: string;
  endDate: string;
  day: number;
  dayChecked: boolean;

  constructor(payload?: IWorkingDay) {
    this.startDate = payload?.startDate || "";
    this.endDate = payload?.endDate || "";
    this.day = payload?.day || null;
    this.dayChecked = payload?.dayChecked;
  }
}
