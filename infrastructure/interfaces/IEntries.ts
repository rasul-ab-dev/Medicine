import { IApplicationObservation } from "~/infrastructure/interfaces/IApplicationObservation";

export class ApplicationObservation {
  cabinetId: number;
  userId: number;
  observationId: number;
  observationDate: string;
  observarionTime: string;
  note?: string;
}
export interface IEntries {
  applicationNumber: number;
  applicantId: number;
  applicationObservatins: [];
  currentObservation: IApplicationObservation[];
  additionalPaymetName: string;
  additionalPaymetPrice?: number;
  additionalPaymentNote?: string;
}
