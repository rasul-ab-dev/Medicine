import { IExamination } from "@/infrastructure/interfaces/administration/IExamination";
import { IObservationPrices } from "~/infrastructure/interfaces/IObservationPrices";

export class Examination implements IExamination {
  name: string;
  cashNumber: string;
  blankType?: number;
  observationPrices: IObservationPrices[];

  constructor(payload?: IExamination) {
    this.cashNumber = payload?.cashNumber || "";
    this.name = payload?.name || "";
    this.blankType = payload?.blankType || null;
    this.observationPrices = payload?.observationPrices || [];
  }
}
