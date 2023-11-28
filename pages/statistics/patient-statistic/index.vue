<template>
    <PatientStatisticDataGrid/>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientStatisticDataGrid from "~/components/statistics/patient-statistic/patient-statistic-data-grid.vue"
export default Vue.extend({
    components: {
        PatientStatisticDataGrid
    }
})
</script>