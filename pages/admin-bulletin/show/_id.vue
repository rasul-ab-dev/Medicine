<template>
  <AdminBulletinShow :currentBulletin="currentBulletin" />
</template>
<script lang="ts">
import Vue from "vue";
import AdminBulletinShow from "~/components/admin-bulletin/show/admin-bulletin-show.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    AdminBulletinShow,
  },
  data() {
    return {
      currentBulletin: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.bulletins}/${+params.id}`);

    return {
      currentBulletin: data,
    };
  },
});
</script>