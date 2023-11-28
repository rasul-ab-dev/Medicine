import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class CabinetBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "cabinet";
    this.path = "/cabinet";
    this.title = "navigation.cabinet";
    this.description = "description";
    this.icon = "icon-cabinet.png";
    this.items = [];
  }
}
