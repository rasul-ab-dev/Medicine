<template>
  <ExaminationCard :currentExamination="currentExamination" />
</template>
<script lang="ts">
import Vue from "vue";
import ExaminationCard from "~/components/examination/examination-card.vue";
import { dataApi } from "~/static/dataApi.js";
export default Vue.extend({
  components: {
    ExaminationCard,
  },
  data() {
    return {
      currentExamination: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.observations}/${+params.id}`);
    return {
      currentExamination: data,
    };
  },
});
</script>
