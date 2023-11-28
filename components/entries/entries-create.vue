<template>
  <div class="entries-create-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="new-entries">{{ $t("entriesPage.newEntry") }}</button>
        <button @click="saveEntry" class="save-btn panel-btn">
          {{ $t("entriesPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("entriesPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="entryForm"
        :form-data.sync="entry"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
        @field-data-changed="optionChanged"
      >
        <DxSimpleItem
          data-field="applicationNumber"
          data-type="number"
          css-class="cash-number"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('entriesPage.entryNumber')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="applicantId"
            editor-type="dxSelectBox"
            :editor-options="patientOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('entriesPage.patientName')" />
          </DxSimpleItem>

          <DxSimpleItem template="add-patient-btn" css-class="margin-top-btn" />
        </DxGroupItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="currentObservation.cabinetId"
            editor-type="dxSelectBox"
            :editor-options="cabinetOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('entriesPage.cabinet')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="currentObservation.userId"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('entriesPage.doctor')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem
          data-field="currentObservation.observationId"
          editor-type="dxSelectBox"
          :editor-options="examinationOptions"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('entriesPage.diagnosis')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="4" css-class="patient-data">
          <DxSimpleItem
            :col-span="1"
            data-field="currentObservation.observationDate"
            editor-type="dxDateBox"
            :editor-options="dateOptions"
          >
            <DxLabel :text="$t('entriesPage.date')" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            editor-type="dxDateBox"
            :editor-options="timeOptions"
            data-field="currentObservation.observationTime"
          >
            <DxLabel :text="$t('entriesPage.time')" />
          </DxSimpleItem>

          <!-- <DxSimpleItem
            :col-span="1"
            editor-type="dxDateBox"
            :editor-options="timeOptions"
            data-field="currentObservation.observationTime"
          >
            <DxLabel :text="$t('entriesPage.time')" />
            <template  v-slot:editor="scope">
              <DxDateBox
                :value="scope.data.currentObservation.observationTime"
                @valueChange="onTimeChange(scope)"
                :disabled="
                  isTimeDisabled(scope.data.currentObservation.observationTime)
                "
              >
              </DxDateBox>
            </template>
          </DxSimpleItem> -->

          <DxSimpleItem
            :col-span="2"
            :editor-options="emptyTimeOptions"
            editor-type="dxTextArea"
            :scrollingEnabled="true"
          >
            <DxLabel :text="$t('entriesPage.emptyTime')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem
          data-field="currentObservation.note"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel :text="$t('entriesPage.note')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem template="addToDataGrid" />

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem template="data-grid" />

        <DxEmptyItem />
        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <template #data-grid>
          <DxDataGrid
            ref="entryDataGrid"
            :data-source="gridData"
            :show-borders="false"
            :hoverStateEnabled="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            height="240px"
            @row-dbl-click="showEntry"
          >
            <DxColumn data-field="id" :width="40" />
            <DxColumn
              data-field="observationId"
              :caption="$t('entriesPage.examination')"
              alignment="center"
            >
              <DxLookup
                value-expr="id"
                display-expr="name"
                :data-source="observationDataSource"
              />
            </DxColumn>
            <DxColumn
              :width="250"
              data-field="cabinetId"
              alignment="center"
              :caption="$t('entriesPage.cabinet')"
            >
              <DxLookup
                value-expr="id"
                display-expr="name"
                :data-source="cabinetDataSource"
              />
            </DxColumn>
            <DxColumn
              data-field="userId"
              :caption="$t('entriesPage.employee')"
              alignment="center"
            >
              <DxLookup
                value-expr="id"
                display-expr="fullName"
                :data-source="userDataSource"
              />
            </DxColumn>
            <DxColumn
              data-field="observationDate"
              data-type="date"
              :caption="$t('entriesPage.date')"
              alignment="center"
            />
            <DxColumn
              data-field="observationTime"
              :caption="$t('entriesPage.time')"
              alignment="center"
            />
          </DxDataGrid>
        </template>

        <DxSimpleItem template="additional-payment-title" />

        <DxEmptyItem />

        <DxSimpleItem
          data-field="additionalPaymetName"
          css-class="examination-name"
          :editor-options="textBoxOptions"
        >
          <DxLabel :text="$t('entriesPage.paymentName')" />
          <!-- <DxRequiredRule /> -->
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="additionalPaymetPrice"
          data-type="number"
          css-class="additional-payment"
          :editor-options="numberBoxOptions"
        >
          <DxLabel :text="$t('entriesPage.sum')" />
          <!-- <DxRequiredRule /> -->
        </DxSimpleItem>
        <DxEmptyItem />

        <DxSimpleItem
          data-field="additionalPaymentNote"
          data-type="string"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel :text="$t('entriesPage.note')" />
        </DxSimpleItem>

        <template #additional-payment-title>
          <span class="additional-payment-title">{{
            $t("entriesPage.additionalPayment")
          }}</span>
        </template>

        <template #horizont-line>
          <div class="horizont-line" />
        </template>

        <template #add-patient-btn>
          <button @click="addPatient" class="new-patient-btn">
            {{ $t("entriesPage.newPatient") }}
          </button>
        </template>

        <template #addToDataGrid>
          <button @click="addToGrid" class="add-receptions-btn">
            {{ $t("entriesPage.add") }}
          </button>
        </template>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxLabel,
  DxRequiredRule,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn, DxLookup } from "devextreme-vue/data-grid";
import DxTextArea from "devextreme-vue/text-area";
import DataSource from "~/node_modules/devextreme/data/data_source";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { TextAreaProperties } from "~/infrastructure/components-properties/TextAreaProperties";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import { Entries } from "~/infrastructure/classes/Entries";
import { IEntries } from "~/infrastructure/interfaces/IEntries";
import { IEmptyTime } from "~/infrastructure/interfaces/administration/IEmptyTime";
import moment from "moment";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxForm,
    DxSimpleItem,
    DxLabel,
    DxRequiredRule,
    DxEmptyItem,
    DxGroupItem,
    DxTextArea,
  },
  data() {
    let entry: IEntries = new Entries();
    return {
      entry,
      emptyTime: "",
      freeTime: "",
      cabinetIdFilter: "",
      gridData: [],
      disable: true,
      cabinetDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.cabinets,
      }),
      userDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.users,
      }),
      observationDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.observations,
      }),
    };
  },
  computed: {
    patientOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.applicants,
        displayExpr: "fullName",
      });
    },
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        displayExpr: "name",
        onValueChanged: this.handleSelectBoxChange,
      });
    },
    doctorOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.users,
        displayExpr: "fullName",
        filter: ["cabinetId", "=", this.cabinetIdFilter],
      });
    },
    examinationOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.observations,
        displayExpr: "name",
        valueExpr: "id",
        searchExpr: "name",
      });
    },
    timeOptions() {
      return new DateBoxProperties({
        type: "time",
        dateSerializationFormat: "HH:mm:ss",

        // disabled: (data) => {
        //   const time = data.value;
        //   const hour = time.getHours();
        //   const minute = time.getMinutes();

        //   for (const interval of this.freeTime) {
        //     console.log("test", interval);

        //     if (hour >= interval[0] && hour < interval[1]) {
        //       return true; // Время заблокировано
        //     }
        //     if (hour === interval[0] && minute < 30) {
        //       return true; // Заблокировать первую половину интервала
        //     }
        //     if (hour === interval[1] && minute >= 30) {
        //       return true; // Заблокировать вторую половину интервала
        //     }
        //   }

        //   return false; // Время разблокировано
        // },

        // disabled: this.timeTest(this.freeTime)
      });
    },
    dateOptions() {
      return new DateBoxProperties({
        onValueChanged: async (e) => {
          if(e.value !== null) {
            const { data } = await this.$axios.get(
              `${this.$dataApi.usersFreeTimes}?UserId=${this.entry.currentObservation.userId}&ReservationDate=${e.value}`
            );
            this.freeTime = data.dayFreeTimes;
            this.showTimeInteval(this.freeTime);
          }
        },
      });
    },
    textAreaOptions() {
      return new TextAreaProperties();
    },
    textBoxOptions() {
      return new TextBoxProperties();
    },
    emptyTimeOptions() {
      return new TextBoxProperties({
        readOnly: true,
        value: this.emptyTime,
      });
    },
    numberBoxOptions() {
      return new NumberBoxProperties();
    },
  },
  methods: {
    showTimeInteval(data) {
      data.forEach((item) => {
        this.emptyTime += item.startTime + "-" + item.endTime + "\n";
      });
    },
    // handleSelectBoxChange(e) {
    //   // console.log("test", e);
    //   if (e.value === null) {
    //     console.log("test", this.disable);
    //   }
    //   return !this.disable
    // },
    showEntry(e: any) {
      this.$router.push(`/entries/${e.data.id}`);
    },
    cancelCreate() {
      this.$router.go(-1);
    },
    addPatient() {
      this.$router.push("/patients/create");
    },
    addToGrid() {
      this.gridData.push({
        cabinetId: this.entry.currentObservation.cabinetId,
        userId: this.entry.currentObservation.userId,
        observationId: this.entry.currentObservation.observationId,
        observationDate: this.entry.currentObservation.observationDate,
        observationTime: this.entry.currentObservation.observationTime,
        note: this.entry.currentObservation.note,
      });
    },
    saveEntry() {
      let result = (this as any).$refs["entryForm"].instance.validate();
      this.entry.applicationObservatins = [...this.gridData];

      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.post(this.$dataApi.applications, this.entry),
          (e: any) => {
            (this as any).$awn.success();
            this.$router.go(-1);
          },
          (e: any) => {
            (this as any).$awn.alert();
          }
        );
      }
    },
    optionChanged(e) {
      this.cabinetIdFilter = e.value;
    },
  },
});
</script>
<style lang="scss" scoped>
.entries-create-wrapper {
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

  .new-patient-btn {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  .add-receptions-btn {
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

  .add-notes {
    padding: 12px 42px;
    margin-right: auto;
    font-weight: $bold-weight;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  .time-list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  @media all and (max-width: 870px) {
    .new-entries {
      padding: 14px 50px;
    }

    .save-btn {
      padding: 14px 30px;
    }
  }

  @media all and (max-width: 730px) {
    .new-entries {
      display: none;
    }
  }
}
</style>
