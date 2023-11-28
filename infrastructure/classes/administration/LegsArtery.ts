import { ILegsArtery } from "~/infrastructure/interfaces/administration/ILegsArtery";

export class LegsArtery implements ILegsArtery {
  legsArtery: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  rightOutArteryDiametr: string;
  rightOutArterySpasm: string;
  rightOutArteryAB: string;
  leftOutArteryDiametr: string;
  leftOutArterySpasm: string;
  leftOutArteryAB: string;
  rightHamArteryDiametr: string;
  rightHamArterySpasm: string;
  rightHamArteryAB: string;
  leftHamArteryDiametr: string;
  leftHamArterySpasm: string;
  leftHamArteryAB: string;
  rightFrontHamArteryDiametr: string;
  rightFrontHamArterySpasm: string;
  rightFrontHamArteryAB: string;
  leftFrontHamArteryDiametr: string;
  leftFrontHamArterySpasm: string;
  leftFrontHamArteryAB: string;
  rightKneesOutArteryDiametr: string;
  rightKneesOutArterySpasm: string;
  rightKneesOutArteryAB: string;
  leftKneesOutArteryDiametr: string;
  leftKneesOutArterySpasm: string;
  leftKneesOutArteryAB: string;
  rightFrontTibialisArteryDiametr: string;
  rightFrontTibialisArterySpasm: string;
  rightFrontTibialisArteryAB: string;
  leftFrontTibialisArteryDiametr: string;
  leftFrontTibialisArterySpasm: string;
  leftFrontTibialisArteryAB: string;
  rightBackTibialisArteryDiametr: string;
  rightBackTibialisArterySpasm: string;
  rightBackTibialisArteryAB: string;
  leftBackTibialisArteryDiametr: string;
  leftBackTibialisArterySpasm: string;
  leftBackTibialisArteryAB: string;
  rightAnkleIndexDiametr: string;
  rightAnkleIndexSpasm: string;
  rightAnkleIndexAB: string;
  leftAnkleIndexDiametr: string;
  leftAnkleIndexSpasm: string;
  leftAnkleIndexAB: string;
  result: string;
  doctor: number;

  constructor(payload?: ILegsArtery) {
    this.legsArtery = payload?.legsArtery || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.rightOutArteryDiametr = payload?.rightOutArteryDiametr || "";
    this.rightOutArterySpasm = payload?.rightOutArterySpasm || "";
    this.rightOutArteryAB = payload?.rightOutArteryAB || "";
    this.leftOutArteryDiametr = payload?.leftOutArteryDiametr || "";
    this.leftOutArterySpasm = payload?.leftOutArterySpasm || "";
    this.leftOutArteryAB = payload?.leftOutArteryAB || "";
    this.rightHamArteryDiametr = payload?.rightHamArteryDiametr || "";
    this.rightHamArterySpasm = payload?.rightHamArterySpasm || "";
    this.rightHamArteryAB = payload?.rightHamArteryAB || "";
    this.leftHamArteryDiametr = payload?.leftHamArteryDiametr || "";
    this.leftHamArterySpasm = payload?.leftHamArterySpasm || "";
    this.leftHamArteryAB = payload?.leftHamArteryAB || "";
    this.rightFrontHamArteryDiametr = payload?.rightFrontHamArteryDiametr || "";
    this.rightFrontHamArterySpasm = payload?.rightFrontHamArterySpasm || "";
    this.rightFrontHamArteryAB = payload?.rightFrontHamArteryAB || "";
    this.leftFrontHamArteryDiametr = payload?.leftFrontHamArteryDiametr || "";
    this.leftFrontHamArterySpasm = payload?.leftFrontHamArterySpasm || "";
    this.leftFrontHamArteryAB = payload?.leftFrontHamArteryAB || "";
    this.rightKneesOutArteryDiametr = payload?.rightKneesOutArteryDiametr || "";
    this.rightKneesOutArterySpasm = payload?.rightKneesOutArterySpasm || "";
    this.rightKneesOutArteryAB = payload?.rightKneesOutArteryAB || "";
    this.leftKneesOutArteryDiametr = payload?.leftKneesOutArteryDiametr || "";
    this.leftKneesOutArterySpasm = payload?.leftKneesOutArterySpasm || "";
    this.leftKneesOutArteryAB = payload?.leftKneesOutArteryAB || "";
    this.rightFrontTibialisArteryDiametr =
      payload?.rightFrontTibialisArteryDiametr || "";
    this.rightFrontTibialisArterySpasm =
      payload?.rightFrontTibialisArterySpasm || "";
    this.rightFrontTibialisArteryAB = payload?.rightFrontTibialisArteryAB || "";
    this.leftFrontTibialisArteryDiametr =
      payload?.leftFrontTibialisArteryDiametr || "";
    this.leftFrontTibialisArterySpasm =
      payload?.leftFrontTibialisArterySpasm || "";
    this.leftFrontTibialisArteryAB = payload?.leftFrontTibialisArteryAB || "";
    this.rightBackTibialisArteryDiametr =
      payload?.rightBackTibialisArteryDiametr || "";
    this.rightBackTibialisArterySpasm =
      payload?.rightBackTibialisArterySpasm || "";
    this.rightBackTibialisArteryAB = payload?.rightBackTibialisArteryAB || "";
    this.leftBackTibialisArteryDiametr =
      payload?.leftBackTibialisArteryDiametr || "";
    this.leftBackTibialisArterySpasm =
      payload?.leftBackTibialisArterySpasm || "";
    this.leftBackTibialisArteryAB = payload?.leftBackTibialisArteryAB || "";
    this.rightAnkleIndexDiametr = payload?.rightAnkleIndexDiametr || "";
    this.rightAnkleIndexSpasm = payload?.rightAnkleIndexSpasm || "";
    this.rightAnkleIndexAB = payload?.rightAnkleIndexAB || "";
    this.leftAnkleIndexDiametr = payload?.leftAnkleIndexDiametr || "";
    this.leftAnkleIndexSpasm = payload?.leftAnkleIndexSpasm || "";
    this.leftAnkleIndexAB = payload?.leftAnkleIndexAB || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
