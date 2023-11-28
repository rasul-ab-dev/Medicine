<template>
  <div>
    <Blank6 :currentBlank="currentBlank" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Blank6 from "~/components/forms/blank/blank6.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank6,
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