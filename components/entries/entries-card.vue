<template>
  <div class="entries-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="entries-id">
          {{ entry.applicantNumber }}/{{ entry.applicationNumber }}
        </div>
        <button @click="saveEntry" class="save-btn panel-btn">
          {{ $t("entriesPage.save") }}
        </button>
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("entriesPage.cancel") }}
        </button>
      </div>
      <div>
        <div class="print-wrapper">
          <button
            v-if="permissionControler"
            @click="openPaymentPopup"
            class="paid-btn panel-btn"
          >
            {{ $t("entriesPage.pay") }}
          </button>
          <!-- <button class="print-btn panel-btn" /> -->
        </div>
      </div>
    </div>
    <div class="component-wrapper">
      <!-- TODO  УБРАТЬ LABEL -->
      <DxForm
        :form-data.sync="entry"
        ref="entryForm"
        :show-validation-summary="true"
        label-location="top"
        @field-data-changed="optionChanged"
      >
        <DxSimpleItem
          data-field="applicantName"
          :editor-options="applicantOption"
          css-class="examination-name"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('entriesPage.patientName')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

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

        <template #addToDataGrid>
          <button @click="addToGrid" class="add-receptions-btn">
            {{ $t("entriesPage.add") }}
          </button>
        </template>
      </DxForm>

      <DxDataGrid
        :data-source="entry.applicationObservatins"
        :show-borders="false"
        :hoverStateEnabled="true"
        :allow-column-resizing="true"
        :column-auto-width="true"
        @row-dbl-click="showEntryResult"
        height="240"
      >
        <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
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
          data-field="cabinetId"
          :caption="$t('entriesPage.cabinet')"
          alignment="center"
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
        <DxColumn
          data-field="applicationObservationStatus"
          :caption="$t('entriesPage.status')"
          alignment="center"
        >
          <DxLookup
            value-expr="id"
            display-expr="name"
            :data-source="statusDataSource"
          />
        </DxColumn>

        <!-- <DxColumn
          :caption="$t('entriesPage.examination')"
          :width="100"
          :buttons="editButtons"
          type="buttons"
        /> -->
        <DxColumn :width="100" :buttons="editButtons" type="buttons" />
        <template #cellTemplate="{ data }">
          <div>{{ data.rowIndex + 1 }}</div>
        </template>
      </DxDataGrid>

      <!-- second form -->
      <DxForm
        ref="applicationDiseaseForm"
        :form-data="applicationDisease"
        label-location="top"
      >
        <!-- <DxGroupItem :col-count="2" css-class="diagnosis-form">
          <DxSimpleItem
            data-field="diseaseId"
            editor-type="dxSelectBox"
            :editor-options="diagnosisOption"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('entriesPage.diagnosisList')" />
          </DxSimpleItem>

          <DxSimpleItem template="addDiagnosis" />
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="description"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel :text="$t('entriesPage.treatment')" />
        </DxSimpleItem>

        <DxSimpleItem template="add-note" />

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem template="disease-dataGrid" />

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />
        <DxEmptyItem /> -->

        <DxSimpleItem template="additional-payment" />
        <DxEmptyItem />

        <DxSimpleItem
          data-field="entry.additionalPaymetName"
          css-class="examination-name"
        >
          <DxLabel :text="$t('entriesPage.paymentName')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="entry.additionalPaymetPrice"
          css-class="additional-payment"
        >
          <DxLabel :text="$t('entriesPage.sum')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="entry.additionalPaymentNote"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel :text="$t('entriesPage.note')" />
        </DxSimpleItem>

        <!-- <template #disease-dataGrid>
          <DxDataGrid
            :data-source="dataSource"
            :show-borders="false"
            :hoverStateEnabled="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            height="240"
          >
            <DxColumn
              data-field="description"
              :caption="$t('entriesPage.treatment')"
              alignment="center"
            >
            </DxColumn>
            <DxColumn
              data-field="diseaseId"
              :caption="$t('entriesPage.diagnosisList')"
              alignment="center"
            >
              <DxLookup
                value-expr="id"
                display-expr="name"
                :data-source="diseaseDataSource"
              />
            </DxColumn>
            <DxColumn
              data-field="userId"
              :caption="$t('entriesPage.employee')"
              alignment="center"
            >
              <DxLookup
                value-expr="id"
                display-expr="firstName"
                :data-source="userDataSource"
              />
            </DxColumn>
            <DxColumn :width="100" :buttons="deleteButtons" type="buttons" />
          </DxDataGrid>
        </template> -->

        <!-- <template #addDiagnosis>
          <button class="add-diagnosis" @click="addDiagnosis">
            {{ $t("entriesPage.addDiagnosis") }}
          </button>
        </template>

        <template #add-note>
          <button @click="addApplicationDisease" class="add-btn">
            {{ $t("entriesPage.add") }}
          </button>
        </template> -->

        <template #horizont-line>
          <div class="horizont-line" />
        </template>

        <template #additional-payment>
          <span class="additional-payment-title">
            {{ $t("entriesPage.additionalPayment") }}
          </span>
        </template>
        <DocumentEditorPopup
          v-model="documentEditorVisible"
          :data="documentEditorData"
        />
      </DxForm>
    </div>

    <Popup
      ref="confirmPopup"
      width="34vw"
      height="54vh"
      :shading="true"
      :showTitle="true"
      :title="popupTitle"
      :hide-on-outside-click="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="payment-popup-wrapper">
        <div class="payment-radio-input">
          <div class="payment-item">
            <input
              id="without-insurance"
              v-model="radioButton"
              @change="paymentTypeChange"
              :value="true"
              type="radio"
            />
            <label for="without-insurance">
              <!-- {{ $t("examinationPage.withoutInsurance") }} -->
              {{ paymentWithoutInsurance }}
            </label>
          </div>
          <div class="payment-item">
            <input
              id="with-insurance"
              v-model="radioButton"
              @change="paymentTypeChange"
              :value="false"
              type="radio"
            />
            <label for="with-insurance">
              <!-- {{ $t("examinationPage.withInsurance") }} -->
              {{ paymentWithInsurance }}
            </label>
          </div>
        </div>
        <div class="horizont-line"></div>

        <div
          v-for="(item, id) in applicationPrice"
          :key="id"
          class="payment-checkbox-input"
        >
          <div class="payment-item">
            <input
              v-model="chooseApplicationObservations"
              :value="item"
              :disabled="item.isPaid === true ? true : false"
              :id="item.id.toString()"
              type="checkbox"
            />
            <label :for="item.id.toString()">
              {{ item.observationName }}
            </label>
          </div>
          <span>{{ item.price }}</span>
        </div>

        <div class="horizont-line" />

        <div class="sum-wrapper">
          <div class="sum-item">
            <span>{{ $t("entriesPage.sumPayment") }}</span>
            <span>{{ totalSum }}</span>
          </div>
        </div>

        <div class="payment-btn-wrapper">
          <button
            :disabled="paymentButtonDisabled"
            @click="payApplicationObservation"
          >
            {{ $t("entriesPage.pay") }}
          </button>
          <button @click="closePaymentPopup">
            {{ $t("entriesPage.cancel") }}
          </button>
        </div>
      </div>
      <DxScrollView width="100%" :use-native="true">
        <slot> </slot>
        <div class="space-block"></div>
      </DxScrollView>
    </Popup>

    <Popup
      ref="diagnosisPopup"
      width="36vw"
      height="auto"
      :shading="true"
      :hide-on-outside-click="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <DxForm
        ref="diseasesForm"
        :form-data.sync="diseases"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem data-field="name">
          <DxLabel :text="$t('setting.nameFile')" />
        </DxSimpleItem>
        <DxSimpleItem data-field="code">
          <DxLabel :text="$t('commonText.code')" />
        </DxSimpleItem>
      </DxForm>
      <div class="diagnosis-btn-wrapper">
        <button @click="saveDiseases">{{ $t("commonText.save") }}</button>
        <button @click="closeDiagnosisPopup">
          {{ $t("commonText.cancel") }}
        </button>
      </div>
    </Popup>
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
import { DxDataGrid, DxColumn, DxLookup } from "devextreme-vue/data-grid";
import { DxScrollView } from "devextreme-vue/scroll-view";
import DataSource from "devextreme/data/data_source";
import { IApplicationDisease } from "~/infrastructure/interfaces/IApplicationDisease";
import DxTextArea from "devextreme-vue/text-area";
import { ApplicationDisease } from "~/infrastructure/classes/ApplicationDisease";
import { IEntries } from "~/infrastructure/interfaces/IEntries";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import { IApplicationObservationsPrice } from "~/infrastructure/interfaces/IApplicationObservationsPrice";
import { IApplicationPayment } from "~/infrastructure/interfaces/IApplicationPayment";
import { ApplicationPayment } from "~/infrastructure/classes/ApplicationPayment";
import { IDiseases } from "~/infrastructure/interfaces/administration/iDiseases";
import { Diseases } from "~/infrastructure/classes/administration/Diseases";
import { ApplicationStatuses } from "~/infrastructure/data-source/ApplicationStatuses";
import { Payment } from "~/infrastructure/enums/PaymentType";
import DocumentEditorPopup from "~/components/documentEditor/editor-popup.vue";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { confirm } from "devextreme/ui/dialog";
import Popup from "~/components/page/popup.vue";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxScrollView,
    Popup,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxForm,
    DxGroupItem,
    DxEmptyItem,
    DxTextArea,
    DocumentEditorPopup,
  },
  props: {
    currentEntry: {
      type: Object,
      required: true,
    },
  },
  data() {
    let entry: IEntries = this.currentEntry;
    let applicationPrice: IApplicationObservationsPrice[] = [];
    let applicationPayment: IApplicationPayment = new ApplicationPayment();
    let diseases: IDiseases = new Diseases();

    let applicationDisease: IApplicationDisease = new ApplicationDisease();
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applicationDiseaseByApplication}/${this.currentEntry.id}`,
        }),
      }),
      cabinetDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.cabinets,
      }),
      userDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.users,
      }),
      diseaseDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.diseases,
      }),
      observationDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.observations,
      }),
      entry,
      applicationPrice,
      applicationPayment,
      applicationDisease,
      freeTime: "",
      cabinetIdFilter: "",
      gridData: [],
      radioButton: true,
      chooseApplicationObservations: [],
      diseases,
      price: 0,
      popupTitle: "",
      paymentWithoutInsurance: "",
      paymentWithInsurance: "",
      documentEditorData: null,
      documentEditorVisible: false,
      statusDataSource: ApplicationStatuses(this),
      // editButtons: [
      //   {
      //     icon: "trash",
      //     onClick: (e) => {
      //       this.$router.push(`/entries/card-result/${e.row.data.id}`);
      //     },
      //   },
      // ],
    };
  },
  computed: {
    editButtons() {
      return [
        {
          hint: "удалить",
          icon: "trash",
          onClick: async (e) => {
            const result = confirm(
              this.$t("notification.labels.index"),
              this.$t("notification.labels.confirm")
            );
            result.then((dialogResult) => {
              if (dialogResult) {
                this.$awn.asyncBlock(
                  this.$axios.delete(
                    `${this.$dataApi.applications.applicationObservatins}/${e.row.data.id}`
                  ),
                  (e) => {
                    this.$awn.success();
                    this.dataSource.reload();
                  },
                  (e) => {
                    this.$awn.alert();
                  }
                );

                // this.entry.applicationObservatins.filter((el) => {
                //   // console.log("element", el.observationId);
                //   // console.log("row", e.row.data);
                //   return el.observationId !== e.row.data.observationId;
                // });

                // this.entry.applicationObservatins.forEach((el) => {
                //   console.log("element", typeof el);
                // });
              }
            });
          },
        },
      ];
    },
    applicantOption() {
      return new TextBoxProperties({
        readOnly: true,
      });
    },
    diagnosisOption() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.diseases,
        displayExpr: "name",
      });
    },
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        displayExpr: "name",
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
      });
    },
    dateOptions() {
      return new DateBoxProperties({
        onValueChanged: async (e) => {
          const { data } = await this.$axios.get(
            `${this.$dataApi.usersFreeTimes}?UserId=${this.entry.currentObservation.userId}&ReservationDate=${e.value}`
          );
          this.freeTime = data.dayFreeTimes;
          this.showTimeInteval(this.freeTime);
        },
      });
    },
    emptyTimeOptions() {
      return new TextBoxProperties({
        readOnly: true,
        value: this.emptyTime,
      });
    },
    totalSum() {
      let sum = 0;
      return this.chooseApplicationObservations
        ?.filter((item) => !item.isPaid)
        .reduce((sum, item) => {
          return sum + item.price;
        }, sum);
    },
    paymentButtonDisabled() {
      return this.entry.paymentStatus === Payment.Paid;
    },

    // deleteButtons() {
    //   return [
    //     {
    //       hint: "удалить",
    //       icon: "trash",
    //       onClick: async (e) => {
    //         const result = confirm(
    //           this.$t("notification.labels.index"),
    //           this.$t("notification.labels.confirm")
    //         );
    //         result.then((dialogResult) => {
    //           if (dialogResult) {
    //             this.$awn.asyncBlock(
    //               this.$axios.delete(
    //                 `${this.$dataApi.applicationDiseaseByApplication}/${e.row.data.id}`
    //               ),

    //               (e) => {
    //                 this.$awn.success();
    //                 this.dataSource.reload();
    //               },
    //               (e) => {
    //                 this.$awn.alert();
    //               }
    //             );
    //           }
    //         });
    //       },
    //     },
    //   ];
    // },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission = parseGetToken?.ApplicationObservationPaymentsController;

      if (permission) {
        return permission;
      }
    },
  },
  methods: {
    showTimeInteval(data) {
      data.forEach((item) => {
        this.emptyTime += item.startTime + "-" + item.endTime + "\n";
      });
    },
    backHandler() {
      this.$router.go(-1);
    },
    showEntryResult(e) {
      this.$router.push(`/entries/card-result/${e.data.id}`);
    },
    paymentRequest() {
      this.$axios
        .get(
          `${this.$dataApi.applicationObservationsPrice}?applicationId=${this.entry.id}&isDefaultValue=${this.radioButton}`
        )
        .then((responce) => {
          this.applicationPrice = responce.data;
          this.applicationPrice.map((item) => {
            this.popupTitle = `Мед.карта ${item.applicantNumber}  Запись № ${item.applicationNumber}`;
            if (item.isPaid === true) {
              this.chooseApplicationObservations.push(item);
            }
            if (item.currency === 0) {
              this.paymentWithoutInsurance = this.$t(
                "examinationPage.withoutInsurance"
              );
              this.paymentWithInsurance = this.$t(
                "examinationPage.withInsurance"
              );
            } else {
              this.paymentWithoutInsurance = this.$t(
                "examinationPage.foreigner"
              );
              this.paymentWithInsurance = this.$t("examinationPage.diplomat");
            }
          });
          if (this.applicationPrice.isPaid === true) {
            this.disabled = true;
          }
        });
    },
    paymentTypeChange() {
      this.paymentRequest();
    },
    payApplicationObservation() {
      this.chooseApplicationObservations.forEach((element) => {
        this.applicationPayment.applicationObservationsId.push(element.id);
      });
      this.applicationPayment.isDefaultValue = this.radioButton;

      this.$awn.asyncBlock(
        this.$axios.post(
          `${this.$dataApi.applicationObservationPayments}`,
          this.applicationPayment
        ),
        (e) => {
          this.$awn.success();
          this.closePaymentPopup();
          this.documentEditorData = e.data;
          this.documentEditorVisible = true;
        }
      );
    },
    openPaymentPopup() {
      this.paymentRequest();
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
    addToGrid() {
      this.entry.applicationObservatins.push({
        cabinetId: this.entry.currentObservation.cabinetId,
        userId: this.entry.currentObservation.userId,
        observationId: this.entry.currentObservation.observationId,
        observationDate: this.entry.currentObservation.observationDate,
        observationTime: this.entry.currentObservation.observationTime,
        note: this.entry.currentObservation.note,
      });
    },
    saveDiseases() {
      let result = this.$refs["diseasesForm"].instance.validate();
      // this.entry.applicationObservatins = [...this.gridData];
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.diseases, this.diseases),
          (e: any) => {
            this.$awn.success();
            this.dataSource.reload();
          },
          (e: any) => {
            this.$awn.alert();
          }
        );
        this.closeDiagnosisPopup();
      }
    },
    addApplicationDisease() {
      let result = this.$refs["applicationDiseaseForm"].instance.validate();
      this.applicationDisease.applicationId = this.currentEntry.id;
      this.$awn.asyncBlock(
        this.$axios.post(
          this.$dataApi.applicationDisease,
          this.applicationDisease
        ),
        (e: any) => {
          this.$awn.success();
          this.dataSource.reload();
        },
        (e: any) => {
          this.$awn.alert();
        }
      );
    },
    saveEntry() {
      let result = (this as any).$refs["entryForm"].instance.validate();

      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.applications}/${this.entry.id}`,
            this.entry
          ),
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
.entries-card-wrapper {
  .entries-id {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    color: $red;
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

  .info-form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .entries-number {
    width: 20%;
  }

  .print-wrapper {
    display: flex;
    column-gap: 30px;
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

  .add-diagnosis {
    padding: 12px 30px;
    margin-top: 20px;
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

.space-block {
  height: 100px;
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

@media all and (max-width: 870px) {
  .entries-id {
    padding: 14px 80px;
  }
}

@media all and (max-width: 645px) {
  .panel-items {
    row-gap: 10px;
  }
}

@media all and (max-width: 630px) {
  .entries-id {
    display: none;
  }

  .save-btn {
    padding: 14px 28px;
  }
}
</style>
