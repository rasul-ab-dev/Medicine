<template>
    <PatientEntryDataGrid/>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientEntryDataGrid from "~/components/patients/entries/patient-entry-data-grid.vue"
export default Vue.extend({
    components: {
        PatientEntryDataGrid
    }
})
</script>
<style lang-"scss" scoped>

</style>