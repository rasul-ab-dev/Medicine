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
        <button v-if="permissionControler" @click="print" class="print-btn" />
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
        :form-data.sync="aorta"
        ref="blankForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="legs-artery" />
            <DxSimpleItem
              :col-span="1"
              data-field="aorta"
              editor-type="dxTextBox"
            >
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem :col-count="3">
            <DxEmptyItem :col-span="1" />
            <DxSimpleItem
              :col-span="2"
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
            data-field="cabinet"
            editor-type="dxSelectBox"
            :editor-options="cabinetOptions"
          >
            <DxLabel text="Kabinet" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="patient"
            editor-type="dxSelectBox"
            :editor-options="patientOptions"
          >
            <DxLabel text="Näsag" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="10">
          <DxEmptyItem :col-span="2" />
          <DxEmptyItem />
          <DxSimpleItem :col-span="3" template="right-side" />
          <DxEmptyItem :col-span="2" />
          <DxSimpleItem :col-span="3" template="left-side" />
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="vein-label"
            template="outside-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightCommonSleepArteryDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightCommonSleepArterySpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightCommonSleepArteryContraction">
              <DxLabel text="Gysylmanyň dowamy" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftCommonSleepArteryDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftCommonSleepArterySpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftCommonSleepArteryContraction">
              <DxLabel text="Gysylmanyň dowamy" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="common-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightInnerSleepArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightInnerSleepArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightInnerSleepArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftInnerSleepArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftInnerSleepArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftInnerSleepArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="front-hip-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightOutsideSleepArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightOutsideSleepArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightOutsideSleepArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftOutsideSleepArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftOutsideSleepArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftOutsideSleepArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="knee-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightSpineArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightSpineArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightSpineArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftSpineArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftSpineArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftSpineArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="front-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightSubclavianArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightSubclavianArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightSubclavianArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftSubclavianArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftSubclavianArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftSubclavianArteryContraction">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="result"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Netije" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="doctor"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxLabel location="left" text="Lukman" />
          </DxSimpleItem>
        </DxGroupItem>

        <template #legs-artery>
          <span>
            AORTANYŇ ÝAÝYNYŇ ŞAHALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY
          </span>
        </template>

        <template #outside-artery>
          <span>Umumy uky arteriýasy</span>
        </template>

        <template #common-artery>
          <span>Içki uky arteriýasy</span>
        </template>

        <template #front-hip-artery>
          <span>Daşky uky arteriýasy</span>
        </template>

        <template #knee-artery>
          <span>Oňurga arteriýasy</span>
        </template>

        <template #front-artery>
          <span>Ýaýjykasty arteriýasy</span>
        </template>

        <template #back-artery>
          <span>Yzky tibialis arteriýasy</span>
        </template>

        <template #hip-index>
          <span>But-topuk indeksi</span>
        </template>

        <template #right-side>
          <span>Sag</span>
        </template>

        <template #left-side>
          <span>Çep</span>
        </template>

        <DocumentEditorPopup
          v-model="documentEditorVisible"
          :data="documentEditorData"
        />
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
import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";
import { IApplicationObservation } from "~/infrastructure/interfaces/IApplicationObservation";
import { ApplicationObservationResult } from "~/infrastructure/classes/administration/ApplicationObservationResult";
import { IAorta } from "~/infrastructure/interfaces/administration/IAorta";
import { Aorta } from "~/infrastructure/classes/administration/Aorta";
import DocumentEditorPopup from "~/components/documentEditor/editor-popup.vue";
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
    DocumentEditorPopup,
    DxFileUploader
  },
  props: {
    currentBlank: {
      type: Object,
    },
  },
  data() {
    let aorta: IAorta = new Aorta(
      JSON.parse(this.currentBlank.observationResult)
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    let applicationObservation: IApplicationObservation = this.currentBlank;
    return {
      aorta,
      observationResult,
      applicationObservation,
      documentEditorData: null,
      documentEditorVisible: false,
    };
  },
  mounted() {
    this.aorta.cabinet = this.currentBlank.cabinetId;
    this.aorta.doctor = this.currentBlank.userId;
    this.aorta.date = this.currentBlank.observationDate;
    this.aorta.patient = this.currentBlank.applicantId;
  },
  computed: {
    cabinetOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.cabinets,
        displayExpr: "name",
        readOnly: true,
      });
    },
    patientOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.applicants,
        displayExpr: "fullName",
        readOnly: true,
      });
    },
    doctorOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.users,
        displayExpr: "fullName",
        readOnly: true,
      });
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);

      let permission =
        parseGetToken?.UserId == this.aorta.doctor ||
        parseGetToken?.UserName === "Administrator";

      return permission;
    },
  },
  methods: {
    // formatDisplayName(item) {
    //   return `${item?.lastNamre} ${item?.firstName} ${item?.midelName}`;
    // },
    // patientDisplayName(item) {
    //   return `${item?.lastName} ${item?.firstName} ${item?.middleName}`;
    // },
    backHandler() {
      this.$router.go(-1);
    },
    saveBlank() {
      let result = this.$refs["blankForm"].instance.validate();
      this.observationResult.id = this.currentBlank.id;
      this.observationResult.applicationObservationResult = JSON.stringify(
        this.aorta
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
    print() {
      if (this.documentEditorData === null) {
        this.$awn.asyncBlock(
          this.$axios.get(
            `${this.$dataApi.applicationObservations}/html?id=${this.currentBlank.id}&blankType=${this.currentBlank.blankType}`
          ),
          (e) => {
            this.$awn.success();
            this.documentEditorData = e.data;
            this.documentEditorVisible = true;
          },
          (e) => {
            this.$awn.alert();
          }
        );
      } else {
        this.documentEditorVisible = true;
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
</style>
    