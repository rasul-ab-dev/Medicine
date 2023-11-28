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
        :form-data.sync="cerebralBlank"
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="cerebralArtery" />
            <DxSimpleItem
              :col-span="1"
              data-field="cerebralArtery"
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

        <DxGroupItem caption="Beýniniň öňki arteriýasy">
          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="right"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightFrontBrainArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />
          <DxEmptyItem />

          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="left"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftFrontBrainArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem caption="Beýniniň orta arteriýasy">
          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="right"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightMiddleBrainArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />
          <DxEmptyItem />

          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="left"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftMiddleBrainArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem caption="Beýniniň yzky arteriýasy">
          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="right"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightBackBrainArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />
          <DxEmptyItem />

          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="left"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftBackBrainArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem caption="Oňurga arteriýasy">
          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="right"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="rightSpineArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />
          <DxEmptyItem />

          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="left"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="leftSpineArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem caption="Esasy arteriýasy">
          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="right"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainRightArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />
          <DxEmptyItem />

          <DxGroupItem :col-count="15">
            <DxSimpleItem
              :col-span="1"
              css-class="vein-label"
              template="left"
            />

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArteryDiametr"
              editor-type="dxTextBox"
            >
              <DxLabel text="Diametr, mm" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArterySistol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, sistol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArteryDiastol"
              editor-type="dxTextBox"
            >
              <DxLabel text="V, Diastol sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArteryRi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ri" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArteryPi"
              editor-type="dxTextBox"
            >
              <DxLabel text="Pi" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArteryTamh"
              editor-type="dxTextBox"
            >
              <DxLabel text="TAMH sm/s" />
            </DxSimpleItem>

            <DxSimpleItem
              :col-span="2"
              data-field="mainLeftArteryContractionRate"
              editor-type="dxTextBox"
            >
              <DxLabel text="Daralmak derejesi" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

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

        <template #cerebralArtery>
          <span>
            Kelle beýni arteriýalarynyň transkranial dupleks skan barlagynyň
            beýany
          </span>
        </template>

        <template #right>
          <span> Sag </span>
        </template>

        <template #left>
          <span> Çep </span>
        </template>

        <DocumentEditorPopup
          v-model="documentEditorVisible"
          :data="documentEditorData"
          :orientation="orientation"
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
import { ICerebralArtery } from "~/infrastructure/interfaces/administration/ICerebralArtery";
import { CerebralArtery } from "~/infrastructure/classes/administration/CerebralArtery";
import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";
import { IApplicationObservation } from "~/infrastructure/interfaces/IApplicationObservation";
import { ApplicationObservationResult } from "~/infrastructure/classes/administration/ApplicationObservationResult";
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
    let cerebralBlank: ICerebralArtery = new CerebralArtery(
      JSON.parse(this.currentBlank.observationResult)
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    let applicationObservation: IApplicationObservation = this.currentBlank;
    return {
      cerebralBlank,
      observationResult,
      applicationObservation,
      documentEditorData: null,
      documentEditorVisible: false,
      orientation: "landscape",
    };
  },
  mounted() {
    this.cerebralBlank.cabinet = this.currentBlank.cabinetId;
    this.cerebralBlank.date = this.currentBlank.observationDate;
    this.cerebralBlank.patient = this.currentBlank.applicantId;
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
        parseGetToken?.UserId == this.cerebralBlank.doctor ||
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
        this.cerebralBlank
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

    // printPage() {
    //   // Устанавливаем альбомный режим перед печатью
    //   const printStyle = document.createElement("style");
    //   printStyle.innerHTML = `
    //     @media print {
    //       @page {
    //         size: landscape;
    //       }
    //     }
    //   `;

    //   // Вставляем стиль в head документа
    //   document.head.appendChild(printStyle);

    //   // Вызываем окно печати
    //   window.print();

    //   // Удаляем стиль после печати
    //   document.head.removeChild(printStyle);
    // },
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