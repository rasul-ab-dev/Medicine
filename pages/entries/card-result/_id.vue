<template>
  <EntriesCardResult :entryResult="entryResult" />
</template>
<script lang="ts">
import Vue from "vue";
import EntriesCardResult from "~/components/entries/card-result/entry-result.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    EntriesCardResult,
  },
  data() {
    return {
      entryResult: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(
      `${dataApi.applicationObservations}/${+params.id}`
    );
    return {
      entryResult: data,
    };
  },
});
</script>