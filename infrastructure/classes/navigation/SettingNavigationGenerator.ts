import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";
import { MediaFileBlock } from "./MediaFileBlock";
import { JobTitleBlock } from "./JobTitleBlock";
import { PatientGroupBlock } from "./PatientGroupBlock";
import { CitiesBlock } from "./CitiesBlock";
import { DistrictBlock } from "./DistrictBlock";
import { DiseaseBlock } from "./DiseaseBlock";
import { PolyclinicBlock } from "./PolyclinicBlock";
import { RegionBlock } from "./RegionBlock";
import { IClaim } from "~/infrastructure/interfaces/IClaim";

export class SettingNavigationGenerator {
  items: IBaseNavigation[];
  constructor() {
    this.items = [];
  }
  generateItemsByClaims(filteredClaims: IClaim) {
    // const mediaFileBlock = new MediaFileBlock();
    // this.items.push(mediaFileBlock);

    const jobTitleBlock = new JobTitleBlock();
    this.items.push(jobTitleBlock);

    const patientGroupBlock = new PatientGroupBlock();
    this.items.push(patientGroupBlock);

    const regionBlock = new RegionBlock();
    this.items.push(regionBlock);

    const citiesBlock = new CitiesBlock();
    this.items.push(citiesBlock);

    const districtBlock = new DistrictBlock();
    this.items.push(districtBlock);

    const diseaseBlock = new DiseaseBlock();
    this.items.push(diseaseBlock);

    const polyclinicBlock = new PolyclinicBlock();
    this.items.push(polyclinicBlock);
  }
}
