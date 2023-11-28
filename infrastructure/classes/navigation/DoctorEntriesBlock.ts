import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class DoctorEntriesBlock implements IBaseNavigation {
    name: string;
    path: string;
    title: string;
    description?: string;
    icon?: string;
    visible?: boolean;
    items: IBaseNavigation[];
  
    constructor() {
      this.name = "doctorEntries";
      this.path = "/doctor-entries";
      this.title = "Доктор записи";
      this.description = "description";
      this.icon = "gfjkdghfj";
      this.items = [];
    }
  }