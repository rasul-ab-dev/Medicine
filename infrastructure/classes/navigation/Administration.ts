import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class Administration implements IBaseNavigation {
    name: string;
    path: string;
    title: string;
    description?: string;
    icon?: string;
    visible?: boolean;
    items: IBaseNavigation[];

    constructor() {
        this.name = "administration";
        this.path = "/administration";
        this.title = "navigation.administration";
        this.description = "bulletin description";
        this.icon = "administration.png";
        this.items = [];
      }
}