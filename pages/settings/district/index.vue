<template>
  <District />
</template>
<script lang="ts">
import Vue from "vue";
import District from "../../../components/settings/district.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    District,
  },
});
</script>
<style lang="scss" scoped></style>
