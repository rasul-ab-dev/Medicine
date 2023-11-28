export interface IApplicationObservation {
  cabinetId: number;
  userId: number;
  observationId: number;
  observationDate: string;
  observationTime: string;
  applicationId: number;
  note?: string;
}
