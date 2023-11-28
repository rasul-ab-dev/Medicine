import { IApplicationObservationsPrice } from "~/infrastructure/interfaces/IApplicationObservationsPrice";

export class ApplicationObservationsPrice
  implements IApplicationObservationsPrice
{
  id: number;
  applicationObservationStatus: number;
  observationDate: string;
  observationTime: string;
  applicantNumber: string;
  applicantFullName: string;
  applicationNumber: number;
  isPaid: boolean;
  price: number;
  currency: number;
  observationName: string;

  constructor(payload?: IApplicationObservationsPrice) {
    this.id = payload?.id || null;
    this.applicationObservationStatus =
      payload?.applicationObservationStatus || null;
    this.observationDate = payload?.observationDate || "";
    this.observationTime = payload?.observationTime || "";
    this.applicantNumber = payload?.applicantNumber || "";
    this.applicantFullName = payload?.applicantFullName || "null";
    this.applicationNumber = payload?.applicationNumber || null;
    this.isPaid = payload?.isPaid;
    this.price = payload?.price || null;
    this.currency = payload?.currency || null;
    this.observationName = payload?.observationName || "";
  }
}
