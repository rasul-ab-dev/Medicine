<template>
    <PatientsGroup />
</template>
<script lang="ts">
import Vue from "vue";
import PatientsGroup from "~/components/settings/patients-group.vue";
export default Vue.extend({
  layout: "settingsMenu",
  components: {
    PatientsGroup,
  },
});
</script>
<style lang="scss" scoped></style>
