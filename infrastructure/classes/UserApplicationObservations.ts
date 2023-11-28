import { IUserApplicationObservations } from "~/infrastructure/interfaces/IUserApplicationObservations";

export class UserApplicationObservations
  implements IUserApplicationObservations
{
  id: number;
  applicationObservationStatus: number;
  observationDate: string;
  observationTime: string;
  applicantNumber: string;
  applicantFullName: string;
  applicationNumber: number;

  constructor(payload?: IUserApplicationObservations) {
    this.id = payload?.id || null;
    this.applicationObservationStatus =
      payload?.applicationObservationStatus || null;
    this.observationDate = payload?.observationDate || "";
    this.observationTime = payload?.observationTime || "";
    this.applicantNumber = payload?.applicantNumber || "";
    this.applicantFullName = payload?.applicantFullName || "";
    this.applicationNumber = payload?.applicationNumber || null;
  }
}
