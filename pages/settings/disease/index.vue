<template>
    <Disease />
</template>
<script lang="ts">
import Vue from "vue";
import Disease from "~/components/settings/disease.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    Disease,
  },
});
</script>
<style lang="scss" scoped></style>
