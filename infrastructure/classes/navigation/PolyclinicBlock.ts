import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class PolyclinicBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "polyclinics";
    this.path = "/settings/polyclinics";
    this.title = "setting.polyclinics";
    this.description = "description";
    this.icon = "polyclinic.png";
    this.items = [];
  }
}
