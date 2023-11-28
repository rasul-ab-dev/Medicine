<template>
    <PatientComplaint/>
</template>
<script lang="ts">
import Vue from 'vue'
import PatientComplaint from "~/components/patients/complaint/complaint.vue"
export default Vue.extend({
    components: {
        PatientComplaint
    }
})
</script>