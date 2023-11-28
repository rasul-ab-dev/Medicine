export interface IHandVein {
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
}
