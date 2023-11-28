<template>
  <Blank20 :currentBlank="currentBlank" />
</template>
      <script lang="ts">
import Vue from "vue";
import Blank20 from "~/components/forms/blank/blank20.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank20,
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