<template>
    <div>
<EntriesDataGrid/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import EntriesDataGrid from "~/components/entries/entries-data-grid.vue"
export default Vue.extend({
    components: {
        EntriesDataGrid
    }
})
</script>