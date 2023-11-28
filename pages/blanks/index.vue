<template>
    <BlankDataGrid />
  </template>
    <script lang="ts">
  import Vue from "vue";
  import BlankDataGrid from "~/components/blanks/blanks-data-grid.vue";
  export default Vue.extend({
    components: {
      BlankDataGrid,
    },
  });
  </script>