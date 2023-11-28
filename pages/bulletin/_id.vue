<template>
  <BulletinCard :currentBulletin="currentBulletin" />
</template>
<script lang="ts">
import Vue from "vue";
import BulletinCard from "~/components/bulletin/bulletin-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    BulletinCard,
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
