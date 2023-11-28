import Vue from "vue";
import {
  OvariesPosition,
  FollicularPhase,
} from "~/infrastructure/enums/FemaleBlank";

function OvariesPositions(context: Vue) {
  return [
    { id: OvariesPosition.NormalPosition, name: context.$t("Adaty ýerleşen") },
    { id: OvariesPosition.BehindUterus, name: context.$t("Ýatgynyň yzynda") },
    {
      id: OvariesPosition.AboveUterus,
      name: context.$t("Ýatgynyň düýbinden ýokarda"),
    },
  ];
}

function FollicularPhases(context: Vue) {
  return [
    {
      id: FollicularPhase.Match,
      name: context.$t("Follikulýar apparaty sikliň fazasyna gabat gelýär"),
    },
    { id: FollicularPhase.NoMatch, name: context.$t("Bildirmeýär") },
  ];
}

export { OvariesPositions };
export { FollicularPhases };
