import { IGlandUltrasound } from "~/infrastructure/interfaces/administration/IGlandUltrasound";

export class GlandUltrasound implements IGlandUltrasound {
  glandUltrasound: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;

  rightMeasure: string;
  rightGlandVolume: string;
  rightCircuit: string;
  rightEhocomposition: string;

  leftMeasure: string;
  leftGlandVolume: string;
  leftCircuit: string;
  leftEhocomposition: string;

  neckMeasure: string;
  neckCircuit: string;
  neckEhocomposition: string;

  bloodVessels: string;
  lymphNodes: string;
  feature: string;
  result: string;
  doctor: number;

  constructor(payload?: IGlandUltrasound) {
    this.glandUltrasound = payload?.glandUltrasound || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.rightMeasure = payload?.rightMeasure || "";
    this.rightGlandVolume = payload?.rightGlandVolume || "";
    this.rightCircuit = payload?.rightCircuit || "";
    this.rightEhocomposition = payload?.rightEhocomposition || "";
    this.leftMeasure = payload?.leftMeasure || "";
    this.leftGlandVolume = payload?.leftGlandVolume || "";
    this.leftCircuit = payload?.leftCircuit || "";
    this.leftEhocomposition = payload?.leftEhocomposition || "";
    this.neckMeasure = payload?.neckMeasure || "";
    this.neckCircuit = payload?.neckCircuit || "";
    this.neckEhocomposition = payload?.neckEhocomposition || "";
    this.bloodVessels = payload?.bloodVessels || "";
    this.lymphNodes = payload?.lymphNodes || "";
    this.feature = payload?.feature || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
