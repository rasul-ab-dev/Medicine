<template>
  <Blank13 :currentBlank="currentBlank" />
</template>
      <script lang="ts">
import Vue from "vue";
import Blank13 from "~/components/forms/blank/blank13.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank13,
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
  