<template>
  <div class="entries-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="new-entries">Новая запись</div>
        <button class="save-btn panel-btn">Сохранить</button>
        <button @click="cancelCreate" class="back-btn panel-btn">
          Отменить
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem data-field="cabinetName" css-class="cash-number">
          <DxRequiredRule />
          <DxLabel text="Номер записи" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="cabinetName"
            editor-type="dxSelectBox"
            :editor-options="patientOptions"
          >
            <!-- TODO  УБРАТЬ LABEL -->

            <DxRequiredRule />
            <DxLabel text="Пациент" />
          </DxSimpleItem>

          <DxSimpleItem template="add-patient-btn" css-class="margin-top-btn" />
        </DxGroupItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="cabinetName"
            editor-type="dxSelectBox"
            :editor-options="cabinetOptions"
          >
            <DxRequiredRule />
            <DxLabel text="Кабинет" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="cabinetName"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxRequiredRule />
            <DxLabel text="Доктор" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          editor-type="dxTagBox"
          :editor-options="examinationOptions"
        >
          <DxRequiredRule />
          <DxLabel text="Проводимые приемы, обследования, диагностика" />
        </DxSimpleItem>

        <DxSimpleItem template="add-receptions" />

        <DxEmptyItem />

        <DxGroupItem
          :col-count="2"
          css-class="patient-data"
          :editor-options="dateOptions"
        >
          <DxSimpleItem data-field="date" editor-type="dxDateBox">
            <DxLabel text="Дата" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="time"
            editor-type="dxDateBox"
            :editor-options="timeOptions"
          >
            <DxLabel text="Время" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem
          data-field="date"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel text="Примечание" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem template="add-receptions" />

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem template="data-grid" />

        <DxEmptyItem />
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <template #data-grid>
          <DxDataGrid
            :show-borders="false"
            :hoverStateEnabled="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            height="240px"
          >
            <DxColumn data-field="id" :width="40" />
            <DxColumn
              :width="250"
              data-field="cabinetName"
              alignment="center"
            />
            <DxColumn data-field="employeeName" alignment="center" />
            <DxColumn data-field="date" alignment="center" />
            <DxColumn data-field="time" alignment="center" />
            <DxColumn data-field="result" alignment="center" />
          </DxDataGrid>
        </template>

        <DxSimpleItem template="additional-payment-title" />

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          css-class="examination-name"
          :editor-options="textBoxOptions"
        >
          <DxRequiredRule />
          <DxLabel text="Название" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="cabinetName"
          css-class="additional-payment"
          :editor-options="numberBoxOptions"
        >
          <DxRequiredRule />
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

        <template #horizont-line>
          <div class="horizont-line" />
        </template>

        <template #add-patient-btn>
          <button @click="addPatient" class="new-patient-btn">
            Новый пациент?
          </button>
        </template>

        <template #add-receptions>
          <button class="add-receptions-btn">Добавить</button>
        </template>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
  DxGroupItem,
  DxEmptyItem,
} from "devextreme-vue/form";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { TextAreaProperties } from "~/infrastructure/components-properties/TextAreaProperties";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxGroupItem,
    DxEmptyItem,
  },
  data() {
    return {};
  },
  computed: {
    patientOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: "http://localhost:3001/patientData",
        displayExpr: "firstName",
      });
    },
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: "http://localhost:3001/cabinetData",
        displayExpr: "cabinetName",
      });
    },
    doctorOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: "http://localhost:3001/employeeData",
        displayExpr: "jobTitle",
      });
    },
    examinationOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: "http://localhost:3001/examinationData",
        displayExpr: "examinationName",
      });
    },
    timeOptions() {
      return new DateBoxProperties({
        type: "time",
      });
    },
    dateOptions() {
      return new DateBoxProperties();
    },
    textAreaOptions() {
      return new TextAreaProperties();
    },
    textBoxOptions() {
      return new TextBoxProperties();
    },
    numberBoxOptions() {
      return new NumberBoxProperties();
    },
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
    addPatient() {
      this.$router.push("/patients/create");
    },
  },
});
</script>
<style lang="scss" scoped>
.entries-card-wrapper {
  .new-entries {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
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

  .new-patient-btn {
    padding: 0.9rem 2rem;
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

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
  }

  .new-patient {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
  }

  .add-receptions-btn,
  .add-note-btn {
    padding: 12px 42px;
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
}

.patient-item {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.patient-btn-wrapper {
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
