import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class EntriesBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "entries";
    this.path = "/entries";
    this.title = "navigation.entries";
    this.icon = "registration.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let entries = new BaseNavigation({
      name: "entries",
      path: `${this.path}`,
      title: "entries title",
      icon: "",
      visible: true,
    });
    this.items.push(entries);
  }
}
