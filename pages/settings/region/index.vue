<template>
    <Information />
</template>
<script lang="ts">
import Vue from "vue";
import Information from "~/components/settings/region.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    Information,
  },
});
</script>
