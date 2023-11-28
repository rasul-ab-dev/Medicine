import { IRentgen } from "~/infrastructure/interfaces/administration/IRentgen";

export class Rentgen implements IRentgen {
  rentgen: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  checkingMember: string;
  checkType: string;
  result: string;
  advice: string;
  doctor: number;

  constructor(payload?: IRentgen) {
    this.rentgen = payload?.rentgen || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.checkingMember = payload?.checkingMember || "";
    this.checkType = payload?.checkType || "";
    this.result = payload?.result || "";
    this.advice = payload?.advice || "";
    this.doctor = payload?.doctor || null;
  }
}
