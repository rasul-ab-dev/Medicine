import { IInnerOrgans } from "~/infrastructure/interfaces/administration/IInnerOrgans";

export class InnerOrgans implements IInnerOrgans {
  innerOrgans: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;

  liverMeasure: string;
  liverWide: string;

  liverRightSide: string;
  liverLeftSide: string;

  liverContours: string;
  liverEdge: string;
  liverEchoStructure: string;
  liverCapsule: string;
  liverBloodVessels: string;
  liverChanges: string;
  bileDucts: string;

  measureOfBile: string;
  bileShape: string;
  bileWalls: string;
  bile: string;
  gallbladderCavity: string;
  measureTransmitter: string;
  bileTransmissionRoad: string;

  stomachMeasure: string;
  stomachThickness: string;
  stomachContours: string;
  stomachEchoStructure: string;
  stomachTransmissionRoad: string;
  stomachFeatures: string;

  spleenMeasure: string;
  spleenThickness: string;
  spleenContours: string;
  spleenEchoStructure: string;
  spleenBloodVessels: string;
  spleenFeatures: string;

  rightKidneyMeasure: string;
  rightCrackSystem: string;
  rightKidneyWalls: string;
  rightTransmitterAbility: string;
  rightStones: string;
  rightParenchyma: string;

  leftKidneyMeasure: string;
  leftCrackSystem: string;
  leftKidneyWalls: string;
  leftTransmitterAbility: string;
  leftStones: string;
  leftParenchyma: string;

  rightKidneyGlandsMeasure: string;
  rightKidneyGlandsContours: string;
  rightKidneyGlandsEchoStructure: string;

  leftKidneyGlandsMeasure: string;
  leftKidneyGlandsContours: string;
  leftKidneyGlandsEchoStructure: string;

  result: string;
  doctor: number;

  constructor(payload?: IInnerOrgans) {
    this.innerOrgans = payload?.innerOrgans || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.liverMeasure = payload?.liverMeasure || "";
    this.liverWide = payload?.liverWide || "";
    this.liverRightSide = payload?.liverRightSide || "";
    this.liverLeftSide = payload?.liverLeftSide || "";
    this.liverContours = payload?.liverContours || "";
    this.liverEdge = payload?.liverEdge || "";
    this.liverEchoStructure = payload?.liverEchoStructure || "";
    this.liverCapsule = payload?.liverCapsule || "";
    this.liverBloodVessels = payload?.liverBloodVessels || "";
    this.liverChanges = payload?.liverChanges || "";
    this.bileDucts = payload?.bileDucts || "";
    this.measureOfBile = payload?.measureOfBile || "";
    this.bileShape = payload?.bileShape || "";
    this.bileWalls = payload?.bileWalls || "";
    this.bile = payload?.bile || "";
    this.gallbladderCavity = payload?.gallbladderCavity || "";
    this.measureTransmitter = payload?.measureTransmitter || "";
    this.bileTransmissionRoad = payload?.bileTransmissionRoad || "";
    this.stomachMeasure = payload?.stomachMeasure || "";
    this.stomachThickness = payload?.stomachThickness || "";
    this.stomachContours = payload?.stomachContours || "";
    this.stomachEchoStructure = payload?.stomachEchoStructure || "";
    this.stomachTransmissionRoad = payload?.stomachTransmissionRoad || "";
    this.stomachFeatures = payload?.stomachFeatures || "";
    this.spleenMeasure = payload?.spleenMeasure || "";
    this.spleenThickness = payload?.spleenThickness || "";
    this.spleenContours = payload?.spleenContours || "";
    this.spleenEchoStructure = payload?.spleenEchoStructure || "";
    this.spleenBloodVessels = payload?.spleenBloodVessels || "";
    this.spleenFeatures = payload?.spleenFeatures || "";
    this.rightKidneyMeasure = payload?.rightKidneyMeasure || "";
    this.rightCrackSystem = payload?.rightCrackSystem || "";
    this.rightKidneyWalls = payload?.rightKidneyWalls || "";
    this.rightTransmitterAbility = payload?.rightTransmitterAbility || "";
    this.rightStones = payload?.rightStones || "";
    this.rightParenchyma = payload?.rightParenchyma || "";
    this.leftKidneyMeasure = payload?.leftKidneyMeasure || "";
    this.leftCrackSystem = payload?.leftCrackSystem || "";
    this.leftKidneyWalls = payload?.leftKidneyWalls || "";
    this.leftTransmitterAbility = payload?.leftTransmitterAbility || "";
    this.leftStones = payload?.leftStones || "";
    this.leftParenchyma = payload?.leftParenchyma || "";
    this.rightKidneyGlandsMeasure = payload?.rightKidneyGlandsMeasure || "";
    this.rightKidneyGlandsContours = payload?.rightKidneyGlandsContours || "";
    this.rightKidneyGlandsEchoStructure =
      payload?.rightKidneyGlandsEchoStructure || "";
    this.leftKidneyGlandsMeasure = payload?.leftKidneyGlandsMeasure || "";
    this.leftKidneyGlandsContours = payload?.leftKidneyGlandsContours || "";
    this.leftKidneyGlandsEchoStructure =
      payload?.leftKidneyGlandsEchoStructure || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
