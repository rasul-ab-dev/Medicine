<template>
  <div>
    <PatientCreate />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PatientCreate from "~/components/patients/patient-create.vue";
export default Vue.extend({
  components: {
    PatientCreate,
  },
});
</script>
