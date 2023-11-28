<template>
  <LoginPage />
</template>
<script lang="ts">
import Vue from "vue";
import LoginPage from "~/layouts/loginPage.vue";
export default Vue.extend({
  layout: "loginPage",
  components: {
    LoginPage,
  },
});
</script>