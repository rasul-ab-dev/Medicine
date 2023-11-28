<template>
  <EntriesCard :currentEntry="currentEntry" />
</template>
<script lang="ts">
import Vue from "vue";
import EntriesCard from "~/components/entries/entries-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    EntriesCard,
  },
  data() {
    return {
      currentEntry: null,
      entryResult: null
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.applications}/${+params.id}`);
    // const result = await $axios.get(
    //   `${dataApi.applicationObservations}/${+params.id}`
    // );
    // console.log('result', result);
    
    return {
      currentEntry: data,
      // entryResult:
    };
  },
});
</script>
