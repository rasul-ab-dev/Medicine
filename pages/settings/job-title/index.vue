<template>
    <JobTitle />
</template>
<script lang="ts">
import Vue from "vue";
import JobTitle from "~/components/settings/job-title.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    JobTitle,
  },
});
</script>
<style lang="scss" scoped></style>
