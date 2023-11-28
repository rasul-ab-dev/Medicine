import { IUltrasound } from "~/infrastructure/interfaces/administration/IUltrasound";

export class Ultrasound implements IUltrasound {
  ultrasound: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  note: string;
  result: string;
  doctor: number;

  constructor(payload?: IUltrasound) {
    this.ultrasound = payload?.ultrasound || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.note = payload?.note || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
