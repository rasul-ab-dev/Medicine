import { IObservationPrices } from "~/infrastructure/interfaces/IObservationPrices";

export interface IExamination {
  name: string;
  cashNumber: string;
  blankType?: number;
  observationPrices: IObservationPrices[];
}
