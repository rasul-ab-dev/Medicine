import { IAorta } from "~/infrastructure/interfaces/administration/IAorta";

export class Aorta implements IAorta {
  aorta: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;

  rightCommonSleepArteryDiametr: string;
  rightCommonSleepArterySpasm: string;
  rightCommonSleepArteryContraction: string;
  leftCommonSleepArteryDiametr: string;
  leftCommonSleepArterySpasm: string;
  leftCommonSleepArteryContraction: string;

  rightInnerSleepArteryDiametr: string;
  rightInnerSleepArterySpasm: string;
  rightInnerSleepArteryContraction: string;
  leftInnerSleepArteryDiametr: string;
  leftInnerSleepArterySpasm: string;
  leftInnerSleepArteryContraction: string;

  rightOutsideSleepArteryDiametr: string;
  rightOutsideSleepArterySpasm: string;
  rightOutsideSleepArteryContraction: string;
  leftOutsideSleepArteryDiametr: string;
  leftOutsideSleepArterySpasm: string;
  leftOutsideSleepArteryContraction: string;

  rightSpineArteryDiametr: string;
  rightSpineArterySpasm: string;
  rightSpineArteryContraction: string;
  leftSpineArteryDiametr: string;
  leftSpineArterySpasm: string;
  leftSpineArteryContraction: string;

  rightSubclavianArteryDiametr: string;
  rightSubclavianArterySpasm: string;
  rightSubclavianArteryContraction: string;
  leftSubclavianArteryDiametr: string;
  leftSubclavianArterySpasm: string;
  leftSubclavianArteryContraction: string;
  result: string;
  doctor: number;

  constructor(payload?: IAorta) {
    this.aorta = payload?.aorta || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;

    this.rightCommonSleepArteryDiametr =
      payload?.rightCommonSleepArteryDiametr || "";
    this.rightCommonSleepArterySpasm =
      payload?.rightCommonSleepArterySpasm || "";
    this.rightCommonSleepArteryContraction =
      payload?.rightCommonSleepArteryContraction || "";
    this.leftCommonSleepArteryDiametr =
      payload?.leftCommonSleepArteryDiametr || "";
    this.leftCommonSleepArterySpasm = payload?.leftCommonSleepArterySpasm || "";
    this.leftCommonSleepArteryContraction =
      payload?.leftCommonSleepArteryContraction || "";

    this.rightInnerSleepArteryDiametr =
      payload?.rightInnerSleepArteryDiametr || "";
    this.rightInnerSleepArterySpasm = payload?.rightInnerSleepArterySpasm || "";
    this.rightInnerSleepArteryContraction =
      payload?.rightInnerSleepArteryContraction || "";
    this.leftInnerSleepArteryDiametr =
      payload?.leftInnerSleepArteryDiametr || "";
    this.leftInnerSleepArterySpasm = payload?.leftInnerSleepArterySpasm || "";
    this.leftInnerSleepArteryContraction =
      payload?.leftInnerSleepArteryContraction || "";

    this.rightOutsideSleepArteryDiametr =
      payload?.rightOutsideSleepArteryDiametr || "";
    this.rightOutsideSleepArterySpasm =
      payload?.rightOutsideSleepArterySpasm || "";
    this.rightOutsideSleepArteryContraction =
      payload?.rightOutsideSleepArteryContraction || "";
    this.leftOutsideSleepArteryDiametr =
      payload?.leftOutsideSleepArteryDiametr || "";
    this.leftOutsideSleepArterySpasm =
      payload?.leftOutsideSleepArterySpasm || "";
    this.leftOutsideSleepArteryContraction =
      payload?.leftOutsideSleepArteryContraction || "";

    this.rightSpineArteryDiametr = payload?.rightSpineArteryDiametr || "";
    this.rightSpineArterySpasm = payload?.rightSpineArterySpasm || "";
    this.rightSpineArteryContraction =
      payload?.rightSpineArteryContraction || "";
    this.leftSpineArteryDiametr = payload?.leftSpineArteryDiametr || "";
    this.leftSpineArterySpasm = payload?.leftSpineArterySpasm || "";
    this.leftSpineArteryContraction = payload?.leftSpineArteryContraction || "";

    this.rightSubclavianArteryDiametr =
      payload?.rightSubclavianArteryDiametr || "";
    this.rightSubclavianArterySpasm = payload?.rightSubclavianArterySpasm || "";
    this.rightSubclavianArteryContraction =
      payload?.rightSubclavianArteryContraction || "";
    this.leftSubclavianArteryDiametr =
      payload?.leftSubclavianArteryDiametr || "";
    this.leftSubclavianArterySpasm = payload?.leftSubclavianArterySpasm || "";
    this.leftSubclavianArteryContraction =
      payload?.leftSubclavianArteryContraction || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
