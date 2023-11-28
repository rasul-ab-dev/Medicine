import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class AdminBulletinBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "bulletin";
    this.path = "/admin-bulletin";
    this.title = "navigation.adminBulletin";
    this.icon = "newspaper.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let adminBulletinBlock = new BaseNavigation({
      name: "bulletin",
      path: `${this.path}`,
      title: "bulletin title",
      icon: "",
      visible: true,
    });
    this.items.push(adminBulletinBlock);
  }
}
