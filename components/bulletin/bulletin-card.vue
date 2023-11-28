<template>
  <div class="bulletin-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.save") }}
        </button>
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
      </div>
      <div class="info-btn-wrapper">
        <button class="print-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <p class="date">{{ bulletin.publicationDate }}</p>
      <img
        class="bulletin-image"
        :src="`${imageUrl}/${bulletin.image}`"
        alt=""
      />
      <p class="bulletin-title">
        {{ bulletin.nameTm }}
      </p>
      <p class="bulletin-text-content" v-html="bulletin.descriptionTm"></p>
      <label>
        <input class="checkbox-input" @change="checked" type="checkbox" />
        <span>{{ $t("bulletinPage.isRead") }}</span>
      </label>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { IBulletin } from "~/infrastructure/interfaces/IBulletin";
export default Vue.extend({
  props: {
    currentBulletin: {
      type: Object,
      required: true,
    },
  },
  data() {
    let bulletin: IBulletin = this.currentBulletin;
    let currentUser = localStorage.getItem("userId");
    return {
      bulletin,
      currentUser,
      imageUrl: `${this.$axios.defaults.baseURL}`,
      readInfo: {
        bulletinId: bulletin.id,
        currentUser,
      },
    };
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    checked(e) {
      if (e.target.checked) {
        this.$axios.post(`${this.$dataApi.bulletinReaderInfos}`, this.readInfo);
      } else {
        this.$axios.delete(
          `${this.$dataApi.cabinets}/bulletin/${this.bulletin.id}`
        );
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.bulletin-card-wrapper {
  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .panel-btn {
    font-family: $fontFamily;

    &:hover {
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
    cursor: pointer;
  }
}
</style>
