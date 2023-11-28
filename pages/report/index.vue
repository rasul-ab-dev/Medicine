<template>
  <RepostDataGrid />
</template>
  <script lang="ts">
import Vue from "vue";
import RepostDataGrid from "~/components/report/report-data-grid.vue";
export default Vue.extend({
  components: {
    RepostDataGrid,
  },
});
</script>