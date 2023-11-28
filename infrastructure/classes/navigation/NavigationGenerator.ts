import { PermissionControler } from "~/infrastructure/classes/PermissionControler";
import { IClaim } from "~/infrastructure/interfaces/IClaim";
import { ExaminationBlock } from "./ExaminationBlock";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";
import { CabinetBlock } from "./CabinetBlock";
import { EmployeesBlock } from "./EmployeesBlock";
import { FormsBlock } from "./FormsBlock";
import { PatientsBlock } from "./PatientsBlock";
import { BulletinBlock } from "./BulletinBlock";
import { AdminBulletinBlock } from "./AdminBulletinBlock";
import { EntriesBlock } from "./EntriesBlock";
import { ToleranceGroupsBlock } from "./ToleranceGroupsBlock";
import { StatisticsBlock } from "./StatisticsBlock";
import { ReviewBlock } from "./ReviewBlock";
import { CalendarBlock } from "./CalendarBlock";
// import {DoctorEntriesBlock} from "./DoctorEntriesBlock"
import { ProfileBlock } from "./ProfileBlock";
import { SettingsBlock } from "./SettingsBlock";
import { Administration } from "./Administration";

export class NavigationGenerator {
  items: IBaseNavigation[];
  constructor() {
    this.items = [];
  }
  generateItemsByClaims(filteredClaims: IClaim) {
    let getToken = localStorage.getItem("parseToken");
    let parseGetToken = JSON.parse(getToken);
    let permission = parseGetToken?.BulletinsController;

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("CabinetsController")
    ) {
      const cabinetBlock = new CabinetBlock();
      // cabinetBlock.generateItemsByClaims()
      this.items.push(cabinetBlock);
    }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("UsersController")
    ) {
      const employeesBlock = new EmployeesBlock();
      // staffsBlock.generateItemsByClaims()
      this.items.push(employeesBlock);
    }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("BlanksController")
    ) {
      const formsBlock = new FormsBlock();
      // formsBlock.generateItemsByClaims()
      this.items.push(formsBlock);
    }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("ObservationsController")
    ) {
      const examinationBlock = new ExaminationBlock();
      // surveysBlock.generateItemsByClaims()
      this.items.push(examinationBlock);
    }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("ApplicantsController")
    ) {
      const patientsBlock = new PatientsBlock();
      // patientsBlock.generateItemsByClaims()
      this.items.push(patientsBlock);
    }

    // if (
    //   filteredClaims?.hasOwnProperty("BulletinsController") ||
    //   filteredClaims?.hasOwnProperty("admin") ||
    //   permission?.includes("Read")
    // ) {
    const bulletinBlock = new BulletinBlock();
    // bulletinBlock.generateItemsByClaims()
    this.items.push(bulletinBlock);
    // }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("BulletinsController") ||
      permission?.includes("FullAccess")
    ) {
      // if (permission?.includes("FullAccess") || permission?.includes("Create")) {
      const adminBulletinBlock = new AdminBulletinBlock();
      // bulletinBlock.generateItemsByClaims()
      this.items.push(adminBulletinBlock);
      // }
    }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("ApplicantsController")
    ) {
      const entriesBlock = new EntriesBlock();
      // entriesBlock.generateItemsByClaims()
      this.items.push(entriesBlock);
    }

    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("RolesController")
    ) {
      const toleranceGroupsBlock = new ToleranceGroupsBlock();
      // toleranceGroupsBlock.generateItemsByClaims()
      this.items.push(toleranceGroupsBlock);
    }

    if (
      filteredClaims?.hasOwnProperty("ApplicationObservationPaymentsController")
    ) {
      const statisticsBlock = new StatisticsBlock();
      // statisticsBlock.generateItemsByClaims()
      this.items.push(statisticsBlock);
    }

    if (filteredClaims?.hasOwnProperty("ApplicationObservationsController")) {
      const reviewBlock = new ReviewBlock();
      // reviewBlock.generateItemsByClaims()
      this.items.push(reviewBlock);
    }

    const calendarBlock = new CalendarBlock();
    // calendarBlock.generateItemsByClaims()
    this.items.push(calendarBlock);

    // TODO УДАЛИТЬ СТРАНИЦУ ДОКТОР ЗАПИСИ

    // const doctorEntriesbBlock = new DoctorEntriesBlock()
    // // calendarBlock.generateItemsByClaims()
    // this.items.push(doctorEntriesbBlock)
    if (
      filteredClaims?.hasOwnProperty("admin") ||
      filteredClaims?.hasOwnProperty("UsersController")
    ) {
      const profileBlock = new ProfileBlock();
      // calendarBlock.generateItemsByClaims()
      this.items.push(profileBlock);
    }

    // const administration = new Administration();
    // this.items.push(administration);

    if (filteredClaims?.hasOwnProperty("admin")) {
      const settingsBlock = new SettingsBlock();
      // calendarBlock.generateItemsByClaims()
      this.items.push(settingsBlock);
    }
  }
}
