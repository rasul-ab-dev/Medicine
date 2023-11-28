import { ICabinet } from "@/infrastructure/interfaces/administration/ICabinet";

export class Cabinet implements ICabinet {
  name: string;
  phone: string;
  number: string;
  flat: string;

  constructor(payload?: ICabinet) {
    this.name = payload?.name || "";
    this.phone = payload?.phone || "";
    this.number = payload?.number || "";
    this.flat = payload?.flat || "";
  }
}
