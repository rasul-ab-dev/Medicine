import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class CalendarBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "calendar";
    this.path = "/calendar";
    this.title = "navigation.calendar";
    this.icon = "calendar.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let calendar = new BaseNavigation({
      name: "calendar",
      path: `${this.path}`,
      title: "calendar ",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(calendar);
  }
}
