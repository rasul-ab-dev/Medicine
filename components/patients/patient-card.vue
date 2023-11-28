<template>
  <div class="patient-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="padtient-card-id">{{ patient.applicantNumber }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="savePatient" class="save-btn panel-btn">
            {{ $t("patientPage.save") }}
          </button>
          <button @click="openConfirmPopup" class="cancel-btn panel-btn">
            {{ $t("patientPage.cancel") }}
          </button>
        </div>
        <button @click="backHandler" v-else class="save-btn panel-btn">
          {{ $t("patientPage.cancel") }}
        </button>
      </div>
      <div class="complaint-btn-wrapper">
        <!-- <button
          @click="showComplaints"
          v-if="toogleEntry"
          class="complaint-btn panel-btn"
        >
          {{ $t("patientPage.complaint") }}
        </button>
        <button
          @click="showEntries"
          v-if="toogleEntry"
          class="entries-btn panel-btn"
        >
          {{ $t("patientPage.entries") }}
        </button> -->
        <button
          v-if="permissionEdit"
          @click="editHandler"
          class="edit-btn panel-btn"
        />
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm ref="patientForm" :form-data.sync="patient" label-location="top">
        <DxGroupItem css-class="patient-data">
          <DxSimpleItem
            data-field="lastName"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.lastName')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="firstName"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.firstName')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="middleName"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <!-- <DxRequiredRule /> -->
            <DxLabel :text="$t('patientPage.surname')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-field="sex"
            data-type="number"
            editor-type="dxSelectBox"
            :editor-options="genderOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.gender')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="dateOfBirth"
            editor-type="dxDateBox"
            :editor-options="dateOfBirthOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.birthday')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="passportNumber"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxLabel :text="$t('patientPage.passportNumber')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-field="phone1"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.phoneNumber')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="phone2"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxLabel :text="$t('patientPage.secondPhoneNumber')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="citizen"
            data-type="string"
            editor-type="dxCheckBox"
            css-class="citizen-checkbox"
          >
            <!-- <DxRequiredRule /> -->
            <DxLabel location="right" :text="$t('patientPage.citizenStatus')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />

        <DxGroupItem :col-count="2" css-class="polyclinic-form">
          <DxSimpleItem
            editor-type="dxSelectBox"
            data-field="clinicId"
            :editor-options="polyclinicOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.polyclinic')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />

        <DxGroupItem :col-count="2" css-class="group-form">
          <DxSimpleItem
            data-field="applicatGroupId"
            data-type="number"
            editor-type="dxSelectBox"
            :editor-options="groupOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.group')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="notice"
          data-type="string"
          editor-type="dxTextArea"
          :editor-options="textAreaOptions"
        >
          <DxLabel :text="$t('patientPage.note')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-field="regionId"
            data-type="string"
            editor-type="dxSelectBox"
            :editor-options="regionOptions"
          >
            <DxLabel :text="$t('patientPage.region')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="cityId"
            data-type="string"
            editor-type="dxSelectBox"
            :editor-options="citysOptions"
          >
            <DxLabel :text="$t('patientPage.city')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="districtId"
            editor-type="dxSelectBox"
            data-type="string"
            :editor-options="districtOptions"
          >
            <DxLabel :text="$t('patientPage.area')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-field="street"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxLabel :text="$t('patientPage.street')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="house"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxLabel :text="$t('patientPage.house')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="flat"
            data-type="string"
            :editor-options="textBoxOptions"
          >
            <DxLabel :text="$t('patientPage.apartment')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

          <DxSimpleItem
            data-field="note"
            data-type="string"
            editor-type="dxTextArea"
            :editor-options="textAreaOptions"
          >
            <DxLabel :text="$t('patientPage.note')" />
          </DxSimpleItem>

        <DxSimpleItem data-field="images" template="files">
          <DxLabel text=" " />
        </DxSimpleItem>

        <!-- <DxEmptyItem /> -->
        <!-- <DxSimpleItem template="horizont-line" />

        <DxSimpleItem
          data-field="isActive"
          data-type="boolean"
          editor-type="dxCheckBox"
          css-class="checkbox"
        >
          <DxLabel location="right" :text="$t('patientPage.isActive')" />
        </DxSimpleItem> -->

        <template #horizont-line>
          <div class="horizont-line" />
        </template>

        <template #files>
          <DxFileUploader
            :multiple="true"
            :allowed-file-extensions="['.jpg', '.jpeg', '.png', '.pdf']"
            upload-mode="useButtons"
          />
        </template>
      </DxForm>
      <!-- <DxFileUploader
        :multiple="true"
        :allowed-file-extensions="['.jpg', '.jpeg', '.png']"
        upload-url="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        upload-mode="useButtons"
      /> -->
    </div>

    <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      :hide-on-outside-click="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>{{ $t("commonText.cancelEdit") }}</span>
        <div class="confirm-btn">
          <button @click="backHandler">{{ $t("commonText.yes") }}</button>
          <button @click="closeConfirmPopup">{{ $t("commonText.no") }}</button>
        </div>
      </div>
    </Popup>

    <Popup
      ref="polyclinicPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="polyclinic-popup-wrapper">
        <div class="polyclinic-item">
          <DxForm
            :read-only="false"
            :show-colon-after-label="false"
            :show-validation-summary="true"
            validation-group="customerData"
            label-location="top"
            width="100%"
          >
            <DxSimpleItem data-field="cabinetName">
              <DxLabel :text="$t('commonText.name')" />
            </DxSimpleItem>
          </DxForm>
        </div>
        <div class="polyclinic-btn-wrapper">
          <button>{{ $t("commonText.save") }}</button>
          <button @click="closePolyclinicPopup">
            {{ $t("commonText.cancel") }}
          </button>
        </div>
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
import Popup from "~/components/page/popup.vue";
import DxTextArea from "devextreme-vue/text-area";
import { DxDateBox } from "devextreme-vue/date-box";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import { IPatient } from "~/infrastructure/interfaces/administration/IPatient";
import { Genders } from "~/infrastructure/data-source/Genders";
import { CitizenStatuses } from "~/infrastructure/data-source/CitizenStatuses";
import DxFileUploader from "devextreme-vue/file-uploader";

