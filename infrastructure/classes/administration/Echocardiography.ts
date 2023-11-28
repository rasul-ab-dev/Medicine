import { IEchocardiography } from "~/infrastructure/interfaces/administration/IEchocardiography";

export class Echocardiography implements IEchocardiography {
  echocardiography: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  aorta: string;
  walls: string;
  prisons: string;
  prisonsOpen: string;
  prisonsOpenCentimeter: string;
  ringMillimeter: string;
  leftHeart: string;
  mitralValve: string;
  mitralPrisons: string;
  prisonsMovement: string;
  prisonsMovementCentimeter: string;
  mitralRingMillimeter: string;
  leftHeartStomach: string;

  sso: string;
  sdo: string;
  ssg: string;
  sdg: string;
  uc: string;
  ef: string;
  sf: string;
  yu: string;

  leftStomachWrinkle: string;
  stomachBarrier: string;
  stomachBarrierMovement: string;
  leftStomachBackWall: string;
  leftStomachViolation: string;
  rightHeart: string;
  rightHeartStomach: string;
  tricuspidValve: string;
  tricuspidPrisons: string;
  tricuspidRings: string;
  pulmonaryArtery: string;
  pulmonaryValve: string;
  pulmonaryPrisons: string;
  pulmonaryRings: string;
  pericardium: string;
  aortalSystolicFlow: string;
  aortalRegurgitation: string;
  aortalGradient: string;
  mitralDiastolFlow: string;
  mitralRegurgitation: string;
  mitralGradient: string;
  tricuspidDiastolFlow: string;
  tricuspidRegurgitation: string;
  tricuspidGradient: string;
  pulmonaryFlow: string;
  pulmonaryRegurgitation: string;
  pulmonaryGradient: string;
  pathologicalFlowOfHearts: string;
  pulmonarySymptoms: string;
  features: string;
  result: string;
  doctor: number;

  constructor(payload?: IEchocardiography) {
    this.echocardiography = payload?.echocardiography || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.aorta = payload?.aorta || "";
    this.walls = payload?.walls || "";
    this.prisons = payload?.prisons || "";
    this.prisonsOpen = payload?.prisonsOpen || "";
    this.prisonsOpenCentimeter = payload?.prisonsOpenCentimeter || "";
    this.ringMillimeter = payload?.ringMillimeter || "";
    this.leftHeart = payload?.leftHeart || "";
    this.mitralValve = payload?.mitralValve || "";
    this.mitralPrisons = payload?.mitralPrisons || "";
    this.prisonsMovement = payload?.prisonsMovement || "";
    this.prisonsMovementCentimeter = payload?.prisonsMovementCentimeter || "";
    this.mitralRingMillimeter = payload?.mitralRingMillimeter || "";
    this.leftHeartStomach = payload?.leftHeartStomach || "";
    this.sso = payload?.sso || "";
    this.sdo = payload?.sdo || "";
    this.ssg = payload?.ssg || "";
    this.sdg = payload?.sdg || "";
    this.uc = payload?.uc || "";
    this.ef = payload?.ef || "";
    this.sf = payload?.sf || "";
    this.yu = payload?.yu || "";

    this.leftStomachWrinkle = payload?.leftStomachWrinkle || "";
    this.stomachBarrier = payload?.stomachBarrier || "";
    this.stomachBarrierMovement = payload?.stomachBarrierMovement || "";
    this.leftStomachBackWall = payload?.leftStomachBackWall || "";
    this.leftStomachViolation = payload?.leftStomachViolation || "";
    this.rightHeart = payload?.rightHeart || "";
    this.rightHeartStomach = payload?.rightHeartStomach || "";
    this.tricuspidValve = payload?.tricuspidValve || "";
    this.tricuspidPrisons = payload?.tricuspidPrisons || "";
    this.tricuspidRings = payload?.tricuspidRings || "";
    this.pulmonaryArtery = payload?.pulmonaryArtery || "";
    this.pulmonaryValve = payload?.pulmonaryValve || "";
    this.pulmonaryPrisons = payload?.pulmonaryPrisons || "";
    this.pulmonaryRings = payload?.pulmonaryRings || "";
    this.pericardium = payload?.pericardium || "";
    this.aortalSystolicFlow = payload?.aortalSystolicFlow || "";
    this.aortalRegurgitation = payload?.aortalRegurgitation || "";
    this.aortalGradient = payload?.aortalGradient || "";
    this.mitralDiastolFlow = payload?.mitralDiastolFlow || "";
    this.mitralRegurgitation = payload?.mitralRegurgitation || "";
    this.mitralGradient = payload?.mitralGradient || "";
    this.tricuspidDiastolFlow = payload?.tricuspidDiastolFlow || "";
    this.tricuspidRegurgitation = payload?.tricuspidRegurgitation || "";
    this.tricuspidGradient = payload?.tricuspidGradient || "";
    this.pulmonaryFlow = payload?.pulmonaryFlow || "";
    this.pulmonaryRegurgitation = payload?.pulmonaryRegurgitation || "";
    this.pulmonaryGradient = payload?.pulmonaryGradient || "";
    this.pathologicalFlowOfHearts = payload?.pathologicalFlowOfHearts || "";
    this.pulmonarySymptoms = payload?.pulmonarySymptoms || "";
    this.features = payload?.features || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
