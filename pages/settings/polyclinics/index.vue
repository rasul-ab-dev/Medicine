<template>
  <div class="media-wrapper">
    <Polyclinics />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Polyclinics from "~/components/settings/polyclinics.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    Polyclinics,
  },
});
</script>
