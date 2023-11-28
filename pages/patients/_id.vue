<template>
  <PatientCard :currentPatient="currentPatient" />
</template>
<script lang="ts">
import Vue from "vue";
import PatientCard from "~/components/patients/patient-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    PatientCard,
  },
  data() {
    return {
      currentPatient: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.applicants}/${+params.id}`);
    return {
      currentPatient: data,
    };
  },
});
</script>
