import { IApplicationPayment } from "~/infrastructure/interfaces/IApplicationPayment";

export class ApplicationPayment implements IApplicationPayment {
  applicationObservationsId: [];
  isDefaultValue: boolean;

  constructor(payload?: IApplicationPayment) {
    this.applicationObservationsId = payload?.applicationObservationsId || [];
    this.isDefaultValue = payload?.isDefaultValue;
  }
}
