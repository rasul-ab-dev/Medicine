import { ICommonBlank } from "~/infrastructure/interfaces/administration/ICommonBlank";

export class CommonBlank implements ICommonBlank {
  examinationDescription: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  result: string;
  definitionOfDisease: string;
  advice: string;
  doctor: number;

  constructor(payload?: ICommonBlank) {
    this.examinationDescription = payload?.examinationDescription || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.result = payload?.result || "";
    this.definitionOfDisease = payload?.definitionOfDisease || "";
    this.advice = payload?.advice || "";
    this.doctor = payload?.doctor || null;
  }
}
