<template>
  <Blank15 :currentBlank="currentBlank" />
</template>
<script lang="ts">
import Vue from "vue";
import Blank15 from "~/components/forms/blank/blank15.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank15,
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