import { Permission } from "~/infrastructure/enums/Permission";
import { IClaim } from "~/infrastructure/interfaces/IClaim";
import { Controllers } from "~/infrastructure/enums/Controllers";

export class PermissionControler {
  static canUpdate(permission: number): boolean {
    return (
      permission === Permission.Update || permission === Permission.FullAccess
    );
  }
  static canCreate(permission: number): boolean {
    return (
      permission === Permission.Create ||
      permission === Permission.Update ||
      permission === Permission.FullAccess
    );
  }
  static fullAccess(permission: number): boolean {
    return permission === Permission.FullAccess;
  }
  static administrationAccess(filteredClaims: IClaim): boolean {
    return filteredClaims.hasOwnProperty(Controllers.CabinetsController);

    // filteredClaims.hasOwnProperty("User") ||
    // filteredClaims.hasOwnProperty("UserWorkplace") ||
    // filteredClaims.hasOwnProperty("Organization") ||
    // filteredClaims.hasOwnProperty("LetterSenderOrganization") ||
    // filteredClaims.hasOwnProperty("Region") ||
    // filteredClaims.hasOwnProperty("District") ||
    // filteredClaims.hasOwnProperty("Citizenship") ||
    // filteredClaims.hasOwnProperty("IdentityDocumentType") ||
    // filteredClaims.hasOwnProperty("IdentityDocumentSeries") ||
    // filteredClaims.hasOwnProperty("RealEstateMission") ||
    // filteredClaims.hasOwnProperty("DocumentContent") ||
    // filteredClaims.hasOwnProperty("Currency") ||
    // filteredClaims.hasOwnProperty("OfficialDocumentName") ||
    // filteredClaims.hasOwnProperty("RefusalLaw") ||
    // filteredClaims.hasOwnProperty("RefusalReason") ||
    // filteredClaims.hasOwnProperty("SpecialApplicantType") ||
    // filteredClaims.hasOwnProperty("Law") ||
    // filteredClaims.hasOwnProperty("BaseAmount") ||
    // filteredClaims.hasOwnProperty("GovernmentDuty") ||
    // filteredClaims.hasOwnProperty("GovernmentDutyGroup")
  }
  // static agencyAccess(filteredClaims: IClaim): boolean {
  //   return (
  //     filteredClaims.hasOwnProperty("Statement") ||
  //     filteredClaims.hasOwnProperty("RegistrationStatement") ||
  //     filteredClaims.hasOwnProperty("SuspendStatement") ||
  //     filteredClaims.hasOwnProperty("ChangeStatement") ||
  //     filteredClaims.hasOwnProperty("GiveInformationStatement") ||
  //     filteredClaims.hasOwnProperty("LegalAidStatement") ||
  //     filteredClaims.hasOwnProperty("ConfirmationStatement") ||
  //     filteredClaims.hasOwnProperty("RegistrationStatement") ||
  //     filteredClaims.hasOwnProperty("Blank") ||
  //     filteredClaims.hasOwnProperty("BlankTransfer") ||
  //     filteredClaims.hasOwnProperty("BlankDestroy") ||
  //     filteredClaims.hasOwnProperty("Payment") ||
  //     filteredClaims.hasOwnProperty("Prepayment") ||
  //     filteredClaims.hasOwnProperty("Service") ||
  //     filteredClaims.hasOwnProperty("RegistrationService") ||
  //     filteredClaims.hasOwnProperty("SuspendService") ||
  //     filteredClaims.hasOwnProperty("ChangeService") ||
  //     filteredClaims.hasOwnProperty("GiveInformationService") ||
  //     filteredClaims.hasOwnProperty("LegalAidService") ||
  //     filteredClaims.hasOwnProperty("ConfirmationService") ||
  //     filteredClaims.hasOwnProperty("EncumbranceRelease") ||
  //     filteredClaims.hasOwnProperty("RefusalService") ||
  //     filteredClaims.hasOwnProperty("EncumbranceLetter") ||
  //     filteredClaims.hasOwnProperty("Book") ||
  //     filteredClaims.hasOwnProperty("UserBook") ||
  //     filteredClaims.hasOwnProperty("Notification") ||
  //     filteredClaims.hasOwnProperty("CaseRelationship") ||
  //     filteredClaims.hasOwnProperty("SpecialApplicant")
  //   );
  // }
}
