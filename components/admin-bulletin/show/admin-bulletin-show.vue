<template>
  <div class="admin-bulletin-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="new-bulletin">
          {{ $t("bulletinPage.bulletinShow") }}
        </button>
        <button class="save-btn">{{ $t("bulletinPage.tkmLang") }}</button>
        <button class="cancel-btn">{{ $t("bulletinPage.rusLang") }}</button>
      </div>
      <div class="info-btn-wrapper">
        <button @click="backHandler" class="layout-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <!-- <p class="date">22.01.2023</p> -->
      <p class="date">{{ currentBulletin.publicationDate }}</p>
      <img
        class="bulletin-image"
        :src="`${imageUrl}/${currentBulletin.image}`"
        alt=""
      />
      <p class="bulletin-title">
        {{ currentBulletin.nameTm }}
      </p>
      <p
        class="bulletin-text-content"
        v-html="currentBulletin.descriptionTm"
      ></p>
      <label>
        <input class="checkbox-input" type="checkbox" />
        <span> {{ $t("bulletinPage.isRead") }}</span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    currentBulletin: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageUrl: `${this.$axios.defaults.baseURL}`,
    };
  },
  methods: {
    backHandler(e: any) {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.admin-bulletin-card-wrapper {
  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .new-bulletin {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }

  .component-wrapper {
    row-gap: 30px;
  }

  .panel-btn:hover {
    background-color: $light-blue;
    color: $custom-main-color;
    transition: 0.3s ease-in-out;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  .bulletin-title {
    font-weight: $bold-weight;
  }

  .bulletin-image {
    max-width: 60%;
    user-select: none;
  }

  label {
    display: flex;
    column-gap: 12px;
    margin-top: 5px;
  }
}
</style>
