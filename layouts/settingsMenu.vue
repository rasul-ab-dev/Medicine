<template>
  <div class="setting-wrapper">
    <DxDrawer
      id="menu-drawer"
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
            </div>
          </div>
        </DxScrollView>
      </template>
    </DxDrawer>
    <div class="second-menu">
      <nuxt-link
        class="setting-menu-items"
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        no-prefetch
      >
        <img
          v-if="item.icon"
          :src="`/icons/navigation/${item.icon}`"
          alt="data.title"
        />
        <p>{{ $t(item.title) }}</p>
      </nuxt-link>
    </div>
    <div class="second-content">
      <transition name="route">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxDrawer from "devextreme-vue/drawer";
import ListMenu from "~/components/layout/list-menu.vue";
import BottomNavigation from "~/components/layout/bottom-navigation.vue";
import UserPanel from "~/components/layout/user-panel.vue";
import { DxScrollView } from "devextreme-vue/scroll-view";
import { loadMessages, locale } from "devextreme/localization";
import tkMessages from "../lang/devExtreme-localization/tk.json";
import ruMessages from "~/lang/devExtreme-localization/ru.json";
export default Vue.extend({
  middleware: ["homePage"],

  components: {
    DxDrawer,
    ListMenu,
    UserPanel,
    BottomNavigation,
    DxScrollView,
  },
  data(): any {
    return {
      menuItems: [],
    };
  },
  methods: {
    setLocale() {
      loadMessages(tkMessages);
      loadMessages(ruMessages);
      locale(this.$i18n.locale);
    },
  },
  created() {
    this.setLocale();
  },
  mounted(): any {
    return (this.menuItems = this.$store.getters["settingsMenu/items"]);
  },
});
</script>
<style lang="scss" scoped>
.second-menu {
  display: flex;
  flex-direction: column;
  flex: 1 0 230px;
  row-gap: 16px;
  background-color: $custom-main-color;
  margin: 0 0 0 10px;
  padding: 20px;
  height: 100vh;
  overflow-y: hidden;
}

.setting-menu-items {
  display: flex;
  align-items: center;

  img {
    width: 20px;
    margin: 0 10px 0 0;
  }
}

p {
  color: #333333;
  font-size: 14px;

  &:hover {
    color: $light-blue;
  }
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.6s;
}
.route-enter,
.route-leave-to {
  opacity: 0;
}

.setting-wrapper {
  display: flex;
  background-color: $custom-bg-color;
  height: 100vh;
}
#menu-drawer {
  flex-grow: 1;
  background-color: $custom-main-color;
  // overflow-y: hidden;

  .second-content {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: scroll;
  }
}

.bottom-nav-wrapper {
  margin-top: auto;
}

.navigation-items-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
