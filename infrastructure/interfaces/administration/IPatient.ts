export interface IPatient {
  id?: number
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
  images?: []
}
