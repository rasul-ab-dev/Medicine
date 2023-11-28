import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class ToleranceGroupsBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "toleranceGroups";
    this.path = "/tolerance-groups";
    this.title = "navigation.tolerançeGroup";
    this.description = "tolerance groups description";
    this.icon = "access.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let toleranceGroups = new BaseNavigation({
      name: "toleranceGroups",
      path: `${this.path}`,
      title: "tolerance Groups title",
      description: "tolerance Groups description",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(toleranceGroups);
  }
}
