<template>
  <div class="bottom-navigation">
    <div class="info-page-wrapper">
      <!-- <div class="icon-item">
        <i class="dx-icon-info"></i>
        <span> {{ $t("setting.information") }} </span>
      </div> -->
      <DxSelectBox
        styling-mode
        v-model="activeLang"
        :items="languages"
        :grouped="true"
        display-expr="name"
        value-expr="value"
        :width="150"
      >
      </DxSelectBox>
    </div>
    <div @click="logout" class="icon-item">
      <i class="dx-icon-runner"></i>
      <span>{{ $t("navigation.exit") }} </span>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxSelectBox from "devextreme-vue/select-box";
import { locale } from "devextreme/localization";
export default Vue.extend({
  components: {
    DxSelectBox,
  },
  data() {
    return {
      activeLang: this.$i18n.locale,
      languages: [
        {
          items: [
            { name: "Русский", value: "ru" },
            { name: "Turkmen", value: "tk" },
          ],
        },
      ],
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  watch: {
    activeLang: function changeLang(val) {
      this.$i18n.setLocaleCookie(val);
      window.location.href = this.switchLocalePath(val);

      locale(this.$i18n.locale);
      Intl.DateTimeFormat(this.$i18n.locale);
    },
  },
});
</script>
<style lang="scss" scoped>
.bottom-navigation {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 20px 12px 20px 30px;
}

.info-page-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.icon-item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;

  i {
    font-size: 20px;
  }
}
</style>
