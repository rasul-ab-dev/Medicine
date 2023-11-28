import { ISettings } from "@/infrastructure/interfaces/administration/ISettings";

export class Settings implements ISettings {
  name: string;
  file?: string;

  constructor(payload?: ISettings) {
    this.name = payload?.name || "";
    this.file = payload?.file || "";
  }
}
