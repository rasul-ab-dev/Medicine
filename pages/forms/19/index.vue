<template>
  <Blank19 :currentBlank="currentBlank" />
</template>
    <script lang="ts">
import Vue from "vue";
import Blank19 from "~/components/forms/blank/blank19.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank19,
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