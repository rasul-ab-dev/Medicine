import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class JobTitleBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "jobTitle";
    this.path = "/settings/job-title";
    this.title = "setting.jobTitle";
    this.description = "description";
    this.icon = "job-title.png";
    this.items = [];
  }
}
