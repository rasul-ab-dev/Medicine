import { IBulletin } from "~/infrastructure/interfaces/IBulletin";

export class Bulletin implements IBulletin {
  id: number;
  nameTm: string;
  nameRu: string;
  image: [];
  descriptionTm: string;
  descriptionRu: string;
  publicationDate: string;
  mustRead: boolean;

  constructor(payload?: IBulletin) {
    this.id = payload?.id || null;
    this.nameTm = payload?.nameTm || "";
    this.nameRu = payload?.nameRu || "";
    this.image = payload?.image || [];
    this.descriptionTm = payload?.descriptionTm || "";
    this.descriptionRu = payload?.descriptionRu || "";
    this.publicationDate = payload?.publicationDate || "";
    this.mustRead = payload?.mustRead;
  }
}
