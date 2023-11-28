import { BaseNavigation } from "./BaseNavigation";
import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class ReviewBlock implements IBaseNavigation {
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "review";
    this.path = "/review";
    this.title = "navigation.review";
    this.icon = "review.png";
    this.items = [];
  }

  generateItemsByClaims() {
    let review = new BaseNavigation({
      name: "review",
      path: `${this.path}`,
      title: "review title",
      icon: "gfdgdfg",
      visible: true,
    });
    this.items.push(review);
  }
}
