<template>
  <div>
    <Blank8 :currentBlank="currentBlank" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Blank8 from "~/components/forms/blank/blank8.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank8,
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