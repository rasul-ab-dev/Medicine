<template>
  <div>
    <div class="form-wrapper fix-header">
      <div class="buttons-wrapper">
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
        <button
          v-if="permissionControler"
          @click="saveBlank"
          class="back-btn panel-btn"
        >
          {{ $t("commonText.save") }}
        </button>
      </div>
      <div class="panel-input-wrapper">
        <div class="view-label">
          <span>Görnüşiň şertli belligi</span>
          <input class="input" type="text" />
        </div>
        <div class="organization-label">
          <span>Edaranyň şertli belligi</span>
          <input class="input" type="text" />
        </div>
        <button v-if="permissionControler" class="print-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="bulletin-wrapper">
        <div class="bulletin-header-text">
          <p>Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi</p>
          <span>Şikesleri bejeriş Halkara merkezi</span>
        </div>
        <img class="bulletin-logo" src="~/assets/images/logo.png" alt="" />
        <p>
          N 238/h görnüşli saglygy goraýyş resminamasy <br />
          Türkmenistanyň SG we DS ministrligi tarapyndan <br />
          2006ý. Noýabr aýynyň “18” <br />
          N 230 buýruk esasynda tassyklandy
        </p>
      </div>

      <DxForm
        :form-data.sync="bloodResusFactor"
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="4">
            <DxSimpleItem :col-span="2" template="blood-group-result" />
            <DxSimpleItem
              :col-span="2"
              data-field="bloodResusFactor"
              editor-type="dxTextBox"
            >
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem :col-count="2">
            <DxEmptyItem :col-span="1" />
            <DxSimpleItem
              :col-span="1"
              data-field="date"
              editor-type="dxDateBox"
            >
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="payment" editor-type="dxTextBox">
            <DxRequiredRule />
            <DxLabel text="Töleg belligi" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="cabinetName"
            editor-type="dxSelectBox"
            :editor-options="cabinetOptions"
          >
            <DxRequiredRule />
            <DxLabel text="Kabinet" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="patientName"
            editor-type="dxSelectBox"
            :editor-options="patientOptions"
          >
            <DxRequiredRule />
            <DxLabel text="Näsag" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem template="blood-normal" />
        <DxGroupItem :col-count="4">
          <DxSimpleItem
            :col-span="3"
            data-field="departmentDoctor"
            editor-type="dxTextBox"
          >
            <DxLabel location="left" text="Bölümiň lukmany (FAA)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="cabinetName"
            editor-type="dxTextBox"
          >
            <DxLabel location="left" text="goly" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />
        <DxSimpleItem template="examination-result" />
        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="blood-group"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="bloodGroup"
            editor-type="dxTextBox"
          >
            <DxLabel location="right" text="mmol/l" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem css-class="blank-label" template="resus-factor" />
          <DxSimpleItem
            :col-span="6"
            data-field="resusFactor"
            editor-type="dxTextBox"
          >
            <DxLabel location="right" text="mmol/l" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="3">
            <DxSimpleItem
              :col-span="2"
              data-field="resultDate"
              editor-type="dxDateBox"
            >
              <DxLabel text=" " />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="time"
              editor-type="dxDateBox"
              :editor-options="timeOptions"
            >
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="doctorName"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxLabel location="left" text="Lukman" />
          </DxSimpleItem>
        </DxGroupItem>

        <template #blood-group-result>
          <span>GANYŇ TOPARY WE REZUS-FAKTOR BARLAGYNYŇ NETIJESI</span>
        </template>

        <template #blood-normal>
          <span>Çäk edilen ganyň topary (bölümde kesgitlenen)</span>
        </template>

        <template #examination-result>
          <span class="inspection-result">Barlagyň netijesi</span>
        </template>

        <template #blood-group>
          <span>Ganyň topary</span>
        </template>

        <template #resus-factor>
          <span>Rezus-faktor</span>
        </template>

        <template #mol>
          <span>mmol/l</span>
        </template>
      </DxForm>
      <DxFileUploader
        :multiple="true"
        :allowed-file-extensions="['.jpg', '.jpeg', '.png']"
        upload-url="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
        upload-mode="useButtons"
      />
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
import DxTextArea from "devextreme-vue/text-area";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import { IBloodResusFactor } from "~/infrastructure/interfaces/administration/IBloodResusFactor";
import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";
import { ApplicationObservationResult } from "~/infrastructure/classes/administration/ApplicationObservationResult";
import DxFileUploader from "devextreme-vue/file-uploader";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxGroupItem,
    DxEmptyItem,
    DxTextArea,
    DxFileUploader
  },
  props: {
    currentBlank: {
      type: Object,
    },
  },
  data() {
    let bloodResusFactor: IBloodResusFactor = JSON.parse(
      this.currentBlank.observationResult
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    return {
      bloodResusFactor,
      observationResult,
    };
  },
  computed: {
    timeOptions() {
      return new DateBoxProperties({
        type: "time",
      });
    },
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        displayExpr: "name",
      });
    },
    patientOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.applicants,
        displayExpr: this.patientDisplayName,
      });
    },
    doctorOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.users,
        displayExpr: this.formatDisplayName,
      });
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);

      let permission =
        parseGetToken?.UserId == this.bloodResusFactor.doctor ||
        parseGetToken?.UserName === "Administrator";

      return permission;
    },
  },
  methods: {
    formatDisplayName(item) {
      return `${item?.lastNamre} ${item?.firstName} ${item?.midelName}`;
    },
    patientDisplayName(item) {
      return `${item?.lastName} ${item?.firstName} ${item?.middleName}`;
    },
    backHandler() {
      this.$router.go(-1);
    },
    saveBlank() {
      let result = this.$refs["blankForm"].instance.validate();
      this.observationResult.id = this.currentBlank.id;
      this.observationResult.applicationObservationResult = JSON.stringify(
        this.bloodResusFactor
      );
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.applicationObservations}/result/${this.observationResult.id}`,
            this.observationResult
          ),
          (e: any) => {
            this.$awn.success();
            // this.$emit("successedSaved", e.data);
          },
          (e: any) => {
            this.$awn.alert();
          }
        );
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

.panel-input-wrapper {
  display: flex;
  column-gap: 30px;
  width: 60%;

  .organization-label,
  .view-label {
    display: flex;
    align-items: center;
    width: 100%;
    column-gap: 10px;

    span {
      white-space: nowrap;
    }
  }

  .input {
    width: 80%;
    background-color: $custom-main-color;
  }
}

.bulletin-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-bottom: 10px;
}

.bulletin-header-text {
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    margin-top: 20px;
  }
}

p {
  font-weight: $bold-weight;
}

.bulletin-logo {
  width: 102px;
  height: 102px;
}

.serach-input-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 20px 0;

  .serach-input {
    width: 48%;
    background-image: url("@/assets/images/magnifyingGlass.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: 24px;

    &:focus {
      background-image: none;
    }
  }
}

.inspection-result {
  display: block;
  text-align: center;
}
</style>
