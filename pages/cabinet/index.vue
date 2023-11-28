<template>
    <div>
       <CabinetDataGrid/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CabinetDataGrid from "~/components/cabinets/cabinet-data-grid.vue"
export default Vue.extend({
    components: {
        CabinetDataGrid
    }
})
</script>