<template>
  <div class="patient-create-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="create-new-patient">{{ $t("patientPage.newPatient") }}</div>
        <button @click="savePatient" class="save-btn panel-btn">
          {{ $t("patientPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("patientPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        :form-data.sync="patient"
        ref="patientForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
        @field-data-changed="optionChanged"
      >
        <DxGroupItem :col-count="2" css-class="medical-card">
          <DxSimpleItem
            data-field="medicalCardNumber"
            css-class="medical-card-number"
            data-type="number"
            :editor-options="numberBoxOptions"
          >
            <!-- <DxRequiredRule /> -->
            <DxLabel :text="$t('patientPage.medicalCardNumber')" />
          </DxSimpleItem>

          <!-- <DxSimpleItem
            data-field="unknown"
            editor-type="dxCheckBox"
            css-class="private-data-checkbox"
          >
            <DxLabel location="right" :text="$t('patientPage.personalData')" />
          </DxSimpleItem> -->
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem css-class="patient-data">
          <DxSimpleItem
            data-field="lastName"
            data-type="string"
            editor-type="dxTextBox"
            :editor-options="textBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.lastName')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="firstName"
            data-type="string"
            editor-type="dxTextBox"
            :editor-options="textBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.firstName')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="middleName"
            data-type="string"
            editor-type="dxTextBox"
            :editor-options="textBoxOptions"
          >
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
            data-type="date"
            editor-type="dxDateBox"
            :editor-options="dateBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.birthday')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="passportNumber"
            data-type="string"
            editor-type="dxTextBox"
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
            :editor-options="numberBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('patientPage.phoneNumber')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="phone2"
            data-type="string"
            :editor-options="numberBoxOptions"
          >
            <DxLabel :text="$t('patientPage.secondPhoneNumber')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="citizen"
            data-type="boolean"
            editor-type="dxCheckBox"
            :editor-options="{ value: true }"
            css-class="citizen-checkbox"
          >
            <DxLabel location="right" :text="$t('patientPage.citizenStatus')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />

        <DxGroupItem :col-count="2" css-class="polyclinic-form">
          <DxSimpleItem
            data-field="clinicId"
            data-type="number"
            editor-type="dxSelectBox"
            :editor-options="polyclinicOptions"
          >
            <DxLabel :text="$t('patientPage.polyclinic')" />
          </DxSimpleItem>
          <DxSimpleItem
            template="add-polyclinic-btn"
            css-class="polyclinic-btn"
          />
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />

        <DxGroupItem :col-count="2" css-class="group-form">
          <DxSimpleItem
            data-field="applicatGroupId"
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
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel :text="$t('patientPage.note')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-field="region"
            editor-type="dxSelectBox"
            :editor-options="regionOptions"
          >
            <DxLabel :text="$t('patientPage.region')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="city"
            editor-type="dxSelectBox"
            :editor-options="citysOptions"
          >
            <DxLabel :text="$t('patientPage.city')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="districtId"
            editor-type="dxSelectBox"
            :editor-options="districtOptions"
          >
            <!-- <DxRequiredRule /> -->
            <DxLabel :text="$t('patientPage.area')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem data-field="street" data-type="string">
            <DxLabel :text="$t('patientPage.street')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="house"
            data-type="number"
            :editor-options="numberBoxOptions"
          >
            <DxLabel :text="$t('patientPage.house')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="flat"
            data-type="number"
            :editor-options="numberBoxOptions"
          >
            <DxLabel :text="$t('patientPage.apartment')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="note"
          data-type="string"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 84 }"
        >
          <DxLabel :text="$t('patientPage.note')" />
        </DxSimpleItem>

        <DxSimpleItem data-field="images" template="files">
          <DxLabel text=" " />
        </DxSimpleItem>

        <template #horizont-line>
          <div class="horizont-line" />
        </template>

        <template #add-polyclinic-btn>
          <button @click="addPolyclinic" class="polyclinic-list-btn">
            {{ $t("patientPage.addPolyclinic") }}
          </button>
        </template>

        <template #files>
          <DxFileUploader
            :multiple="true"
            :allowed-file-extensions="['.jpg', '.jpeg', '.png', '.pdf']"
            upload-mode="useButtons"
            @uploaded="fileUploaded"
          />
        </template>
      </DxForm>
      <!-- <DxFileUploader
        :multiple="true"
        :allowed-file-extensions="['.jpg', '.jpeg', '.png', '.pdf']"
        upload-mode="useButtons"
        @value-changed="fileUpload"
      /> -->
    </div>
    <Popup
      ref="polyclinicPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <DxForm
        ref="polyclinicForm"
        :form-data.sync="polyclinic"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem data-field="name" data-type="string">
          <DxLabel :text="$t('setting.nameFile')" />
          <DxRequiredRule />
        </DxSimpleItem>
      </DxForm>
      <div class="polyclinic-btn-wrapper">
        <button @click="savePolyclinic">{{ $t("commonText.save") }}</button>
        <button @click="closePolyclinicPopup">
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
  DxGroupItem,
  DxButtonItem,
  DxLabel,
  DxEmptyItem,
  DxRequiredRule,
  DxItem,
} from "devextreme-vue/form";
import Popup from "~/components/page/popup.vue";
import { DxCheckBox } from "devextreme-vue/check-box";
import DxTextArea from "devextreme-vue/text-area";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import { IPolyclinics } from "~/infrastructure/interfaces/administration/IPolyclinics";
import { Polyclinics } from "~/infrastructure/classes/administration/Polyclinics";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { TextAreaProperties } from "~/infrastructure/components-properties/TextAreaProperties";
import { IPatient } from "~/infrastructure/interfaces/administration/IPatient";
import { Patient } from "~/infrastructure/classes/administration/Patient";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { Genders } from "~/infrastructure/data-source/Genders";
import { CitizenStatuses } from "~/infrastructure/data-source/CitizenStatuses";
import DxFileUploader from "devextreme-vue/file-uploader";
export default Vue.extend({
  components: {
    Popup,
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxCheckBox,
    DxEmptyItem,
    DxTextArea,
    DxItem,
    DxFileUploader,
  },
  data() {
    let patient: IPatient = new Patient();
    let polyclinic: IPolyclinics = new Polyclinics();
    return {
      patient,
      polyclinic,
      regionIdFilter: "",
      cityIdFilter: "",
      files: [],
    };
  },
  computed: {
    genderOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: Genders(this),
        showClearButton: false,
      });
    },
    citizenStatusOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: CitizenStatuses(this),
        showClearButton: false,
      });
    },
    polyclinicOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.clinics,
        displayExpr: "name",
      });
    },
    groupOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.applicantGroups,
        displayExpr: "name",
      });
    },
    regionOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.regions,
        // displayExpr: "name",
        valueExpr: "id",
      });
    },
    citysOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.citys,
        // displayExpr: "name",
        valueExpr: "id",
        filter: ["regionId", "=", this.regionIdFilter],
      });
    },
    districtOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.district,
        // displayExpr: "name",
        valueExpr: "id",
        filter: ["cityId", "=", this.cityIdFilter],
      });
    },
    dateBoxOptions() {
      return new DateBoxProperties({
        // dateSerializationFormat: "yyyy-MM-ddTHH:mm:ssZ",
      });
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
    fileUploaded(e) {
      const newFiles = e.component.option("value");
      // this.patient.images = newFiles;
      this.files = newFiles;
      // this.files.forEach((element) => {
      //   console.log("element", element);
      //   this.patient.images.push(element)
      // });
    },
    cancelCreate() {
      this.$router.go(-1);
    },
    closePolyclinicPopup() {
      return (this as any).$refs["polyclinicPopup"].close();
    },
    addPolyclinic() {
      return (this as any).$refs["polyclinicPopup"].open();
    },
    savePolyclinic() {
      this.$awn.asyncBlock(
        this.$axios.post(this.$dataApi.clinics, this.polyclinic),
        (e: any) => {
          this.$awn.success();
        },
        (e: any) => {
          this.$awn.alert();
        }
      );
      this.closePolyclinicPopup();
    },
    savePatient() {
      const patient = new FormData();
      this.patient.images = this.files.forEach((item) => item);

      // this.files.forEach((element) => {
      //   console.log(this.patient.images.push(element));
      //   // this.patient.images.push(element)
      // });

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
      // console.log("savePatient", this.files);

      let result = this.$refs["patientForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios({
            method: "post",
            url: this.$dataApi.applicants,
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

      // let result = this.$refs["patientForm"].instance.validate();
      // if (result.isValid) {
      //   (this as any).$awn.asyncBlock(
      //     this.$axios.post(this.$dataApi.applicants, this.patient),
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
    optionChanged(e) {
      this.regionIdFilter = e.value;
      this.cityIdFilter = e.value;
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  row-gap: 20px;
}

.create-new-patient {
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

.btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card-number-wrapper {
  display: flex;
  align-items: center;
  column-gap: 32px;
}

.polyclinic-list-btn {
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
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

.add-note-btn {
  padding: 12px 30px;
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

.polyclinic-btn-wrapper {
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
  .create-new-patient {
    padding: 12px 50px;
  }

  .save-btn {
    padding: 14px 30px;
  }
}

@media all and (max-width: 730px) {
  .create-new-patient {
    display: none;
  }
}
</style>
