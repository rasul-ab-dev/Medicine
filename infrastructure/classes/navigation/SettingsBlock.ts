// import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class SettingsBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "settings";
    this.path = "/settings/job-title";
    this.title = "navigation.settings";
    this.description = "description";
    this.icon = "settings.png";
    this.items = [];
  }
}
