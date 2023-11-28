<template>
  <AdministrationDataGrid />
</template>
<script lang="ts">
import Vue from "vue";
import AdministrationDataGrid from "~/components/administration/administration-data-grid.vue";
export default Vue.extend({
  components: {
    AdministrationDataGrid,
  },
});
</script>