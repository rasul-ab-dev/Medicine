<template>
  <ToleranceGroupsCard :currentToleranceGroups="currentToleranceGroups" />
</template>
  <script lang="ts">
import Vue from "vue";
import ToleranceGroupsCard from "~/components/tolerance-groups/tolerance-groups-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    ToleranceGroupsCard,
  },
  data() {
    return {
      currentToleranceGroups: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.roles}/${+params.id}`);
    return {
      currentToleranceGroups: data,
    };
  },
});
</script>