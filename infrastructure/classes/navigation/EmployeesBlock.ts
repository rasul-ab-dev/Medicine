import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class EmployeesBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "employees";
    this.path = "/employees";
    this.title = "navigation.employee";
    this.icon = "user-groups.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let employees = new BaseNavigation({
      name: "employees",
      path: `${this.path}`,
      title: "navigation.employee",
      icon: "",
      visible: true,
    });
    this.items.push(employees);
  }
}
