<template>
  <div>
    <CabinetCard :currentCabinet="currentCabinet" />
    <!-- <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>Вы хотите отменить внесенные изменения?</span>
        <div class="confirm-btn">
          <button @click="confirmEditor">Да</button>
          <button @click="closePopup">Нет</button>
        </div>
      </div>
    </Popup> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Popup from "~/components/page/popup.vue";
import CabinetCard from "~/components/cabinets/cabinet-card.vue";
import { dataApi } from "~/static/dataApi";
export default Vue.extend({
  components: {
    CabinetCard,
    Popup,
  },
  data() {
    return {
      currentCabinet: null,
      functionResolve: null,
    };
  },
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`${dataApi.cabinets}/${+params.id}`);
    return {
      currentCabinet: data,
    };
  },

  methods: {
    dialogResponse(response) {
      this.functionResolve(response);
    },
  },
});
</script>
