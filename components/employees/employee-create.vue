<template>
  <div class="employee-create-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="create-new-employee">
          {{ $t("employeePage.newEmployee") }}
        </button>
        <button @click="saveEmployee" class="save-btn panel-btn">
          {{ $t("employeePage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("employeePage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <div class="widget-container">
        <div
          id="dropzone-external"
          class="flex-box"
          :class="[
            isDropZoneActive
              ? 'dx-theme-accent-as-border-color dropzone-active'
              : 'dx-theme-border-color',
          ]"
        >
          <img
            id="dropzone-image"
            :src="imageSource"
            v-if="imageSource"
            alt=""
          />
          <div id="dropzone-text" class="flex-box" v-if="textVisible">
            <div>
              {{ $t("employeePage.fileUploader") }}
            </div>
          </div>
        </div>
        <DxFileUploader
          id="file-uploader"
          accept="image/*"
          name="image"
          :value.sync="files"
          dialog-trigger="#dropzone-external"
          drop-zone="#dropzone-external"
          :multiple="false"
          :allowed-file-extensions="allowedFileExtensions"
          upload-mode="instantly"
          :upload-headers="uploaderHeaders"
          :upload-url="url"
          :visible="false"
          @drop-zone-enter="onDropZoneEnter"
          @drop-zone-leave="onDropZoneLeave"
          @uploaded="onUploaded"
          @progress="onProgress"
          @upload-started="onUploadStarted"
        />
      </div>

      <DxForm
        ref="employeeForm"
        :form-data.sync="employee"
        :read-only="false"
        @initialized="saveFormInstance"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem>
            <DxSimpleItem
              data-field="userName"
              data-type="string"
              editor-type="dxTextBox"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.login')" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="lastNamre"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.lastName')" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="firstName"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.firstName')" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="midelName"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.surname')" />
            </DxSimpleItem>

            <DxEmptyItem />
            <DxEmptyItem />
            <DxEmptyItem />

            <DxSimpleItem
              data-field="phone"
              data-type="string"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.phoneNumber')" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem css-class="group-form">
            <DxSimpleItem template="workingDaysText" />
            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[0].dayChecked"
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel location="right" :text="$t('employeePage.monday')" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[0].day"
                editor-type="number"
                :editor-options="mondayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[0].startDate"
                editor-type="dxDateBox"
                :editor-options="mondayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[0].endDate"
                editor-type="dxDateBox"
                :editor-options="mondayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>

            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[1].dayChecked"
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel location="right" :text="$t('employeePage.tuesday')" />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[1].day"
                editor-type="number"
                :editor-options="tuesdayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[1].startDate"
                editor-type="dxDateBox"
                :editor-options="tuesdayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[1].endDate"
                editor-type="dxDateBox"
                :editor-options="tuesdayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>

            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[2].dayChecked"
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel
                  location="right"
                  :text="$t('employeePage.wednesday')"
                />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[2].day"
                editor-type="number"
                :editor-options="wednesdayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[2].startDate"
                editor-type="dxDateBox"
                :editor-options="wednesdayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[2].endDate"
                editor-type="dxDateBox"
                :editor-options="wednesdayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>

            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[3].dayChecked"
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel location="right" :text="$t('employeePage.thursday')" />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[3].day"
                editor-type="number"
                :editor-options="thursdayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[3].startDate"
                editor-type="dxDateBox"
                :editor-options="thursdayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[3].endDate"
                editor-type="dxDateBox"
                :editor-options="thursdayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>

            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[4].dayChecked"
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel location="right" :text="$t('employeePage.friday')" />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[4].day"
                editor-type="number"
                :editor-options="fridayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[4].startDate"
                editor-type="dxDateBox"
                :editor-options="fridayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[4].endDate"
                editor-type="dxDateBox"
                :editor-options="fridayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>

            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[5].dayChecked"
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel location="right" :text="$t('employeePage.saturday')" />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[5].day"
                editor-type="number"
                :editor-options="saturdayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[5].startDate"
                editor-type="dxDateBox"
                :editor-options="saturdayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[5].endDate"
                editor-type="dxDateBox"
                :editor-options="saturdayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>
            <DxGroupItem :col-count="8">
              <DxSimpleItem
                data-field="workingDays[6].dayChecked"
                :editor-options="checkBoxDisabled"
                editor-type="dxCheckBox"
                css-class="week-days-checkbox"
                :col-span="1"
              >
                <DxLabel location="right" :text="$t('employeePage.sunday')" />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[6].day"
                editor-type="number"
                :editor-options="sundayOptions"
                :col-span="1"
              >
                <DxLabel text=" " />
              </DxSimpleItem>

              <DxSimpleItem
                data-field="workingDays[6].startDate"
                editor-type="dxDateBox"
                :editor-options="sundayStartDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
              <DxSimpleItem
                data-field="workingDays[6].endDate"
                editor-type="dxDateBox"
                :editor-options="sundayEndDateOptions"
                :col-span="3"
              >
                <DxLabel text=" " />
              </DxSimpleItem>
            </DxGroupItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="password" :editor-options="passwordOptions">
            <!-- <DxRequiredRule /> -->
            <DxLabel :text="$t('employeePage.password')" />
          </DxSimpleItem>

          <DxSimpleItem
            name="ConfirmPassword"
            data-field="confirPassword"
            :editor-options="confirmPasswordOptions"
          >
            <DxCompareRule
              :comparison-target="passwordComparison"
              :message="$t('employeePage.noMatch')"
            />
            <DxLabel :text="$t('employeePage.confirmPassword')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />
        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="cabinetId"
            data-type="string"
            editor-type="dxSelectBox"
            valueExpr="id"
            :editor-options="cabinetOptions"
          >
            <!-- <DxRequiredRule /> -->
            <DxLabel :text="$t('employeePage.cabinet')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="jobPositionId"
            data-type="string"
            editor-type="dxSelectBox"
            valueExpr="id"
            :editor-options="jobTitleOptions"
          >
            <!-- <DxRequiredRule /> -->
            <DxLabel :text="$t('employeePage.jobTitle')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="horizont-line" />

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="roleId"
            editor-type="dxSelectBox"
            valueExpr="id"
            displayExpr="name"
            :editor-options="accessGroupOptions"
          >
            <DxLabel :text="$t('employeePage.toleranceGroup')" />
          </DxSimpleItem>
        </DxGroupItem>

        <template #workingDaysText>
          <span>{{ $t("employeePage.workingDays") }}</span>
        </template>

        <template #horizont-line>
          <div class="horizont-line" />
        </template>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxEmptyItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
  DxGroupItem,
  DxCompareRule,
} from "devextreme-vue/form";
import Validator from "devextreme/ui/validator";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import DxTagBox from "devextreme-vue/tag-box";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { IEmployee } from "~/infrastructure/interfaces/administration/IEmployee";
import { Employee } from "~/infrastructure/classes/administration/Employee";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxEmptyItem,
    DxButtonItem,
    DxGroupItem,
    DxLabel,
    DxRequiredRule,
    DxCheckBox,
    DxTagBox,
    DxFileUploader,
    DxCompareRule,
    Validator,
  },
  data() {
    let employee: IEmployee = new Employee();

    return {
      employee,
      image: null,
      imageSrc: "",
      formInstance: null,
      textVisible: true,
      isDropZoneActive: false,
      imageSource: "",
      progressVisible: false,
      progressValue: 0,
      allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"],
      files: [],
      disabled: true,
    };
  },
  computed: {
    checkBoxDisabled() {
      return {
        disabled: this.disabled,
      };
    },
    url() {
      return `${this.$axios.defaults.baseURL}${this.$dataApi.images}`;
    },
    uploaderHeaders() {
      return {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    },
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        displayExpr: "name",
      });
    },
    jobTitleOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.jobPositions,
        displayExpr: "name",
      });
    },
    accessGroupOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.roles,
        // displayExpr: "accessGroup",
      });
    },
    mondayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    mondayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    tuesdayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    tuesdayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    wednesdayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    wednesdayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    thursdayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    thursdayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    fridayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    fridayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    saturdayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    saturdayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    sundayStartDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    sundayEndDateOptions() {
      return new DateBoxProperties({
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
      });
    },
    mondayOptions() {
      return new NumberBoxProperties({
        value: 1,
      });
    },
    tuesdayOptions() {
      return new NumberBoxProperties({
        value: 2,
      });
    },
    wednesdayOptions() {
      return new NumberBoxProperties({
        value: 3,
      });
    },
    thursdayOptions() {
      return new NumberBoxProperties({
        value: 4,
      });
    },
    fridayOptions() {
      return new NumberBoxProperties({
        value: 5,
      });
    },
    saturdayOptions() {
      return new NumberBoxProperties({
        value: 6,
      });
    },
    sundayOptions() {
      return new NumberBoxProperties({
        value: 7,
      });
    },
    textBoxOptions() {
      return new TextBoxProperties();
    },
    numberBoxOptions() {
      return new NumberBoxProperties();
    },
    passwordOptions() {
      return {
        mode: "password",
        onValueChanged: () => {
          const editor = this.formInstance.getEditor("ConfirmPassword");
          // if (editor.option("value")) {
          //   const instance = Validator.getInstance(editor.element());
          //   instance.validate();
          // }
        },
        buttons: [
          {
            name: "password",
            location: "after",
            options: {
              icon: "/icons/svg/eye.svg",
              type: "default",
              onClick: () => this.changePasswordMode("password"),
            },
          },
        ],
      };
    },
    confirmPasswordOptions() {
      return {
        mode: "password",
        buttons: [
          {
            name: "password",
            location: "after",
            options: {
              icon: "/icons/svg/eye.svg",
              type: "default",
              onClick: () => this.changePasswordMode("ConfirmPassword"),
            },
          },
        ],
      };
    },
  },
  methods: {
    onDropZoneEnter(e: any) {
      if (e.dropZoneElement.id === "dropzone-external") {
        this.isDropZoneActive = true;
      }
    },
    onDropZoneLeave(e: any) {
      if (e.dropZoneElement.id === "dropzone-external") {
        this.isDropZoneActive = false;
      }
    },
    onUploaded(e: any) {
      const { file } = e;
      this.employee.imageId = JSON.parse(e.request.response).id;

      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      };
      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    },
    onProgress(e: any) {
      this.progressValue = (e.bytesLoaded / e.bytesTotal) * 100;
    },
    onUploadStarted() {
      this.imageSource = "";
      this.progressVisible = true;
    },
    cancelCreate() {
      this.$router.go(-1);
    },
    saveFormInstance(e) {
      this.formInstance = e.component;
    },
    changePasswordMode(name: any) {
      const editor = this.formInstance.getEditor(name);
      editor.option(
        "mode",
        editor.option("mode") === "text" ? "password" : "text"
      );
    },
    passwordComparison() {
      return this.employee.password;
    },
    saveEmployee() {
      let result = (this as any).$refs["employeeForm"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.post(this.$dataApi.users, this.employee),
          (e: any) => {
            (this as any).$awn.success();
            // this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e: any) => {
            (this as any).$awn.alert();
          }
        );
      }
    },
    triggerFile() {
      this.$refs.fileRef.click();
    },
    changeFile(event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
      this.image = file;
    },
  },
});
</script>
<style lang="scss" scoped>
.employee-create-wrapper {
  .create-new-employee {
    font-family: $fontFamily;
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

  .add-staff {
    font-weight: $bold-weight;
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
    background-color: $input-bg-color;
    cursor: pointer;
    margin-top: 10px;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  @media all and (max-width: 870px) {
    .create-new-employee {
      padding: 12px 50px;
    }

    .save-btn {
      padding: 14px 30px;
    }
  }

  @media all and (max-width: 730px) {
    .create-new-employee {
      display: none;
    }
  }
}

#dropzone-external {
  width: 230px;
  height: 230px;
  border-radius: 10px;
  background-color: $input-bg-color;
  border: none;
  padding: 10px;
}

#dropzone-external > * {
  pointer-events: none;
}

#dropzone-external.dropzone-active {
  border-style: solid;
}

#dropzone-image {
  max-width: 100%;
  max-height: 100%;
}

#upload-progress {
  display: flex;
  margin-top: 10px;
}

.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
