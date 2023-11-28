import { Plugin } from "@nuxt/types";
import { NavigationGenerator } from "~/infrastructure/classes/navigation/NavigationGenerator";
import { SettingNavigationGenerator } from "~/infrastructure/classes/navigation/SettingNavigationGenerator";

const accessor: Plugin = async ({ store }) => {
  let getToken = localStorage.getItem("parseToken");
  let controllers = JSON.parse(getToken);

  let nav = new NavigationGenerator();
  nav.generateItemsByClaims(controllers);
  store.commit("menu/SET_ITEMS", nav.items);

  let settingNav = new SettingNavigationGenerator();
  settingNav.generateItemsByClaims(controllers);
  store.commit("settingsMenu/SET_ITEMS", settingNav.items);
};
export default accessor;
