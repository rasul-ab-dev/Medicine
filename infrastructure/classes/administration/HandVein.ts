import { IHandVein } from "~/infrastructure/interfaces/administration/IHandVein";

export class HandVein implements IHandVein {
  handVein: string;
  date: string;
  payment: string;
  cabinet: number;
  patient: number;

  rightSubelaviaDiametr: string;
  rightSubelaviaSpasm: string;
  rightSubelaviaPerforant: string;

  leftSubelaviaDiametr: string;
  leftSubelaviaSpasm: string;
  leftSubelaviaPerforant: string;

  rightAxillarisDiametr: string;
  rightAxillarisSpasm: string;
  rightAxillarisPerforant: string;

  leftAxillarisDiametr: string;
  leftAxillarisSpasm: string;
  leftAxillarisPerforant: string;

  rightBrahialisDiametr: string;
  rightBrahialisSpasm: string;
  rightBrahialisPerforant: string;

  leftBrahialisDiametr: string;
  leftBrahialisSpasm: string;
  leftBrahialisPerforant: string;

  rightUlnarisDiametr: string;
  rightUlnarisSpasm: string;
  rightUlnarisPerforant: string;

  leftUlnarisDiametr: string;
  leftUlnarisSpasm: string;
  leftUlnarisPerforant: string;

  rightRadialisDiametr: string;
  rightRadialisSpasm: string;
  rightRadialisPerforant: string;

  leftRadialisDiametr: string;
  leftRadialisSpasm: string;
  leftRadialisPerforant: string;

  result: string;
  doctor: number;

  constructor(payload?: IHandVein) {
    this.handVein = payload?.handVein || "";
    this.date = payload?.date || "";
    this.payment = payload?.payment || "";
    this.cabinet = payload?.cabinet || null;
    this.patient = payload?.patient || null;

    this.rightSubelaviaDiametr = payload?.rightSubelaviaDiametr || "";
    this.rightSubelaviaSpasm = payload?.rightSubelaviaSpasm || "";
    this.rightSubelaviaPerforant = payload?.rightSubelaviaPerforant || "";

    this.leftSubelaviaDiametr = payload?.leftSubelaviaDiametr || "";
    this.leftSubelaviaSpasm = payload?.leftSubelaviaSpasm || "";
    this.leftSubelaviaPerforant = payload?.leftSubelaviaPerforant || "";

    this.rightAxillarisDiametr = payload?.rightAxillarisDiametr || "";
    this.rightAxillarisSpasm = payload?.rightAxillarisSpasm || "";
    this.rightAxillarisPerforant = payload?.rightAxillarisPerforant || "";

    this.leftAxillarisDiametr = payload?.leftAxillarisDiametr || "";
    this.leftAxillarisSpasm = payload?.leftAxillarisSpasm || "";
    this.leftAxillarisPerforant = payload?.leftAxillarisPerforant || "";

    this.rightBrahialisDiametr = payload?.rightBrahialisDiametr || "";
    this.rightBrahialisSpasm = payload?.rightBrahialisSpasm || "";
    this.rightBrahialisPerforant = payload?.rightBrahialisPerforant || "";

    this.leftBrahialisDiametr = payload?.leftBrahialisDiametr || "";
    this.leftBrahialisSpasm = payload?.leftBrahialisSpasm || "";
    this.leftBrahialisPerforant = payload?.leftBrahialisPerforant || "";

    this.rightUlnarisDiametr = payload?.rightUlnarisDiametr || "";
    this.rightUlnarisSpasm = payload?.rightUlnarisSpasm || "";
    this.rightUlnarisPerforant = payload?.rightUlnarisPerforant || "";

    this.leftUlnarisDiametr = payload?.leftUlnarisDiametr || "";
    this.leftUlnarisSpasm = payload?.leftUlnarisSpasm || "";
    this.leftUlnarisPerforant = payload?.leftUlnarisPerforant || "";

    this.rightRadialisDiametr = payload?.rightRadialisDiametr || "";
    this.rightRadialisSpasm = payload?.rightRadialisSpasm || "";
    this.rightRadialisPerforant = payload?.rightRadialisPerforant || "";

    this.leftRadialisDiametr = payload?.leftRadialisDiametr || "";
    this.leftRadialisSpasm = payload?.leftRadialisSpasm || "";
    this.leftRadialisPerforant = payload?.leftRadialisPerforant || "";
    this.result = payload?.result || "";
    this.doctor = payload?.doctor || null;
  }
}
