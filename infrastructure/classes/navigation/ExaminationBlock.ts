import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class ExaminationBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "examination";
    this.path = "/examination";
    this.title = "navigation.examination";
    this.icon = "examination.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let examination = new BaseNavigation({
      name: "examination",
      path: `${this.path}`,
      title: "examination title",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(examination);
  }
}
