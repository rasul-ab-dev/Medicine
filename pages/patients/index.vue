<template>
    <div>
        <PatientDataGrid/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientDataGrid from "~/components/patients/patient-data-grid.vue"
export default Vue.extend({
    components: {
        PatientDataGrid
    }
})
</script>