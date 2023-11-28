import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class FormsBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "forms";
    this.path = "/blanks";
    this.title = "navigation.forms";
    this.icon = "google-docs.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let forms = new BaseNavigation({
      name: "forms",
      path: `${this.path}`,
      title: "Form title",
      visible: true,
    });
    this.items.push(forms);
  }
}
