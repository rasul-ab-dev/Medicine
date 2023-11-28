<template>
  <div class="employee-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="employee-id">{{ $route.params.id }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveEmployee" class="save-btn panel-btn">
            {{ $t("employeePage.save") }}
          </button>
          <button @click="openPopup" class="cancel-btn panel-btn">
            {{ $t("employeePage.cancel") }}
          </button>
        </div>
        <button @click="cancelCreate" v-else class="back-btn panel-btn">
          {{ $t("employeePage.cancel") }}
        </button>
      </div>
      <button
        v-if="permissionEdit"
        @click="editHandler"
        class="edit-btn panel-btn"
      />
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
            <!-- <span>Gerekli faýly çekip goýuň</span>
            <span>... ýa-da ýerine bir faýl gözlemek üçin basyň.</span> -->
            <div>
              {{ $t("employeePage.fileUploader") }}
            </div>
          </div>
        </div>
        <DxFileUploader
          id="file-uploader"
          dialog-trigger="#dropzone-external"
          drop-zone="#dropzone-external"
          accept="image/*"
          :multiple="false"
          name="image"
          :value.sync="files"
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
        ref="form"
        :form-data="employee"
        :show-colon-after-label="false"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem>
            <DxSimpleItem
              data-field="userName"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.login')" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="lastNamre"
              data-type="string"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.lastName')" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="firstName"
              textBoxOptions
              data-type="string"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.firstName')" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="midelName"
              data-type="string"
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

            <DxEmptyItem />
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
                editor-type="dxCheckBox"
                :editor-options="checkBoxDisabled"
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
          <DxSimpleItem
            data-field="cabinetId"
            editor-type="dxSelectBox"
            :editor-options="cabinetOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('employeePage.cabinet')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="jobPositionId"
            editor-type="dxSelectBox"
            :editor-options="jobTitleOptions"
          >
            <DxRequiredRule />
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
            :editor-options="accessGroupOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('employeePage.toleranceGroup')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <!-- <DxSimpleItem
          data-field="status"
          editor-type="dxCheckBox"
          css-class="checkbox"
        >
          <DxLabel location="right" :text="$t('employeePage.isActive')" />
        </DxSimpleItem> -->

        <template #horizont-line>
          <div class="horizont-line" />
        </template>

        <template #workingDaysText>
          <span>{{ $t("employeePage.workingDays") }}</span>
        </template>
      </DxForm>
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
          <button @click="cancelCreate">{{ $t("commonText.yes") }}</button>
          <button @click="closePopup">{{ $t("commonText.no") }}</button>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
import Popup from "~/components/page/popup.vue";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import DxTagBox from "devextreme-vue/tag-box";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { IEmployee } from "~/infrastructure/interfaces/administration/IEmployee";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
export default Vue.extend({
  components: {
    Popup,
    DxForm,
    DxGroupItem,
    DxSimpleItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxCheckBox,
    DxTagBox,
    DxFileUploader,
  },
  props: {
    currentEmployee: {
      type: Object,
      required: true,
    },
  },
  data() {
    let employee: IEmployee = this.currentEmployee;
    return {
      employee,
      textVisible: true,
      image: null,
      imageSrc: "",

      isDropZoneActive: false,
      imageSource: "",
      progressVisible: false,
      progressValue: 0,
      allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"],
      files: [],
      disabled: true,
      readOnly: true,
    };
  },
  async created() {
    if (this.employee.imageId != null) {
      let { data } = await this.$axios.get(
        `${this.$dataApi.images}/${this.employee.imageId}`
      );
      this.imageSource = `${this.$axios.defaults.baseURL}/${data.path}`;
      this.textVisible = false;
    }
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
    permissionEdit() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.admin ||
        parseGetToken?.UsersController?.includes("FullAccess") ||
        parseGetToken?.UsersController?.includes("Update");

      return permission;
    },
    toogleButtons(): boolean {
      return this.readOnly === true ? false : true;
    },
    mondayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    mondayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    tuesdayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    tuesdayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    wednesdayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    wednesdayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    thursdayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    thursdayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    fridayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    fridayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    saturdayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    saturdayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    sundayStartDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
    },
    sundayEndDateOptions() {
      return {
        dateSerializationFormat: "HH:mm:ss",
        type: "time",
        readOnly: this.readOnly,
      };
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

    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        readOnly: this.readOnly,
        valueExpr: "id",
      });
    },
    jobTitleOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.jobPositions,
        readOnly: this.readOnly,
        valueExpr: "id",
      });
    },
    examinationOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.observations,
        readOnly: this.readOnly,
        valueExpr: "id",
      });
    },
    useFormOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.blanks,
        displayExpr: "forms",
        valueExpr: "id",
        readOnly: this.readOnly,
      });
    },
    accessGroupOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.roles,
        valueExpr: "id",
        readOnly: this.readOnly,
      });
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
    timeOptions() {
      return new DateBoxProperties({
        type: "time",
      });
    },
  },
  methods: {
    onDropZoneEnter(e) {
      if (e.dropZoneElement.id === "dropzone-external") {
        this.isDropZoneActive = true;
      }
    },
    onDropZoneLeave(e) {
      if (e.dropZoneElement.id === "dropzone-external") {
        this.isDropZoneActive = false;
      }
    },
    onUploaded(e) {
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
    onProgress(e) {
      this.progressValue = (e.bytesLoaded / e.bytesTotal) * 100;
    },
    onUploadStarted() {
      this.imageSource = "";
      this.progressVisible = true;
    },

    cancelCreate() {
      this.$router.go(-1);
    },
    editHandler() {
      this.readOnly = !this.readOnly;
    },
    openPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closePopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    saveEmployee() {
      let result = (this as any).$refs["form"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.users}/${this.employee.id}`,
            this.employee
          ),
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
  },
});
</script>
<style lang="scss" scoped>
.employee-id {
  padding: 12px 180px;
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

.btn-wrapper {
  display: flex;
  align-items: center;
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

.widget-container > span {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
}

#dropzone-image {
  max-width: 100%;
  max-height: 100%;
}

#dropzone-text > span {
  font-weight: 100;
  opacity: 0.5;
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
