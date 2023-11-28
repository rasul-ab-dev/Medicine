<template>
  <div class="media-wrapper">
    <MediaFiles />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MediaFiles from "~/components/settings/media-files.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    MediaFiles,
  },
});
</script>

