<template>
  <div class="profile-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="my-profile">{{ $t("profile.myProfile") }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveEmployee" class="save-btn panel-btn">
            {{ $t("commonText.save") }}
          </button>
          <button @click="openConfirmPopup" class="cancel-btn panel-btn">
            {{ $t("commonText.cancel") }}
          </button>
        </div>
      </div>

      <div class="change-password-wrapper">
        <!-- <button
          v-if="toogleChangePassword"
          @click="openPasswordPopup"
          class="change-password-btn panel-btn"
        >
          Изменить пароль
        </button> -->
        <button @click="editHandler" class="edit-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="widget-container">
        <div
          id="dropzone-external"
          class="flex-box"
          :class="[
            isDropZoneActive
              ? 'dx-theme-accent-as-border-color dropzone-acimageSourcetive'
              : 'dx-theme-border-color',
          ]"
        >
          <img
            id="dropzone-image"
            :src="imageSource"
            v-if="imageSource"
            alt=""
          />
          <DxProgressBar
            id="upload-progress"
            :min="0"
            :max="100"
            width="30%"
            :show-status="false"
            :visible="progressVisible"
            :value="progressValue"
          />
        </div>
        <DxFileUploader
          id="file-uploader"
          dialog-trigger="#dropzone-external"
          drop-zone="#dropzone-external"
          :multiple="false"
          :allowed-file-extensions="allowedFileExtensions"
          upload-mode="instantly"
          :upload-url="url"
          :visible="false"
          :upload-headers="uploaderHeaders"
          @drop-zone-enter="onDropZoneEnter"
          @drop-zone-leave="onDropZoneLeave"
          @uploaded="onUploaded"
          @progress="onProgress"
          @upload-started="onUploadStarted"
        />
      </div>
      <DxForm
        ref="profileForm"
        :form-data.sync="profile"
        @initialized="saveFormInstance"
        :read-only="false"
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
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.login')" />
            </DxSimpleItem>

            <DxEmptyItem itemType="empty"/>

            <DxSimpleItem
              data-field="lastNamre"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.lastName')" />
            </DxSimpleItem>

            <DxEmptyItem itemType="empty" />

            <DxSimpleItem
              data-field="firstName"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.firstName')" />
            </DxSimpleItem>

            <DxEmptyItem itemType="empty" />

            <DxSimpleItem
              data-field="midelName"
              data-type="string"
              editor-type="dxTextBox"
              :editor-options="textBoxOptions"
            >
              <DxRequiredRule />
              <DxLabel :text="$t('employeePage.surname')" />
            </DxSimpleItem>

            <DxEmptyItem itemType="empty" />
            <DxEmptyItem itemType="empty" />
            <DxEmptyItem itemType="empty" />

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

        <DxEmptyItem itemType="empty" />
        <DxSimpleItem template="horizont-line" />
        <DxEmptyItem itemType="empty" />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="password" :editor-options="passwordOptions">
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

        <DxEmptyItem itemType="empty" />

        <DxSimpleItem template="horizont-line" />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="cabinetId"
            data-type="string"
            editor-type="dxSelectBox"
            valueExpr="id"
            :editor-options="cabinetOptions"
          >
            <DxLabel :text="$t('employeePage.cabinet')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="jobPositionId"
            data-type="string"
            editor-type="dxSelectBox"
            valueExpr="id"
            :editor-options="jobTitleOptions"
          >
            <DxLabel :text="$t('employeePage.jobTitle')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem itemType="empty" />

        <template #workingDaysText>
          <span>{{ $t("employeePage.workingDays") }}</span>
        </template>

        <template #horizont-line>
          <div class="horizont-line" />
        </template>
      </DxForm>
    </div>

    <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>Вы хотите отменить внесенные изменения?</span>
        <div class="confirm-btn">
          <button @click="confirmEditor">{{ $t("commonText.yes") }}</button>
          <button @click="closeConfirmPopup">{{ $t("commonText.no") }}</button>
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
  DxCompareRule,
} from "devextreme-vue/form";
import Validator from "devextreme/ui/validator";
import Popup from "~/components/page/popup.vue";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import { DxProgressBar } from "devextreme-vue/progress-bar";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import { IProfile } from "~/infrastructure/interfaces/administration/IProfile";
import { Profile } from "~/infrastructure/classes/administration/Profile";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    Popup,
    DxFileUploader,
    DxProgressBar,
    DxCompareRule,
    Validator,
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    let profile: IProfile = this.currentUser;
    let userId = localStorage.getItem("userId");
    return {
      profile,
      userId,
      disabled: true,
      readOnly: true,

      image: null,
      imageSrc: "",

      isDropZoneActive: false,
      imageSource: "",
      progressVisible: false,
      progressValue: 0,
      allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"],
    };
  },
  async created() {
    if (this.profile.imageId != null) {
      let { data } = await this.$axios.get(
        `${this.$dataApi.images}/${this.profile.imageId}`
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
        parseGetToken.UsersController?.includes("FullAccess") ||
        parseGetToken.UsersController?.includes("Update");

      return permission;
    },
    toogleButtons(): boolean {
      return this.readOnly === true ? false : true;
    },
    toogleChangePassword(): boolean {
      return this.readOnly === false ? false : true;
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
        displayExpr: "name",
        readOnly: this.readOnly,
      });
    },
    jobTitleOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.jobPositions,
        displayExpr: "name",
        readOnly: this.readOnly,
      });
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
        readOnly: this.readOnly,
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
        readOnly: this.readOnly,
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
    confirmEditor() {
      this.$router.go(-1);
    },
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
      this.profile.imageId = JSON.parse(e.request.response).id;

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
    openConfirmPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closeConfirmPopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    openPasswordPopup() {
      return (this as any).$refs["passwordPopup"].open();
    },
    closePasswordPopup() {
      return (this as any).$refs["passwordPopup"].close();
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
      return this.profile.password;
    },
    saveEmployee() {
      let result = (this as any).$refs["profileForm"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.users}/${this.userId}`,
            this.profile
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
  },
});
</script>
<style lang="scss" scoped>
.profile-wrapper {
  .my-profile {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
  }

  .hidden-buttons {
    display: flex;
    column-gap: 10px;
  }

  .change-password-wrapper {
    display: flex;
    column-gap: 30px;
  }

  .component-wrapper {
    padding: 30px 50px;
    .personal-photo {
      display: none;
    }
  }

  .change-password-btn {
    padding: 14px 32px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }

  .panel-btn:hover {
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

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media all and (max-width: 725px) {
    .my-profile {
      padding: 14px 50px;
    }
  }
}

.save-password,
.cancel-password {
  padding: 0.9rem 3rem;
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
.password-btn {
  display: flex;
  justify-content: center;
  column-gap: 40px;
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
}
</style>
