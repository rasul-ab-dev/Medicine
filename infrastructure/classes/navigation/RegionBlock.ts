import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class RegionBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "information";
    this.path = "/settings/region";
    this.title = "setting.region";
    this.description = "description";
    this.icon = "region.png";
    this.items = [];
  }
}
