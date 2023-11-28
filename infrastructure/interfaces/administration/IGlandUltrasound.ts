export interface IGlandUltrasound {
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
}
