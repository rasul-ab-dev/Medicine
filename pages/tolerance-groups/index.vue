<template>
    <div>
<ToleranceGroupsDataGrid/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ToleranceGroupsDataGrid from "~/components/tolerance-groups/tolerance-groups-data-grid.vue"
export default Vue.extend({
    components: {
       ToleranceGroupsDataGrid 
    }
})
</script>