import Vue from "vue";
import { CitizenStatus } from "~/infrastructure/enums/CitizenStatus";

function CitizenStatuses(context: Vue) {
  return [
    { id: CitizenStatus.Сitizen, name: context.$t("Гражданин") },
    { id: CitizenStatus.NoСitizen, name: context.$t("Не гражданин") },
  ];
}

export { CitizenStatuses };