export default Vue.extend({
  components: {
    Popup,
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxGroupItem,
    DxEmptyItem,
    DxDateBox,
    DxTextArea,
    DxFileUploader,
  },
  props: {
    currentPatient: {
      type: Object,
      required: true,
    },
  },
  data() {
    let patient: IPatient = this.currentPatient;
    return {
      patient,
      readOnly: true,
    };
  },
  computed: {
    permissionEdit() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.ApplicantsController?.includes("FullAccess") ||
        parseGetToken?.ApplicantsController?.includes("Update") ||
        parseGetToken?.admin;

      return permission;
    },
    toogleButtons(): boolean {
      return this.readOnly === true ? false : true;
    },
    toogleEntry(): boolean {
      return this.readOnly === false ? false : true;
    },
    genderOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: Genders(this),
        showClearButton: false,
        readOnly: this.readOnly,
      });
    },
    citizenStatusOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: CitizenStatuses(this),
        showClearButton: false,
        readOnly: this.readOnly,
      });
    },
    polyclinicOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.clinics,
        displayExpr: "name",
        valueExpr: "id",
        readOnly: this.readOnly,
        // value: this.currentPatient.clinicId,
      });
    },
    groupOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.applicantGroups,
        displayExpr: "name",
        valueExpr: "id",
        readOnly: this.readOnly,
      });
    },
    regionOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.regions,
        displayExpr: "name",
        valueExpr: "id",
        readOnly: this.readOnly,
      });
    },
    districtOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.district,
        // displayExpr: "name",
        valueExpr: "id",
        readOnly: this.readOnly,
      });
    },
    citysOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.citys,
        displayExpr: "name",
        valueExpr: "id",
        readOnly: this.readOnly,
      });
    },
    // dateOfBirthOptions() {
    //   return new DateBoxProperties({
    //     // dateSerializationFormat: "yyyy-MM-ddTHH:mm:ssZ",
    //     readOnly: this.readOnly,
    //   });
    // },
    dateOfBirthOptions() {
      return {
        dateSerializationFormat: "yyyy-MM-ddTHH:mm:ssZ",
        readOnly: this.readOnly,
      };
    },
    textAreaOptions() {
      return {
        readOnly: this.readOnly,
        height: 84,
      };
    },
    textBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
    numberBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showComplaints() {
      this.$router.push(`/patients/complaint`);
    },
    showEntries() {
      this.$router.push({
        path: `entries`,
        query: { id: `${this.patient.id}` },
      });
    },
    editHandler() {
      this.readOnly = !this.readOnly;
    },
    openConfirmPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closeConfirmPopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    addPolyclinic() {
      return (this as any).$refs["polyclinicPopup"].open();
    },
    closePolyclinicPopup() {
      return (this as any).$refs["polyclinicPopup"].close();
    },
    savePatient() {
      const patient = new FormData();
      patient.append("Id", this.patient.id);
      patient.append("FirstName", this.patient.firstName);
      patient.append("LastName", this.patient.lastName);
      patient.append("MiddleName", this.patient.middleName);
      patient.append("ApplicantNumber", this.patient.applicantNumber);
      patient.append("Sex", this.patient.sex);
      patient.append("DateOfBirth", this.patient.dateOfBirth);
      patient.append("PassportNumber", this.patient.passportNumber);
      patient.append("Citizen", this.patient.citizen);
      patient.append("Phone1", this.patient.phone1);
      patient.append("Phone2", this.patient.phone2);
      patient.append("Vip", this.patient.vip);
      patient.append("Street", this.patient.street);
      patient.append("House", this.patient.house);
      patient.append("Notice", this.patient.notice);
      patient.append("Flat", this.patient.flat);
      patient.append("AddressNote", this.patient.addressNote);
      patient.append("ClinicId", this.patient.clinicId);
      patient.append("ApplicatGroupId", this.patient.applicatGroupId);
      patient.append("DistrictId", this.patient.districtId);
      patient.append("Images", this.patient.images);

      let result = this.$refs["patientForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios({
            method: "put",
            url: `${this.$dataApi.applicants}/${this.patient.id}`,
            data: patient,
            headers: { "Content-Type": "multipart/form-data" },
          }),
          (e) => {
            this.$awn.success();
            this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e) => {
            this.$awn.alert();
          }
        );
      }

      // let result = (this as any).$refs["patientForm"].instance.validate();
      // if (result.isValid) {
      //   (this as any).$awn.asyncBlock(
      //     this.$axios.put(
      //       `${this.$dataApi.applicants}/${this.patient.id}`,
      //       this.patient
      //     ),
      //     (e: any) => {
      //       (this as any).$awn.success();
      //       // this.$emit("successedSaved", e.data);
      //       this.$router.go(-1);
      //     },
      //     (e: any) => {
      //       (this as any).$awn.alert();
      //     }
      //   );
      // }
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  row-gap: 20px;
}

.padtient-card-id {
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  color: $red;
}

.hidden-buttons {
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

.complaint-btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.entries-btn,
.complaint-btn,
.save-btn {
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}

.btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.medical-card-number {
  width: 26%;
}

@media all and (max-width: 870px) {
  .padtient-card-id {
    padding: 14px 80px;
  }
}

@media all and (max-width: 1024px) {
  .panel-items {
    row-gap: 10px;
  }
}

@media all and (max-width: 700px) {
  .padtient-card-id {
    display: none;
  }

  .save-btn {
    padding: 14px 28px;
  }
}
</style>
