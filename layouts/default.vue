<template>
  <div class="dx-viewport" id="root">
    <DxDrawer
      id="navigation-menu-drawer"
      opened-state-mode="shrink"
      position="left"
      reveal-mode="slide"
      template="navigation-list"
      :hoverStateEnabled="true"
      :shading="false"
      :opened="true"
    >
      <template #navigation-list>
        <DxScrollView width="100%" height="100vh" :use-native="true">
          <div class="navigation-items-wrapper">
            <div class="user-panel-wrapper">
              <UserPanel />
            </div>
            <ListMenu />
            <div class="bottom-nav-wrapper">
              <BottomNavigation />
              <NotificationIcon v-if="isShowNotification"/>
            </div>
          </div>
        </DxScrollView>
      </template>
      <div id="main-content">
        <transition name="route">
          <Nuxt />
        </transition>
      </div>
    </DxDrawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DxDrawer from "devextreme-vue/drawer";
import ListMenu from "~/components/layout/list-menu.vue";
import UserPanel from "~/components/layout/user-panel.vue";
import BottomNavigation from "~/components/layout/bottom-navigation.vue";
import { DxScrollView } from "devextreme-vue/scroll-view";
import { loadMessages, locale } from "devextreme/localization";
import tkMessages from "../lang/devExtreme-localization/tk.json";
import ruMessages from "~/lang/devExtreme-localization/ru.json";
import NotificationIcon from '~/components/layout/notification.vue'

export default Vue.extend({
  middleware: ["homePage"],

  components: {
    DxDrawer,
    ListMenu,
    UserPanel,
    BottomNavigation,
    DxScrollView,
    NotificationIcon
  },
  computed: {
    isShowNotification() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        !parseGetToken?.admin

      return permission;
    },
  },
  methods: {
    setLocale() {
      loadMessages(tkMessages);
      loadMessages(ruMessages);
      locale(this.$i18n.locale);
      // Intl.DateTimeFormat(this.$i18.locale);
    },
  },
  created() {
    this.setLocale();
    this.$axios.get(this.$dataApi.bulletins).then((result) => {});
  },
});
</script>

<style lang="scss">
#root {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.dx-state-invisible {
  display: none;
}

.navigation-items-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#navigation-menu-drawer {
  flex-grow: 1;

  #main-content {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: $custom-bg-color;
    .route-enter-active,
    .route-leave-active {
      transition: opacity 0.6s;
    }
    .route-enter,
    .route-leave-to {
      opacity: 0;
    }
  }
  .navigation-wrapper {
    display: flex;
    flex-direction: column;
    // max-height: 100%;
    overflow-y: auto;
  }

  .space-block {
    height: 100%;
  }
}

.bottom-nav-wrapper {
  display: flex;
  align-items: flex-end;

  // margin-top: auto;
}
</style>
