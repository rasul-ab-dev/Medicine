import Vue from "vue";
import { ApplicationStatus } from "../enums/ApplicationStatus";

function ApplicationStatuses(context: Vue) {
  return [
    {
      id: ApplicationStatus.InProgress,
      name: context.$t("applicationStatus.inProgress"),
    },
    {
      id: ApplicationStatus.Completed,
      name: context.$t("applicationStatus.completed"),
    },
    {
      id: ApplicationStatus.Canceled,
      name: context.$t("applicationStatus.canceled"),
    },
    {
      id: ApplicationStatus.DontCame,
      name: context.$t("applicationStatus.dontCame"),
    },
  ];
}

export { ApplicationStatuses };
