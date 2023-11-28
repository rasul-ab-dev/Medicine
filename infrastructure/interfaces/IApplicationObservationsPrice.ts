export interface IApplicationObservationsPrice {
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
}
