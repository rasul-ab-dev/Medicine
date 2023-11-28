<template>
  <EmployeeCard :currentEmployee="currentEmployee" />
</template>

<script lang="ts">
import Vue from "vue";
import EmployeeCard from "~/components/employees/employee-card.vue";
import { dataApi } from "~/static/dataApi.js";
export default Vue.extend({
  components: {
    EmployeeCard,
  },
  data() {
    return {
      currentEmployee: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.users}/${+params.id}`);
    return {
      currentEmployee: data,
    };
  },
});
</script>
