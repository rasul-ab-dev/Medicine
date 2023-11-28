import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class PatientGroupBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "patientGroup";
    this.path = "/settings/patients-group";
    this.title = "setting.patientGroup";
    this.description = "description";
    this.icon = "patient-group.png";
    this.items = [];
  }
}
