import { Plugin } from "@nuxt/types";
import VueRouter from "vue-router";
import LoginPage from "../layouts/loginPage.vue";

import { alert } from "devextreme/ui/dialog";

let router = new VueRouter({
  mode: "history",
  routes: [{ name: "login", path: "/login", component: LoginPage }],
});

const accessor: Plugin = ({ $axios, redirect, app: { i18n } }) => {
  if (process.env.NODE_ENV === "production") {
    $axios.setBaseURL(document.location.origin);
  } else {
    const { SERVER_URL }: string | any = process.env;
    $axios.setBaseURL(SERVER_URL);
  }
  $axios.interceptors.request.use(
    function (config) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
      if (config.headers.Authorization === "Bearer null") {
        redirect("/login");
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  $axios.onError(async (error) => {
    if (error.response?.status === 401) {
      await redirect("/login");
      return;
    }
    // if (error.response?.status === 403) {
    //   await router.push(`/login`);
    //   location.reload();
    //   return;
    // }
    if (error.response?.status === 404) {
      await router.push("/error/404");
      return;
    }
    if (
      error.response &&
      error.response.headers["content-type"] ===
        "application/problem+json; charset=utf-8"
    ) {
      var errors = [];
      var responseDetail;

      if (error.response.config.responseType == "arraybuffer") {
        let responseData = JSON.parse(
          String.fromCharCode.apply(null, new Uint8Array(error.response.data))
        );
        responseDetail = JSON.parse(responseData.detail);
      } else {
        responseDetail = JSON.parse(error.response.data.detail);
      }

      for (const key in responseDetail) {
        if (responseDetail.hasOwnProperty(key)) {
          responseDetail[key].forEach((element) => {
            errors.push(element);
          });
        }
      }
      if (errors) {
        let header: string = `${i18n.t("errors.title")}`;
        alert(
          `<ul>${errors
            .map((el) => {
              return `<li class="text--error">${el}</li>`;
            })
            .join(" ")}</ul>`,
          header
        );
      }
    }
    throw error;
  });
};

export default accessor;
