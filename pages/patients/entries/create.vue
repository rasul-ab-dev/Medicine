<template>
    <PatientEntryCreate/>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientEntryCreate from "~/components/patients/entries/patient-entry-create.vue"
export default Vue.extend({
    components: {
        PatientEntryCreate
    }
})
</script>