import { ICerebralArtery } from "~/infrastructure/interfaces/administration/ICerebralArtery";

export class CerebralArtery implements ICerebralArtery {
  cerebralArtery: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;

  rightFrontBrainArteryDiametr: string;
  rightFrontBrainArterySistol: string;
  rightFrontBrainArteryDiastol: string;
  rightFrontBrainArteryRi: string;
  rightFrontBrainArteryPi: string;
  rightFrontBrainArteryTamh: string;
  rightFrontBrainArteryContractionRate: string;

  leftFrontBrainArteryDiametr: string;
  leftFrontBrainArterySistol: string;
  leftFrontBrainArteryDiastol: string;
  leftFrontBrainArteryRi: string;
  leftFrontBrainArteryPi: string;
  leftFrontBrainArteryTamh: string;
  leftFrontBrainArteryContractionRate: string;

  rightMiddleBrainArteryDiametr: string;
  rightMiddleBrainArterySistol: string;
  rightMiddleBrainArteryDiastol: string;
  rightMiddleBrainArteryRi: string;
  rightMiddleBrainArteryPi: string;
  rightMiddleBrainArteryTamh: string;
  rightMiddleBrainArteryContractionRate: string;

  leftMiddleBrainArteryDiametr: string;
  leftMiddleBrainArterySistol: string;
  leftMiddleBrainArteryDiastol: string;
  leftMiddleBrainArteryRi: string;
  leftMiddleBrainArteryPi: string;
  leftMiddleBrainArteryTamh: string;
  leftMiddleBrainArteryContractionRate: string;

  rightBackBrainArteryDiametr: string;
  rightBackBrainArterySistol: string;
  rightBackBrainArteryDiastol: string;
  rightBackBrainArteryRi: string;
  rightBackBrainArteryPi: string;
  rightBackBrainArteryTamh: string;
  rightBackBrainArteryContractionRate: string;

  leftBackBrainArteryDiametr: string;
  leftBackBrainArterySistol: string;
  leftBackBrainArteryDiastol: string;
  leftBackBrainArteryRi: string;
  leftBackBrainArteryPi: string;
  leftBackBrainArteryTamh: string;
  leftBackBrainArteryContractionRate: string;

  rightSpineArteryDiametr: string;
  rightSpineArterySistol: string;
  rightSpineArteryDiastol: string;
  rightSpineArteryRi: string;
  rightSpineArteryPi: string;
  rightSpineArteryTamh: string;
  rightSpineArteryContractionRate: string;

  leftSpineArteryDiametr: string;
  leftSpineArterySistol: string;
  leftSpineArteryDiastol: string;
  leftSpineArteryRi: string;
  leftSpineArteryPi: string;
  leftSpineArteryTamh: string;
  leftSpineArteryContractionRate: string;

  mainRightArteryDiametr: string;
  mainRightArterySistol: string;
  mainRightArteryDiastol: string;
  mainRightArteryRi: string;
  mainRightArteryPi: string;
  mainRightArteryTamh: string;
  mainRightArteryContractionRate: string;

  mainLeftArteryDiametr: string;
  mainLeftArterySistol: string;
  mainLeftArteryDiastol: string;
  mainLeftArteryRi: string;
  mainLeftArteryPi: string;
  mainLeftArteryTamh: string;
  mainLeftArteryContractionRate: string;

  result: string;
  doctor: number;

