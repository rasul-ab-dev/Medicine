import { ILegsVein } from "~/infrastructure/interfaces/administration/ILegsVein";

export class LegsVein implements ILegsVein {
  legVein: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  rightEmptyVein: string;
  leftEmptyVein: string;
  rightOutVein: string;
  leftOutVein: string;
  rightCommonHamVein: string;
  leftCommonHamVein: string;
  rightChunVein: string;
  leftChunVein: string;
  rightHamVein: string;
  leftHamVein: string;
  rightBigOutSkinVein: string;
  leftBigOutSkinVein: string;
  rightKneesOutVein: string;
  leftKneesOutVein: string;
  rightSmallOutVein: string;
  leftSmallOutVein: string;
  rightFrontTibialisVein: string;
  leftFrontTibialisVein: string;
  rightBackTibialisVein: string;
  leftBackTibialisVein: string;
  rightFootVein: string;
  leftFootVein: string;
  rightFeature: string;
  leftFeature: string;
  result: string;
  doctor: number;

  constructor(payload?: ILegsVein) {
    this.legVein = payload?.legVein || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.rightEmptyVein = payload?.rightEmptyVein || "";
    this.leftEmptyVein = payload?.leftEmptyVein || "";
    this.rightOutVein = payload?.rightOutVein || "";
    this.leftOutVein = payload?.leftOutVein || "";
    this.rightCommonHamVein = payload?.rightCommonHamVein || "";
    this.leftCommonHamVein = payload?.leftCommonHamVein || "";
    this.rightChunVein = payload?.rightChunVein || "";
    this.leftChunVein = payload?.leftChunVein || "";
    this.rightHamVein = payload?.rightHamVein || "";
    this.leftHamVein = payload?.leftHamVein || "";
    this.rightBigOutSkinVein = payload?.rightBigOutSkinVein || "";
    this.leftBigOutSkinVein = payload?.leftBigOutSkinVein || "";
    this.rightKneesOutVein = payload?.rightKneesOutVein || "";
    this.leftKneesOutVein = payload?.leftKneesOutVein || "";
    this.rightSmallOutVein = payload?.rightSmallOutVein || "";
    this.leftSmallOutVein = payload?.leftSmallOutVein || "";
    this.rightFrontTibialisVein = payload?.rightFrontTibialisVein || "";
    this.leftFrontTibialisVein = payload?.leftFrontTibialisVein || "";
    this.rightBackTibialisVein = payload?.rightBackTibialisVein || "";
    this.leftBackTibialisVein = payload?.leftBackTibialisVein || "";
    this.rightFootVein = payload?.rightFootVein || "";
    this.leftFootVein = payload?.leftFootVein || "";
    this.rightFeature = payload?.rightFeature || "";
    this.leftFeature = payload?.leftFeature || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
