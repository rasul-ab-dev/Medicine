<template>
  <PatientEntryCard :currentPatientEntry="currentPatientEntry" />
</template>
<script lang="ts">
import Vue from "vue";
import PatientEntryCard from "~/components/patients/entries/patient-entry-card.vue";
export default Vue.extend({
  components: {
    PatientEntryCard,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    currentPatientEntry(): string {
      return this.$store.getters["fakeDataApi/itemsByID"](this.id);
    },
  },
});
</script>
