import { IFemaleOrgans } from "~/infrastructure/interfaces/administration/IFemaleOrgans";

export class FemaleOrgans implements IFemaleOrgans {
  femaleOrgans: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;

  menstrualCycle: string;
  uterus: string;
  uterusType: string;
  uterusContours: string;
  uterusMeasure: string;
  uterusLength: string;
  uterusThickness: string;
  uterusWide: string;
  myometriumStructure: string;
  haveButtons: string;
  subseroz: string;
  intramunal: string;
  submukoz: string;

  uterusEmptiness: string;
  myometriumChanges: string;
  endometrialStructure: string;
  myometriumThickness: string;
  myometriumUterusEmptiness: string;
  emptinessEdge: string;
  uterusPathological: string;
  uterusWallStructure: string;
  nabonov: string;
  backWalls: string;
  cervicalChanges: string;
  measures: string;
  myometriumVeinUnexpanded: string;
  douglasGap: string;
  smallBowl: string;

  rightOvaries: string;
  rightOvariesVolume: string;
  rightUterusLocation: string;
  rightFollicularPhase: string;
  rightOtherChanges: string;
  rightStroma: string;

  leftOvaries: string;
  leftOvariesVolume: string;
  leftUterusLocation: string;
  leftFollicularPhase: string;
  leftOtherChanges: string;
  leftStroma: string;

  additionalInfo: string;
  result: string;
  advices: string;
  doctor: string;

  constructor(payload?: IFemaleOrgans) {
    this.femaleOrgans = payload?.femaleOrgans || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.menstrualCycle = payload?.menstrualCycle || "";
    this.uterus = payload?.uterus || "";
    this.uterusType = payload?.uterusType || "";
    this.uterusContours = payload?.uterusContours || "";
    this.uterusMeasure = payload?.uterusMeasure || "";
    this.uterusLength = payload?.uterusLength || "";
    this.uterusThickness = payload?.uterusThickness || "";
    this.uterusWide = payload?.uterusWide || "";
    this.myometriumStructure = payload?.myometriumStructure || "";
    this.haveButtons = payload?.haveButtons || "";
    this.subseroz = payload?.subseroz || "";
    this.intramunal = payload?.intramunal || "";
    this.submukoz = payload?.submukoz || "";
    this.uterusEmptiness = payload?.uterusEmptiness || "";
    this.myometriumChanges = payload?.myometriumChanges || "";
    this.endometrialStructure = payload?.endometrialStructure || "";
    this.myometriumThickness = payload?.myometriumThickness || "";
    this.myometriumUterusEmptiness = payload?.myometriumUterusEmptiness || "";
    this.emptinessEdge = payload?.emptinessEdge || "";
    this.uterusPathological = payload?.uterusPathological || "";
    this.uterusWallStructure = payload?.uterusWallStructure || "";
    this.nabonov = payload?.nabonov || "";
    this.backWalls = payload?.backWalls || "";
    this.cervicalChanges = payload?.cervicalChanges || "";
    this.measures = payload?.measures || "";
    this.myometriumVeinUnexpanded = payload?.myometriumVeinUnexpanded || "";
    this.douglasGap = payload?.douglasGap || "";
    this.smallBowl = payload?.smallBowl || "";
    this.rightOvaries = payload?.rightOvaries || "";
    this.rightOvariesVolume = payload?.rightOvariesVolume || "";
    this.rightUterusLocation = payload?.rightUterusLocation || "";
    this.rightFollicularPhase = payload?.rightFollicularPhase || "";
    this.rightOtherChanges = payload?.rightOtherChanges || "";
    this.rightStroma = payload?.rightStroma || "";
    this.leftOvaries = payload?.leftOvaries || "";
    this.leftOvariesVolume = payload?.leftOvariesVolume || "";
    this.leftUterusLocation = payload?.leftUterusLocation || "";
    this.leftFollicularPhase = payload?.leftFollicularPhase || "";
    this.leftOtherChanges = payload?.leftOtherChanges || "";
    this.leftStroma = payload?.leftStroma || "";
    this.additionalInfo = payload?.additionalInfo || "";
    this.result = payload?.result || "";
    this.advices = payload?.advices || "";
    this.doctor = payload?.doctor || "";
  }
}
