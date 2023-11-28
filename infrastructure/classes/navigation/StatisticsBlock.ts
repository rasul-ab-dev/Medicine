import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class StatisticsBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "statistics";
    this.path = "/statistics";
    this.title = "navigation.statistic";
    this.icon = "statistic.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let statistics = new BaseNavigation({
      name: "statistics",
      path: `${this.path}`,
      title: "statistics title",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(statistics);
  }
}
