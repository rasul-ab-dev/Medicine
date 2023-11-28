import { ITomography } from "~/infrastructure/interfaces/administration/ITomography";

export class Tomography implements ITomography {
  tomography: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  note: string;
  result: string;
  doctor: number;

  constructor(payload?: ITomography) {
    this.tomography = payload?.tomography || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.note = payload?.note || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
