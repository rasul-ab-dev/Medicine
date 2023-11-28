import Vue from "vue";
import { Plugin } from "@nuxt/types";
import VueAWN from "vue-awesome-notifications";

const accessor: Plugin = ({ app }) => {
  const options = {
    labels: {
      info: app.i18n.t("notification.labels.info"),
      success: app.i18n.t("notification.labels.success"),
      alert: app.i18n.t("notification.labels.alert"),
      warning: app.i18n.t("notification.labels.warning"),
      async: app.i18n.t("notification.labels.async")
    },
    messages: {
      info: app.i18n.t("notification.messages.info"),
      success: app.i18n.t("notification.messages.success"),
      alert: app.i18n.t("notification.messages.alert"),
      warning: app.i18n.t("notification.messages.warning"),
      async: app.i18n.t("notification.messages.async"),
      "async-block": app.i18n.t("notification.messages.asyncBlock")
    },
    position: "bottom-right",
  };

  Vue.use(VueAWN, options);
};

export default accessor;
