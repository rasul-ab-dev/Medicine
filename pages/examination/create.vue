<template>
  <div>
    <ExaminationCreate />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import ExaminationCreate from "~/components/examination/examination-create.vue";
export default Vue.extend({
  components: {
    ExaminationCreate,
  },
});
</script>
