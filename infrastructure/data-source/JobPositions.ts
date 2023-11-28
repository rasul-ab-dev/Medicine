import Vue from "vue";
import { JobPosition } from "~/infrastructure/enums/JobPosition";

function JobPositions(context: Vue) {
  return [
    { id: JobPosition.Accountant, name: context.$t("commonText.accountant") },
    { id: JobPosition.Cashier, name: context.$t("commonText.cashier") },
    { id: JobPosition.Doctor, name: context.$t("commonText.doctor") },
    { id: JobPosition.Moderator, name: context.$t("commonText.moderator") },
    { id: JobPosition.SysAdmin, name: context.$t("commonText.sysAdmin") },
  ];
}

export { JobPositions };
