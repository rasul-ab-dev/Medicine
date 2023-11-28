<template>
    <div>
        <EmployeeDataGrid/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import EmployeeDataGrid from "~/components/employees/employee-data-grid.vue"
export default Vue.extend({
    components: {
        EmployeeDataGrid
    }
})
</script>