  constructor(payload?: ICerebralArtery) {
    this.cerebralArtery = payload?.cerebralArtery || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.rightFrontBrainArteryDiametr =
      payload?.rightFrontBrainArteryDiametr || "";
    this.rightFrontBrainArterySistol =
      payload?.rightFrontBrainArterySistol || "";
    this.rightFrontBrainArteryDiastol =
      payload?.rightFrontBrainArteryDiastol || "";
    this.rightFrontBrainArteryRi = payload?.rightFrontBrainArteryRi || "";
    this.rightFrontBrainArteryPi = payload?.rightFrontBrainArteryPi || "";
    this.rightFrontBrainArteryTamh = payload?.rightFrontBrainArteryTamh || "";
    this.rightFrontBrainArteryContractionRate =
      payload?.rightFrontBrainArteryContractionRate || "";

    this.leftFrontBrainArteryDiametr =
      payload?.leftFrontBrainArteryDiametr || "";
    this.leftFrontBrainArterySistol = payload?.leftFrontBrainArterySistol || "";
    this.leftFrontBrainArteryDiastol =
      payload?.leftFrontBrainArteryDiastol || "";
    this.leftFrontBrainArteryRi = payload?.leftFrontBrainArteryRi || "";
    this.leftFrontBrainArteryPi = payload?.leftFrontBrainArteryPi || "";
    this.leftFrontBrainArteryTamh = payload?.leftFrontBrainArteryTamh || "";
    this.leftFrontBrainArteryContractionRate =
      payload?.leftFrontBrainArteryContractionRate || "";

    this.rightMiddleBrainArteryDiametr =
      payload?.rightMiddleBrainArteryDiametr || "";
    this.rightMiddleBrainArterySistol =
      payload?.rightMiddleBrainArterySistol || "";
    this.rightMiddleBrainArteryDiastol =
      payload?.rightMiddleBrainArteryDiastol || "";
    this.rightMiddleBrainArteryRi = payload?.rightMiddleBrainArteryRi || "";
    this.rightMiddleBrainArteryPi = payload?.rightMiddleBrainArteryPi || "";
    this.rightMiddleBrainArteryTamh = payload?.rightMiddleBrainArteryTamh || "";
    this.rightMiddleBrainArteryContractionRate =
      payload?.rightMiddleBrainArteryContractionRate || "";
    this.leftMiddleBrainArteryDiametr =
      payload?.leftMiddleBrainArteryDiametr || "";
    this.leftMiddleBrainArterySistol =
      payload?.leftMiddleBrainArterySistol || "";
    this.leftMiddleBrainArteryDiastol =
      payload?.leftMiddleBrainArteryDiastol || "";
    this.leftMiddleBrainArteryRi = payload?.leftMiddleBrainArteryRi || "";
    this.leftMiddleBrainArteryPi = payload?.leftMiddleBrainArteryPi || "";
    this.leftMiddleBrainArteryTamh = payload?.leftMiddleBrainArteryTamh || "";
    this.leftMiddleBrainArteryContractionRate =
      payload?.leftMiddleBrainArteryContractionRate || "";

    this.rightBackBrainArteryDiametr =
      payload?.rightBackBrainArteryDiametr || "";
    this.rightBackBrainArterySistol = payload?.rightBackBrainArterySistol || "";
    this.rightBackBrainArteryDiastol =
      payload?.rightBackBrainArteryDiastol || "";
    this.rightBackBrainArteryRi = payload?.rightBackBrainArteryRi || "";
    this.rightBackBrainArteryPi = payload?.rightBackBrainArteryPi || "";
    this.rightBackBrainArteryTamh = payload?.rightBackBrainArteryTamh || "";
    this.rightBackBrainArteryContractionRate =
      payload?.rightBackBrainArteryContractionRate || "";
    this.leftBackBrainArteryDiametr = payload?.leftBackBrainArteryDiametr || "";
    this.leftBackBrainArterySistol = payload?.leftBackBrainArterySistol || "";
    this.leftBackBrainArteryDiastol = payload?.leftBackBrainArteryDiastol || "";
    this.leftBackBrainArteryRi = payload?.leftBackBrainArteryRi || "";
    this.leftBackBrainArteryPi = payload?.leftBackBrainArteryPi || "";
    this.leftBackBrainArteryTamh = payload?.leftBackBrainArteryTamh || "";
    this.leftBackBrainArteryContractionRate =
      payload?.leftBackBrainArteryContractionRate || "";
    this.rightSpineArteryDiametr = payload?.rightSpineArteryDiametr || "";
    this.rightSpineArterySistol = payload?.rightSpineArterySistol || "";
    this.rightSpineArteryDiastol = payload?.rightSpineArteryDiastol || "";
    this.rightSpineArteryRi = payload?.rightSpineArteryRi || "";
    this.rightSpineArteryPi = payload?.rightSpineArteryPi || "";
    this.rightSpineArteryTamh = payload?.rightSpineArteryTamh || "";
    this.rightSpineArteryContractionRate =
      payload?.rightSpineArteryContractionRate || "";
    this.leftSpineArteryDiametr = payload?.leftSpineArteryDiametr || "";
    this.leftSpineArterySistol = payload?.leftSpineArterySistol || "";
    this.leftSpineArteryDiastol = payload?.leftSpineArteryDiastol || "";
    this.leftSpineArteryRi = payload?.leftSpineArteryRi || "";
    this.leftSpineArteryPi = payload?.leftSpineArteryPi || "";
    this.leftSpineArteryTamh = payload?.leftSpineArteryTamh || "";
    this.leftSpineArteryContractionRate =
      payload?.leftSpineArteryContractionRate || "";
    this.mainRightArteryDiametr = payload?.mainRightArteryDiametr || "";
    this.mainRightArterySistol = payload?.mainRightArterySistol || "";
    this.mainRightArteryDiastol = payload?.mainRightArteryDiastol || "";
    this.mainRightArteryRi = payload?.mainRightArteryRi || "";
    this.mainRightArteryPi = payload?.mainRightArteryPi || "";
    this.mainRightArteryTamh = payload?.mainRightArteryTamh || "";
    this.mainRightArteryContractionRate =
      payload?.mainRightArteryContractionRate || "";
    this.mainLeftArteryDiametr = payload?.mainLeftArteryDiametr || "";
    this.mainLeftArterySistol = payload?.mainLeftArterySistol || "";
    this.mainLeftArteryDiastol = payload?.mainLeftArteryDiastol || "";
    this.mainLeftArteryRi = payload?.mainLeftArteryRi || "";
    this.mainLeftArteryPi = payload?.mainLeftArteryPi || "";
    this.mainLeftArteryTamh = payload?.mainLeftArteryTamh || "";
    this.mainLeftArteryContractionRate =
      payload?.mainLeftArteryContractionRate || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
