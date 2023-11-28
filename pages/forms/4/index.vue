<template>
  <div>
    <Blank4 :currentBlank="currentBlank" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Blank4 from "~/components/forms/blank/blank4.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    Blank4,
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