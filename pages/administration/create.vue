<template>
    <AdministrationCreate />
  </template>
  <script lang="ts">
  import Vue from "vue";
  import AdministrationCreate from "~/components/administration/administration-create.vue";
  export default Vue.extend({
    components: {
        AdministrationCreate,
    },
  });
  </script>