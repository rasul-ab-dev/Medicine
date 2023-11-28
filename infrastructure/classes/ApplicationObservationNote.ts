import { IApplicationObservationNote } from "~/infrastructure/interfaces/IApplicationObservationNote";

export class ApplicationObservationNote implements IApplicationObservationNote {
  id: number;
  applicationObservationNote: string;

  constructor(payload?: IApplicationObservationNote) {
    this.id = payload?.id || null;
    this.applicationObservationNote = payload?.applicationObservationNote || "";
  }
}
