<template>
  <div>
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="complaint-id">MK000000</button>
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("patientPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <div class="complaint-textarea-wrapper">
        <div>
          <span>{{ $t("patientPage.complaint") }}</span>
          <DxTextArea :height="120" />
        </div>
        <div>
          <button class="add-btn">{{ $t("patientPage.add") }}</button>
        </div>
      </div>
      <div class="complaint-text-wrapper">
        <div>
          <span>01 Декабрь 2022</span>
          <span>Доктор: Фамилия Имя Отчество</span>
          <span>Кабинет: Название кабинета</span>
        </div>
        <p>
          Симптомы: боли в груди, затрудненное дыхание, повышенная утомляемость,
          кашель, повышенная температура тела.
        </p>
      </div>

      <div class="complaint-text-wrapper">
        <div>
          <span>01 Декабрь 2022</span>
          <span>Доктор: Фамилия Имя Отчество</span>
          <span>Кабинет: Название кабинета</span>
        </div>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
      <div class="complaint-text-wrapper">
        <div>
          <span>01 Декабрь 2022</span>
          <span>Доктор: Фамилия Имя Отчество</span>
          <span>Кабинет: Название кабинета</span>
        </div>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxTextArea from "devextreme-vue/text-area";
export default Vue.extend({
  components: {
    DxTextArea,
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.complaint-id {
  padding: 12px 200px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
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

.complaint-textarea-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.add-btn {
  padding: 12px 42px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  font-weight: $bold-weight;
  margin-top: 10px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.complaint-text-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  div {
    display: flex;
    column-gap: 32px;
  }
}
</style>
