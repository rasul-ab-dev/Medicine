<template>
  <div>
    <EntryResultForm />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import EntryResultForm from "~/components/entries/card-result/result-form/result-form.vue";
export default Vue.extend({
  components: {
    EntryResultForm,
  },
});
</script>
