<template>
  <ToleranceGroupsCreate />
</template>
<script lang="ts">
import Vue from "vue";
import ToleranceGroupsCreate from "~/components/tolerance-groups/tolerance-groups-create.vue";
export default Vue.extend({
  components: {
    ToleranceGroupsCreate,
  },
});
</script>