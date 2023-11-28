<template>
  <BulletinDataGrid />
</template>
<script lang="ts">
import Vue from "vue";
import BulletinDataGrid from "~/components/bulletin/bulletin-data-grid.vue";
export default Vue.extend({
  components: {
    BulletinDataGrid,
  },
  data() {
    return {
      bulletinData: null,
    };
  },
  //   created() {
  //     this.$axios.get(this.$dataApi.bulletins).then((result) => {
  //       return (this.bulletinData = result.data.data);
  //     });
  //   },
});
</script>