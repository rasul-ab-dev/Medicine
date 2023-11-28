import Vue from "vue";
import { Gender } from "~/infrastructure/enums/Gender";

function Genders(context: Vue) {
  return [
    { id: Gender.Male, name: context.$t("commonText.male") },
    { id: Gender.Female, name: context.$t("commonText.female") },
  ];
}

export { Genders };
