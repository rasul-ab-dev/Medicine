<template>
    <div>
        <ExaminationDataGrid/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ExaminationDataGrid from "~/components/examination/examination-data-grid.vue"
export default Vue.extend({
    components: {
        ExaminationDataGrid
    }
})
</script>