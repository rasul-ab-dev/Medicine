import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class DistrictBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "district";
    this.path = "/settings/district";
    this.title = "setting.district";
    this.description = "description";
    this.icon = "civil-status.png";
    this.items = [];
  }
}