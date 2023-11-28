<template>
  <div>
    <AdminBulletinCard :currentBulletin="currentBulletin" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import AdminBulletinCard from "~/components/admin-bulletin/admin-bulletin-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    AdminBulletinCard,
  },
  data() {
    return {
      currentBulletin: null,
      // id: this.$route.params.id,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.bulletins}/${+params.id}`);
    return {
      currentBulletin: data,
    };
  },
  // mounted() {
  //   this.currentBulletin.image = null;
  // },
});
</script>
