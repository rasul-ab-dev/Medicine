<template>
  <div>
    <CabinetCreate @successedSaved="successedSaved" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import CabinetCreate from "~/components/cabinets/cabinet-create.vue";
export default Vue.extend({
  components: {
    CabinetCreate,
  },
  methods: {
    successedSaved(data) {
      this.$router.go(-1);
    },
  },
});
</script>
