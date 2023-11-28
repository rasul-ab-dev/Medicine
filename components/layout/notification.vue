<template>
  <div>
    <nuxt-link to="/review">
      <div class="notification-bell-wrapper">
        <img
          class="notification-bell-icon"
          src="~/static/icons/notification/notificationIcon.svg"
          alt="notificationIcon"
        />
        <span v-if="applicationObservationsCount" class="notifications-of-number">{{ applicationObservationsCount }}</span>
      </div>
    </nuxt-link>
  </div>
</template>
  <script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data() {
        return {
            applicationObservationsCount: null
        }
    },
    async mounted() {
        const { data } = await this.$axios.get(
        `${this.$dataApi.applicationObservations}/user`
      );
      this.applicationObservationsCount = data.data.length;
    },
});
</script>
<style lang="scss" scoped>
.notification-bell-wrapper {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 50px;
  height: 50px;

  .notifications-of-number {
    position: absolute;
    z-index: 10;
    top: -10px;
    left: 16px;
    height: 25px;
    min-width: 26px;
    color: white;
    background-color: red;
    border: 1.5px solid #fff;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>