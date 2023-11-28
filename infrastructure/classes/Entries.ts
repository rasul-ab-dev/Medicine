import { IApplicationObservation } from "~/infrastructure/interfaces/IApplicationObservation";
import { IEntries } from "@/infrastructure/interfaces/IEntries";

export class Entries implements IEntries {
  // applicationNumber: number;
  // applicantId: number;
  // cabinetId: number;
  // userId: number;
  // observationId: number;
  // applicationObservatins: [];
  // currentObservation: IApplicationObservation[];
  // observationDateTime: string;
  // note?: string;
  // additionalPaymetName: string;
  // additionalPaymetPrice?: number;
  // additionalPaymentNote?: string;

  applicationNumber: number;
  applicantId: number;
  applicationObservatins: [];
  currentObservation: IApplicationObservation[];
  additionalPaymetName: string;
  additionalPaymetPrice?: number;
  additionalPaymentNote?: string;

  constructor(payload?: IEntries) {
this.applicationNumber = payload?.applicationNumber || null
this.applicantId = payload?.applicantId || null
this.applicationObservatins = payload?.applicationObservatins || []
this.currentObservation = payload?.currentObservation || []
this.additionalPaymetName = payload?.additionalPaymetName || null
this.additionalPaymetPrice = payload?.additionalPaymetPrice || 0
this.additionalPaymentNote = payload?.additionalPaymentNote || null


    // this.applicationNumber = payload?.applicationNumber || null;
    // this.applicantId = payload?.applicantId || null;
    // this.cabinetId = payload?.cabinetId || null;
    // this.userId = payload?.userId || null;
    // this.observationId = payload?.observationId || null;
    // this.applicationObservatins = payload?.applicationObservatins || [];
    // this.currentObservation = payload?.currentObservation || [];
    // this.observationDateTime = payload?.observationDateTime || "";
    // this.note = payload?.note || "";
    // this.additionalPaymetName = payload?.additionalPaymetName || "";
    // this.additionalPaymetPrice = payload?.additionalPaymetPrice || null;
    // this.additionalPaymentNote = payload?.additionalPaymentNote || "";
  }
}
