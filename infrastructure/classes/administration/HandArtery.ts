import { IHandArtery } from "~/infrastructure/interfaces/administration/IHandArtery";

export class HandArtery implements IHandArtery {
  handArtery: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;
  rightClavicularArteryDiametr: string;
  rightClavicularArterySpasm: string;
  rightClavicularArteryAB: string;
  leftClavicularArteryDiametr: string;
  leftClavicularArterySpasm: string;
  leftClavicularArteryAB: string;
  rightShoulderArteryDiametr: string;
  rightShoulderArterySpasm: string;
  rightShoulderArteryAB: string;
  leftShoulderArteryDiametr: string;
  leftShoulderArterySpasm: string;
  leftShoulderArteryAB: string;
  rightWristArteryDiametr: string;
  rightWristArterySpasm: string;
  rightWristArteryAB: string;
  leftWristArteryDiametr: string;
  leftWristArterySpasm: string;
  leftWristArteryAB: string;
  rightWristHandArteryDiametr: string;
  rightWristHandArterySpasm: string;
  rightWristHandArteryAB: string;
  leftWristHandArteryDiametr: string;
  leftWristHandArterySpasm: string;
  leftWristHandArteryAB: string;
  result: string;
  doctor: number;

  constructor(payload?: IHandArtery) {
    this.handArtery = payload?.handArtery || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;
    this.rightClavicularArteryDiametr =
      payload?.rightClavicularArteryDiametr || "";
    this.rightClavicularArterySpasm = payload?.rightClavicularArterySpasm || "";
    this.rightClavicularArteryAB = payload?.rightClavicularArteryAB || "";
    this.leftClavicularArteryDiametr =
      payload?.leftClavicularArteryDiametr || "";
    this.leftClavicularArterySpasm = payload?.leftClavicularArterySpasm || "";
    this.leftClavicularArteryAB = payload?.leftClavicularArteryAB || "";
    this.rightShoulderArteryDiametr = payload?.rightShoulderArteryDiametr || "";
    this.rightShoulderArterySpasm = payload?.rightShoulderArterySpasm || "";
    this.rightShoulderArteryAB = payload?.rightShoulderArteryAB || "";
    this.leftShoulderArteryDiametr = payload?.leftShoulderArteryDiametr || "";
    this.leftShoulderArterySpasm = payload?.leftShoulderArterySpasm || "";
    this.leftShoulderArteryAB = payload?.leftShoulderArteryAB || "";
    this.rightWristArteryDiametr = payload?.rightWristArteryDiametr || "";
    this.rightWristArterySpasm = payload?.rightWristArterySpasm || "";
    this.rightWristArteryAB = payload?.rightWristArteryAB || "";
    this.leftWristArteryDiametr = payload?.leftWristArteryDiametr || "";
    this.leftWristArterySpasm = payload?.leftWristArterySpasm || "";
    this.leftWristArteryAB = payload?.leftWristArteryAB || "";
    this.rightWristHandArteryDiametr =
      payload?.rightWristHandArteryDiametr || "";
    this.rightWristHandArterySpasm = payload?.rightWristHandArterySpasm || "";
    this.rightWristHandArteryAB = payload?.rightWristHandArteryAB || "";
    this.leftWristHandArteryDiametr = payload?.leftWristHandArteryDiametr || "";
    this.leftWristHandArterySpasm = payload?.leftWristHandArterySpasm || "";
    this.leftWristHandArteryAB = payload?.leftWristHandArteryAB || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
