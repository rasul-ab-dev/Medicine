<template>
  <div>
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="entry-id">MK000000</button>
        <button @click="backHandler" class="back-btn panel-btn">Назад</button>
      </div>
      <button class="print-btn panel-btn" />
    </div>
    <div class="component-wrapper">
      <DxForm
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <!-- TODO  ИСПРАВИТЬ ШИРИНУ ФОРМЫ RESULT -->

        <!-- <DxSimpleItem template="result-form" /> -->
        <!-- <template #result-form> -->
        <!-- <div> -->
        <DxGroupItem :col-count="6">
          <DxSimpleItem :col-span="5" data-field="cabinetName">
            <DxRequiredRule />
            <DxLabel text="Результат" />
          </DxSimpleItem>

          <DxSimpleItem template="show-result-btn" />
        </DxGroupItem>
        <!-- </div> -->
        <!-- </template> -->

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="cabinetName" editor-type="dxSelectBox">
            <DxRequiredRule />
            <DxLabel text="Диагноз" />
          </DxSimpleItem>

          <DxSimpleItem template="add-diagnosis-btn" />
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          editor-type="dxTextArea"
          :editor-options="{ height: 84 }"
        >
          <DxLabel text="Лечение" />
        </DxSimpleItem>

        <DxSimpleItem template="add-note-btn" />

        <template #add-note-btn>
          <button class="add-btn">Добавить</button>
        </template>

        <template #show-result-btn>
          <button @click="showResult" class="show-result-btn">
            Просмотреть
          </button>
        </template>

        <template #add-diagnosis-btn>
          <button class="add-diagnosis" @click="addDiagnosis">
            Нет в списке?
          </button>
        </template>
      </DxForm>

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
    </div>
    <Popup
      ref="diagnosisPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="diagnosis-popup-wrapper">
        <div class="diagnosis-item">
          <span>Название</span>
          <input class="input" type="text" />
        </div>
        <div class="diagnosis-btn-wrapper">
          <button>Сохранить</button>
          <button @click="closeDiagnosisPopup">Отмена</button>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { DxSelectBox } from "devextreme-vue/select-box";
import DxTextArea from "devextreme-vue/text-area";
import DxForm, {
  DxSimpleItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import Popup from "~/components/page/popup.vue";
export default Vue.extend({
  components: {
    Popup,
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxSelectBox,
    DxTextArea,
    DxEmptyItem,
    DxGroupItem,
  },
  data() {
    return {};
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showResult(e: string) {
      this.$router.push(`/patients/entries/result/form`);
    },
    addDiagnosis() {
      return (this as any).$refs["diagnosisPopup"].open();
    },
    closeDiagnosisPopup() {
      return (this as any).$refs["diagnosisPopup"].close();
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

.entry-id {
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

.add-diagnosis {
  padding: 0.9rem 2rem;
  margin-top: 18px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  white-space: nowrap;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
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

.show-result-btn {
  padding: 15px 32px;
  margin-top: 18px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}
</style>
