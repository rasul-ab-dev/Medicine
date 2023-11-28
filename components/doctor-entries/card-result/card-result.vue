<template>
  <div>
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="entry-id">MK000000</button>
        <button @click="backHandler" class="back-btn">Назад</button>
      </div>
      <button class="print-btn" />
    </div>
    <div class="component-wrapper">
        <div class="result-inout-wrapper">
          <span>Результат</span>
          <div>
            <input class="input" type="text">
            <button @click="showResult" class="show-result-btn">Просмотреть</button>
          </div>
           <div>
            <input class="input" type="text">
            <button @click="showResult" class="show-result-btn">Просмотреть</button>
          </div> <div>
            <input class="input" type="text">
            <button @click="showResult" class="show-result-btn">Просмотреть</button>
          </div>
        </div>
      <div class="result-textarea-wrapper">
        <span>Диагноз</span>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>
          <button class="add-btn">Добавить</button>
        </div>
      </div>
      <div class="result-text-wrapper">
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

      <div class="result-text-wrapper">
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
export default Vue.extend({
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showResult() {
      this.$router.push(`/doctor-entries/card-result/result-form`)
    }
  },
});
</script>
<style lang="scss" scoped>
.panel-items {
  display: flex;
  justify-content: space-between;
   flex-wrap: wrap;
  margin-bottom: 10px;
}
.btn-wrapper {
  display: flex;
  column-gap: 10px;
}
.entry-id {
  padding: 12px 200px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
}
.result-textarea-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
  textarea {
    width: 100%;
    height:120px ;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 10px 14px;
    resize: none;
  }
.add-btn {
  padding: 12px 42px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  font-weight: $bold-weight;
  margin-top: 10px;
}
.result-text-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  div {
    display: flex;
    column-gap: 32px;
  }
}
.result-inout-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  div {
    display: flex;
    column-gap: 20px;
    width: 100%;
  }
  .show-result-btn {
  padding: 8px 32px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  cursor: pointer;
}
}

</style>
