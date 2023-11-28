import { IBaseNavigation } from "~/infrastructure/interfaces/navigation/IBasaNavigation";

export class MediaFileBlock implements IBaseNavigation {

  // to remove
  name: string;
  path: string;
  title: string;
  description?: string;
  icon?: string;
  visible?: boolean;
  items: IBaseNavigation[];

  constructor() {
    this.name = "mediaFile";
    this.path = "/settings/media-files";
    this.title = "setting.mediaFile";
    this.description = "description";
    this.icon = "folder.png";
    this.items = [];
  }
}
