import { Claim } from "~/infrastructure/enums/Claim";
import { IClaim } from "~/infrastructure/interfaces/IClaim";

export class ClaimsControler {
  static filterClaims(claims: IClaim): IClaim {
    let filteredClaims: IClaim = { ...claims }
    for (const claim in claims) {
      if (Claim.hasOwnProperty(claim)) {
        filteredClaims[claim] = +filteredClaims[claim]
      } else {
        delete filteredClaims[claim]
      }
    }
    return filteredClaims
  }
}
