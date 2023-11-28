import Vue from "vue";
import { Payment } from "~/infrastructure/enums/PaymentType";

function Payments(context: Vue) {
  return [
    { id: Payment.NotPaid, name: context.$t("paymentType.notPaid") },
    { id: Payment.PartialPaid, name: context.$t("paymentType.partialPaid") },
    { id: Payment.Paid, name: context.$t("paymentType.paid") },
  ];
}

export { Payments };
