import { IJobPosition } from "./../../interfaces/administration/IJobPosition";

export class JobPosition implements IJobPosition {
  name: string;
  jobPositionType: number;

  constructor(payload?: IJobPosition) {
    this.name = payload?.name || "";
    this.jobPositionType = payload?.jobPositionType || null;
  }
}
