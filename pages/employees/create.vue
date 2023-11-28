<template>
    <div>
        <EmployeeCreate/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import EmployeeCreate from "~/components/employees/employee-create.vue"
export default Vue.extend({
    components: {
        EmployeeCreate
    }
})
</script>