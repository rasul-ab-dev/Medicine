<template>
  <Cities />
</template>
<script lang="ts">
import Vue from "vue";
import Cities from "../../../components/settings/cities.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    Cities,
  },
});
</script>
<style lang="scss" scoped></style>
