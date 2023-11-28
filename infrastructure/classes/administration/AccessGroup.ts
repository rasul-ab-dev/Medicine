import { IAccessGroup } from "~/infrastructure/interfaces/administration/IAccessGroup";

export class AccessGroup implements IAccessGroup {
  accessDisplayName: string;
  accessName: string;
  id: number;
  isUsed: boolean;

  constructor(payload?: IAccessGroup) {
    this.accessDisplayName = payload?.accessDisplayName || "";
    this.accessName = payload?.accessName || "";
    this.id = payload?.id || null;
    this.isUsed = payload?.isUsed;
  }
}
