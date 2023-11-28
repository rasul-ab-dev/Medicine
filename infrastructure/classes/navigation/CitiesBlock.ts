import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class CitiesBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "patientGroup";
    this.path = "/settings/cities";
    this.title = "setting.city";
    this.description = "description";
    this.icon = "city.png";
    this.items = [];
  }
}
