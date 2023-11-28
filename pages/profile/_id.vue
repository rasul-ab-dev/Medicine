<template>
  <div>
    <Profile :currentUser="currentUser" />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Profile from "~/components/profile/profile.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  data() {
    return {
      currentUser: null,
    };
  },
  components: {
    Profile,
  },
  async asyncData({ $axios, params }) {
    let currentUserId = localStorage.getItem("userId");
    const { data } = await $axios.get(`${dataApi.users}/${currentUserId}`);
    return {
      currentUser: data,
    };
  },
});
</script>