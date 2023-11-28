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
        :form-data.sync="echocardiography"
        ref="blankForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="5">
            <DxSimpleItem
              :col-span="2"
              css-class="blank-label"
              template="echocg"
            />
            <DxSimpleItem
              :col-span="3"
              data-field="echocardiography"
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

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="aorta"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="aorta"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="wall" />
          <DxSimpleItem
            :col-span="6"
            data-field="walls"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="prisons"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="prisons"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="10">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="openingOfPrisons"
          />
          <DxSimpleItem
            :col-span="4"
            data-field="prisonsOpen"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="openingOfPrisonsArea"
          />

          <DxSimpleItem
            :col-span="3"
            data-field="prisonsOpenCentimeter"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="circle"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="ringMillimeter"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftHeart"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="leftHeart"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="mitralValve"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="mitralValve"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="prisons"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="mitralPrisons"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="10">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="movementOfPrisons"
          />
          <DxSimpleItem
            :col-span="4"
            data-field="prisonsMovement"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="openingOfPrisonsArea"
          />

          <DxSimpleItem
            :col-span="3"
            data-field="prisonsMovementCentimeter"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="circle"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="mitralRingMillimeter"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftHeartStomach"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="leftHeartStomach"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="4">
          <DxSimpleItem :col-span="1" data-field="sso" editor-type="dxTextBox">
            <DxLabel location="top" text="SSÖ(mm)" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" data-field="sdo" editor-type="dxTextBox">
            <DxLabel location="top" text="SDÖ(mm)" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" data-field="ssg" editor-type="dxTextBox">
            <DxLabel location="top" text="SSG(mm)" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" data-field="sdg" editor-type="dxTextBox">
            <DxLabel location="top" text="SDG(mm)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="4">
          <DxSimpleItem :col-span="1" data-field="uc" editor-type="dxTextBox">
            <DxLabel location="top" text="UÇ(mm)" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" data-field="ef" editor-type="dxTextBox">
            <DxLabel location="top" text="EF(%)" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" data-field="sf" editor-type="dxTextBox">
            <DxLabel location="top" text="SF(%)" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" data-field="yu" editor-type="dxTextBox">
            <DxLabel location="top" text="YU" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftStomachWrinkle"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="leftStomachWrinkle"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="stomachBarrier"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="stomachBarrier"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="stomachBarrierMovement"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="stomachBarrierMovement"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftStomachBaçkWall"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="leftStomachBaçkWall"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftStomachViolation"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="leftStomachViolation"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="rightHeart"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="rightHeart"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="rightHeartStomach"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="rightHeartStomach"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="tricuspidValve"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="tricuspidValve"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="10">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="prisons"
          />
          <DxSimpleItem
            :col-span="4"
            data-field="tricuspidPrisons"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="prisonCircle"
          />
          <DxSimpleItem
            :col-span="3"
            data-field="tricuspidRings"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="pulmonaryArtery"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="pulmonaryArtery"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            :col-span="1"
            data-field="pulmonaryValve"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Öýken klapan" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="pulmonaryPrisons"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="gabalary" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="pulmonaryRings"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="halka(mm)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="pericardium"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="pericardium"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          :col-span="1"
          css-class="blank-label doppler"
          template="dopplerography"
        />

        <DxGroupItem :col-count="3" caption="Aortal klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="aortalSystolicFlow"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Sistola akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="aortalRegurgitation"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="aortalGradient"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="3" caption="Mitral klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="mitralDiastolFlow"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Diastola akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="mitralRegurgitation"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="mitralGradient"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="3" caption="Trikuspidal klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="tricuspidDiastolFlow"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Diastola akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="tricuspidRegurgitation"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="tricuspidGradient"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="3" caption="Öýken klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="pulmonaryFlow"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Öýken akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="pulmonaryRegurgitation"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="pulmonaryGradient"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="flowHeart"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="pathologicalFlowOfHearts"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="pulmonaryHypertensionSymptoms"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="pulmonarySymptoms"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="features"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Aýratynlyklary" />
        </DxSimpleItem>

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

        <template #echocg>
          <span>Ehokardiografiýa barlagynyň beýany</span>
        </template>

        <template #aorta>
          <span>Aorta (mm)</span>
        </template>

        <template #wall>
          <span>Diwarlary</span>
        </template>

        <template #prisons>
          <span>Gabsalar</span>
        </template>

        <template #openingOfPrisons>
          <span>Gabsalaryň açylmagy</span>
        </template>

        <template #openingOfPrisonsArea>
          <span>S(sm&#178;)</span>
        </template>

        <template #circle>
          <span>Halka (mm)</span>
        </template>

        <template #leftHeart>
          <span>Çep alyn ýürek (mm)</span>
        </template>

        <template #mitralValve>
          <span>Mitral klapan</span>
        </template>

        <template #movementOfPrisons>
          <span>Gabsalaryň hereketi</span>
        </template>

        <template #leftHeartStomach>
          <span>Ýüregiň çep mädejigi</span>
        </template>

        <template #leftStomachWrinkle>
          <span>Çep mädejigiň ýygrylmagy</span>
        </template>

        <template #stomachBarrier>
          <span>Mädejigiň germewi (sm)</span>
        </template>

        <template #stomachBarrierMovement>
          <span>Mädejigiň germewiniň hereketi</span>
        </template>

        <template #leftStomachBaçkWall>
          <span>Çep mädejigiň yzky diwary (sm)</span>
        </template>

        <template #leftStomachViolation>
          <span>Çep mädejigiň ojaklaýyn (lokal) bozulmalary</span>
        </template>

        <template #rightHeart>
          <span>Sag alyn ýürek (mm)</span>
        </template>

        <template #rightHeartStomach>
          <span>Ýüregiň sag mädejigi (mm) </span>
        </template>

        <template #tricuspidValve>
          <span>Trikuspidal klapan</span>
        </template>

        <template #prisonCircle>
          <span>halka (mm)</span>
        </template>

        <template #pulmonaryArtery>
          <span>Öýken arteriýa (mm)</span>
        </template>

        <template #pericardium>
          <span>Perikard</span>
        </template>

        <template #dopplerography>
          <h3 class="doppler">Dopplerografiýa</h3>
        </template>

        <template #flowHeart>
          <span> Ýürekleriň patologiki akymy</span>
        </template>

        <template #pulmonaryHypertensionSymptoms>
          <span>Öýken gipertenziýa alamatlary</span>
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
import { Echocardiography } from "~/infrastructure/classes/administration/Echocardiography";
import { IEchocardiography } from "~/infrastructure/interfaces/administration/IEchocardiography";
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
    let echocardiography: IEchocardiography = new Echocardiography(
      JSON.parse(this.currentBlank.observationResult)
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    let applicationObservation: IApplicationObservation = this.currentBlank;
    return {
      echocardiography,
      observationResult,
      applicationObservation,
      documentEditorData: null,
      documentEditorVisible: false,
    };
  },
  mounted() {
    this.echocardiography.cabinet = this.currentBlank.cabinetId;
    this.echocardiography.doctor = this.currentBlank.userId;
    this.echocardiography.date = this.currentBlank.observationDate;
    this.echocardiography.patient = this.currentBlank.applicantId;
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
        // displayExpr: this.patientDisplayName,
        displayExpr: "fullName",
        readOnly: true,
      });
    },
    doctorOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.users,
        // displayExpr: this.formatDisplayName,
        displayExpr: "fullName",
        readOnly: true,
      });
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);

      this.echocardiography.doctor = this.currentBlank.userId;

      let permission =
        parseGetToken?.UserId == this.echocardiography.doctor ||
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
        this.echocardiography
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

.doppler {
  text-align: center;
}
</style>
    