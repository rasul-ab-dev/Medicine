<template>
    <Blank11 :currentBlank="currentBlank" />
  </template>
      <script lang="ts">
  import Vue from "vue";
  import Blank11 from "~/components/forms/blank/blank11.vue";
  import { dataApi } from "~/static/dataApi";
  export default Vue.extend({
    components: {
        Blank11,
    },
    data() {
      return {
        currentBlank: null,
      };
    },
    async asyncData({ $axios, query }) {
      if (query.id !== null) {
        const { data } = await $axios.get(
          `${dataApi.applicationObservations}/${+query.id}`
        );
        return {
          currentBlank: data,
        };
      }
      return this.currentBlank;
    },
  });
  </script>
  