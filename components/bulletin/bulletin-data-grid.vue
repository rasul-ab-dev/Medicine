<template>
  <div>
    <div class="component-wrapper">
      <div
        v-for="(bulletin, idx) in bulletinData"
        :key="idx"
        class="bulletin-content-wrapper"
        ref="bulletinId"
      >
        <div class="bulletin-text-wrapper">
          <div class="bulletin-text">
            <p>{{ bulletin.publicationDate }}</p>
            <p class="bulletin-title">
              {{ bulletin.nameTm }}
            </p>
            <p class="bulletin-subtitle" v-html="bulletin.descriptionTm"></p>
          </div>

          <div class="bulletin-text">
            <p class="bulletin-title">
              {{ bulletin.nameRu }}
            </p>
            <p class="bulletin-subtitle" v-html="bulletin.descriptionRu"></p>
          </div>
          <div>
            <button @click="showBulletin(bulletin.id)" class="read-btn">
              {{ $t("bulletinPage.read") }}
            </button>
          </div>
        </div>
        <img
          class="bulletin-image"
          :src="`${imageUrl}/${bulletin.image}`"
          alt="bulletin image"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  middleware: ["homePage"],
  data() {
    return {
      bulletinData: null,
      imageUrl: `${this.$axios.defaults.baseURL}`,
    };
  },
  methods: {
    showBulletin(e) {
      this.$router.push(`bulletin/${e}`);
    },
  },
  mounted() {
    this.$axios.get(this.$dataApi.bulletins).then((result) => {
      return (this.bulletinData = result.data.data);
    });
  },
});
</script>
<style lang="scss" scoped>
.bulletin-content-wrapper {
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  width: 100%;

  .bulletin-text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 14px;
  }
}

.bulletin-text {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.bulletin-title {
  font-weight: $bold-weight;
}

.read-btn {
  font-family: $fontFamily;
  font-weight: $bold-weight;
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  cursor: pointer;
  margin-top: 6px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.bulletin-image {
  min-width: 500px;
  height: 200px;
}

@media all and (min-width: 1151px) {
  .bulletin-content-wrapper {
    align-items: center;
  }
}

@media all and (max-width: 1150px) {
  .bulletin-content-wrapper {
    flex-direction: column-reverse;
    row-gap: 40px;
  }

  .bulletin-image {
    min-width: 250px;
    height: 250px;
  }
}
</style>
