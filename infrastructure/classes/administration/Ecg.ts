import { IEcg } from "~/infrastructure/interfaces/administration/IEcg";

export class Ecg implements IEcg {
  ecg: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  weight: string;
  definitionOfDisease: string;
  result: string;
  doctor: number;

  constructor(payload?: IEcg) {
    this.ecg = payload?.ecg || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.weight = payload?.weight || "";
    this.definitionOfDisease = payload?.definitionOfDisease || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
