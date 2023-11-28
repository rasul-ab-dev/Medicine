import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";

export class ApplicationObservationResult
  implements IApplicationObservationResult
{
  id: number;
  applicationObservationResult: string;

  constructor(payload?: IApplicationObservationResult) {
    this.id = payload?.id || null;
    this.applicationObservationResult =
      payload?.applicationObservationResult || "";
  }
}
