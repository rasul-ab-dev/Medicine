<template>
  <div class="entries-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="entries-id">000000000000000</div>
        <button @click="backHandler" class="back-btn panel-btn">Назад</button>
      </div>
      <div>
        <div class="print-wrapper">
          <button @click="openPaymentPopup" class="paid-btn panel-btn">
            Оплатить
          </button>
          <button class="print-btn panel-btn" />
        </div>
      </div>
    </div>
    <div class="component-wrapper">
      <!-- TODO  УБРАТЬ LABEL -->

      <DxForm
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem
          data-field="cabinetName"
          css-class="examination-name"
          :editor-options="textBoxOptions"
        >
          <DxRequiredRule />
          <DxLabel text="Имя пациента" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxSimpleItem template="data-grid" />
        <template #data-grid>
          <DxDataGrid
            :show-borders="false"
            :hoverStateEnabled="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            @row-dbl-click="showResult"
            height="240px"
          >
            <DxColumn data-field="id" :width="40" />
            <DxColumn data-field="cabinetName" alignment="center" />
            <DxColumn data-field="employeeName" alignment="center" />
            <DxColumn data-field="date" alignment="center" />
            <DxColumn data-field="time" alignment="center" />
            <DxColumn data-field="result" alignment="center" />
          </DxDataGrid>
        </template>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="2" css-class="diagnosis-form">
          <DxSimpleItem
            data-field="cabinetName"
            editor-type="dxSelectBox"
            :editor-options="diagnosisOptions"
          >
            <DxRequiredRule />
            <DxLabel text="Диагноз" />
          </DxSimpleItem>

          <DxSimpleItem template="add-diagnosis-btn" />
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxRequiredRule />
          <DxLabel text="Лечение" />
        </DxSimpleItem>

        <DxSimpleItem template="add-note" />

        <DxEmptyItem />

        <DxSimpleItem template="note-text" />

        <template #note-text>
          <div class="note-text-wrapper">
            <div class="note-header">
              <p>01 Декабрь 2022</p>
              <p>Доктор: Фамилия Имя Отчество</p>
              <p>Кабинет: Название кабинета</p>
            </div>
            <div class="note-content">
              <span>Диагноз</span>
              <p>
                Симптомы: боли в груди, затрудненное дыхание, повышенная
                утомляемость, кашель, повышенная температура тела.
              </p>
            </div>
          </div>
        </template>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxSimpleItem template="additional-payment-title" />

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          css-class="examination-name"
          :editor-options="textBoxOptions"
        >
          <DxLabel text="Название" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          css-class="additional-payment"
          :editor-options="numberBoxOptions"
        >
          <DxLabel text="Сумма" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel text="Примечание" />
        </DxSimpleItem>

        <template #additional-payment-title>
          <span class="additional-payment-title">Дополнительная оплата</span>
        </template>

        <template #add-note>
          <button class="add-btn">Добавить</button>
        </template>

        <template #add-diagnosis-btn>
          <button class="diagnosis-btn" @click="addDiagnosis">
            Нет в списке?
          </button>
        </template>

        <template #horizont-line>
          <div class="horizont-line" />
        </template>
      </DxForm>
    </div>
    <Popup
      ref="confirmPopup"
      width="34vw"
      height="54vh"
      :shading="true"
      :showTitle="true"
      title="Мед.карта №M6000000  Запись №00000000"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="payment-popup-wrapper">
        <div class="payment-radio-input">
          <div class="payment-item">
            <input
              id="without-insurance"
              value="without-insurance"
              type="radio"
            />
            <label for="without-insurance"> Без страховки (ТМТ) </label>
          </div>
          <div class="payment-item">
            <input id="with-insurance" value="with-insurance" type="radio" />
            <label for="with-insurance"> Со страховкой (ТМТ) </label>
          </div>
        </div>

        <div class="horizont-line" />

        <div v-for="(item, idx) in 5" :key="idx" class="payment-checkbox-input">
          <div class="payment-item">
            <input id="pay-examination" type="checkbox" />
            <label for="pay-examination">Невропотолог {{ item }}</label>
          </div>
          <span>Сумма</span>
        </div>

        <div class="horizont-line" />

        <div class="sum-wrapper">
          <div class="sum-item">
            <span>Итого к оплате:</span>
            <span>Сумма</span>
          </div>
        </div>

        <div class="payment-btn-wrapper">
          <button>Оплатить</button>
          <button @click="closePaymentPopup">Отмена</button>
        </div>
      </div>
      <DxScrollView width="100%" :height="height" :use-native="true">
        <slot> </slot>
        <div class="space-block"></div>
      </DxScrollView>
    </Popup>

    <Popup
      ref="diagnosisPopup"
      width="36vw"
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
import "devextreme/data/odata/store";
import DxForm, {
  DxSimpleItem,
  DxLabel,
  DxRequiredRule,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import Popup from "~/components/page/popup.vue";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { TextAreaProperties } from "~/infrastructure/components-properties/TextAreaProperties";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { DxScrollView } from "devextreme-vue/scroll-view";
export default Vue.extend({
  props: {
    currentPatientEntry: {
      type: Object,
      required: true,
    },
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxScrollView,
    Popup,
    DxSimpleItem,
    DxLabel,
    DxRequiredRule,
    DxForm,
    DxEmptyItem,
    DxGroupItem,
  },
  data() {
    return {
      height: "auto",
      patientName: this.currentPatientEntry.patientName,
      paymentState: this.currentPatientEntry.paymentState,
      withoutInsurance: this.currentPatientEntry.withoutInsurance,
    };
  },
  computed: {
    diagnosisOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: "http://localhost:3001/diagnosis",
        displayExpr: "name",
      });
    },
    textBoxOptions() {
      return new TextBoxProperties();
    },
    numberBoxOptions() {
      return new NumberBoxProperties();
    },
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showResult(e: string) {
      this.$router.push(`/patients/entries/result`);
    },
    openPaymentPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closePaymentPopup() {
      return (this as any).$refs["confirmPopup"].close();
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
.entries-card-wrapper {
  .entries-id {
    padding: 12px 150px;
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

  .component-wrapper {
    row-gap: 40px;
    padding: 30px 50px;
  }

  .entries-number {
    width: 20%;
  }

  .print-wrapper {
    display: flex;
    column-gap: 10px;
    align-items: center;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .info-btn-wrapper {
    display: flex;
    column-gap: 30px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .new-patient {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
  }

  .add-btn {
    padding: 12px 42px;
    border: none;
    border-radius: 10px;
    background-color: $input-bg-color;
    font-weight: $bold-weight;
    margin-top: 14px;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  .diagnosis-btn {
    padding: 0.9rem 2rem;
    border: none;
    border-radius: 10px;
    margin-top: 18px;
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

  .note-text-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .note-header {
      display: flex;
      column-gap: 36px;

      p {
        font-weight: $bold-weight;
      }
    }

    .note-content {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
  }
}

.payment-radio-input {
  display: flex;
  column-gap: 30px;
  margin-bottom: 20px;
}

.payment-item {
  display: flex;
  column-gap: 10px;

  label {
    font-weight: $bold-weight;
    cursor: pointer;
  }
}

.payment-checkbox-input {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.space-block {
  height: 100px;
}

.sum-wrapper {
  margin-top: 20px;
}

.sum-item {
  display: flex;
  justify-content: space-between;
}

.payment-btn-wrapper {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 2.3rem;

  button {
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    cursor: pointer;
  }
}

.diagnosis-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.diagnosis-btn-wrapper {
  display: flex;
  justify-content: center;
  column-gap: 40px;
  margin-top: 2.3rem;

  button {
    padding: 0.9rem 3rem;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    cursor: pointer;
  }
}
</style>
