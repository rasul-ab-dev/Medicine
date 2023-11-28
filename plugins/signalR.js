import scanner from "~/infrastructure/hubs/scanner.js";

export default ({ app }, inject) => {
  inject("scanner", scanner(app));
};
