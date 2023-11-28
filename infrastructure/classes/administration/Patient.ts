import { IPatient } from "~/infrastructure/interfaces/administration/IPatient";

export class Patient implements IPatient {
  firstName: string;
  lastName: string;
  middleName?: string;
  applicantNumber: string;
  sex: number;
  dateOfBirth: Date;
  passportNumber?: string;
  citizen: boolean;
  phone1: string;
  phone2?: string;
  vip: boolean;
  street: string;
  house: string;
  notice: string;
  flat: string;
  addressNote: string;
  clinicId: number;
  applicatGroupId: number;
  region: string;
  city: string;
  districtId: number;
  // images?: []

  constructor(payload?: IPatient) {
    this.firstName = payload?.firstName || "";
    this.lastName = payload?.lastName || "";
    this.middleName = payload?.middleName || "";
    this.applicantNumber = payload?.applicantNumber || "";
    this.sex = payload?.sex || null;
    this.dateOfBirth = payload?.dateOfBirth;
    this.passportNumber = payload?.passportNumber || "";
    this.citizen = payload?.citizen;
    this.phone1 = payload?.phone1 || "";
    this.phone2 = payload?.phone2 || "";
    this.vip = payload?.vip;
    this.street = payload?.street || "";
    this.notice = payload?.notice || "";
    this.house = payload?.house || "";
    this.flat = payload?.flat || "";
    this.clinicId = payload?.clinicId || null;
    this.applicatGroupId = payload?.applicatGroupId || null;
    this.region = payload?.region || "";
    this.city = payload?.city || "";
    this.districtId = payload?.districtId || null;
    // this.images = payload?.images || [];
  }
}
