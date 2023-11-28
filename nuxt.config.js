export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  env: {
    oidcClientId:
      process.env.NODE_ENV !== "production" ? "MEDICAL.UI" : "MEDICAL.UI-prod",
    // SERVER_URL: "https://dseu.agency.local/",
    SERVER_URL: "https://192.168.101.173:1234",
    // SERVER_URL: "https://192.168.102.247",
  },
  server: {
    host: "192.168.101.189",
    port: 3000, // default: 3000
  },

  head: {
    title: "MEDICAL",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "devextreme/dist/css/dx.common.css", lang: "css" },
    { src: "devextreme/dist/css/dx.custom-theme.css", lang: "css" },
    { src: "vue-awesome-notifications/dist/styles/style.scss", lang: "css" },
    { src: "~/assets/themes/index.scss", lang: "scss" },
  ],

  styleResources: {
    scss: [
      "~/assets/themes/dx.variables.scss",
      "~/assets/themes/variables.scss",
      "~/assets/themes/custom-variables.scss",
      "~/assets/themes/index.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/data-api",
    "~/plugins/nuxt-client-init",
    "~/plugins/customStore",
    "~/plugins/awesome-notifications",
    "~/plugins/signalR",
  ],

  router: {
    //   middleware: ["authorization", "authorization-callback"],
    // middleware: "homePage",
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "Turkmen",
            code: "tk",
            iso: "tk-TM",
            file: "tk-TM.ts",
          },
          {
            name: "Русский",
            code: "ru",
            iso: "ru-RU",
            file: "ru-RU.ts",
          },
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "locale",
          alwaysRedirect: true,
          fallbackLocale: "tk-TM",
        },
        strategy: "no_prefix",
        lazy: true,
        langDir: "lang/",
        defaultLocale: "tk-TM",
        vuex: {
          moduleName: "i18n",
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      if (isClient) {
        // Добавьте правило для обработки аудиофайлов
        config.module.rules.push({
          test: /\.(mp3)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        });
      }
    },
  },
};
