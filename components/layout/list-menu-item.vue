<template>
  <div class="list-menu-item-wrapper">
    <img
      v-if="data.icon"
      :src="`/icons/navigation/${data.icon}`"
      alt="data.title"
    />
    <h4 class="navigation" :title="$t(data.title)">{{ $t(data.title) }}</h4>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style lang="scss">
.list-menu-item-wrapper {
  display: flex;
  align-items: center;
  img {
    width: 20px;
    margin: 0 10px 0 0;
  }
}
</style>