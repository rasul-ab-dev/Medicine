import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class DiseaseBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "patientGroup";
    this.path = "/settings/disease";
    this.title = "setting.diseaseBase";
    this.description = "description";
    this.icon = "disease.png";
    this.items = [];
  }
}
