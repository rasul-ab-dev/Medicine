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
        :form-data.sync="femaleOrgansBlank"
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="femaleOrgans" />
            <DxSimpleItem
              :col-span="1"
              data-field="femaleOrgans"
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
            data-field="cabinet"
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
            data-field="patient"
            editor-type="dxSelectBox"
            :editor-options="patientOptions"
          >
            <DxRequiredRule />
            <DxLabel text="Näsag" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem data-field="menstrualCycle" editor-type="dxTextBox">
          <DxLabel text="Aýbaşy sikliň güni" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="uterus" editor-type="dxTextBox">
          <DxLabel text="Ýatgy antefleksio, deksrapositio, sinistropositio" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="uterusType" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň görnüşi" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="uterusContours" editor-type="dxTextBox">
          <DxLabel text="Sudury" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="uterusMeasure" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň ölçegleri" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem data-field="uterusLength" editor-type="dxTextBox">
            <DxLabel text="Uzynlygy" />
          </DxSimpleItem>

          <DxSimpleItem data-field="uterusThickness" editor-type="dxTextBox">
            <DxLabel text="Galyňlygy" />
          </DxSimpleItem>

          <DxSimpleItem data-field="uterusWide" editor-type="dxTextBox">
            <DxLabel text="Ini" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="myometriumStructure" editor-type="dxTextBox">
          <DxLabel text="Miometrivanyň gurluşy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="haveButtons" editor-type="dxTextBox">
          <DxLabel text="Düwmeleri bar" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="subseroz"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="a) subseroz" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="intramunal"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="b) intramunal" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="submukoz"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="c) submukoz" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="uterusEmptiness" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň boşlugy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="myometriumChanges"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Miometriýada başga üýtgeşmeler" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="endometrialStructure" editor-type="dxTextBox">
          <DxLabel text="Endometriýa gurluşy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="myometriumThickness" editor-type="dxTextBox">
          <DxLabel text="Galyňlygy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="myometriumUterusEmptiness"
          editor-type="dxTextBox"
        >
          <DxLabel text="Ýatgynyň boşlugy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="emptinessEdge" editor-type="dxTextBox">
          <DxLabel text="Boşlugyň gyrasy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="uterusPathological"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="Ýatgynyň boşlugynda patologiki goşulmalar ýok" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="uterusWallStructure" editor-type="dxTextBox">
          <DxLabel
            text="Ýatgynyň boýunjygynnyň diwarlarynyň gurluşy üýtgemedik"
          />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="nabonov" editor-type="dxTextBox">
            <DxLabel text="Nabonow suwly ojagy" />
          </DxSimpleItem>

          <DxSimpleItem data-field="backWalls" editor-type="dxTextBox">
            <DxLabel text="sm, yzky diwarlarynda" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="cervicalChanges" editor-type="dxTextBox">
          <DxLabel text="Serwikal kanalda üýtgeşmeler" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="measures" editor-type="dxTextBox">
          <DxLabel text="Ölçegleri:" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="myometriumVeinUnexpanded"
          editor-type="dxTextBox"
        >
          <DxLabel
            text="Miometriýanyň, parametriýalarynyň wenalary giňelmedik. Giňelen"
          />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="douglasGap" editor-type="dxTextBox">
          <DxLabel
            text="Duglas boşlukda erkin suwuklyk ýüze çykarylmady,beýikligi "
          />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="smallBowl"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel
            text="Kiçi çanaklykda emele gelme ýüze çykarylmady. Ölçegleri:"
          />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="2" caption="Ýumurtgalar">
          <DxGroupItem caption="Sag">
            <DxSimpleItem data-field="rightOvaries" editor-type="dxTextBox">
              <DxLabel text="Sagda (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightOvariesVolume"
              editor-type="dxTextBox"
            >
              <DxLabel text="göwrümi (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightUterusLocation"
              editor-type="dxSelectBox"
              :editor-options="ovariesOptions"
            >
              <DxLabel
                text="Adaty ýerleşen, ýatgynyň yzynda, ýatgynyň düýbünden ýokarda"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightFollicularPhase"
              editor-type="dxSelectBox"
              :editor-options="follicularOptions"
            >
              <DxLabel
                text="Follikulýar apparaty sikliň fazasyna gabat gelýär,bildirmeýär"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightOtherChanges"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Başga üýgeşmeler" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              :col-span="1"
              data-field="rightStroma"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Stroma" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem caption="Çep">
            <DxSimpleItem data-field="leftOvaries" editor-type="dxTextBox">
              <DxLabel text="Çepde (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftOvariesVolume"
              editor-type="dxTextBox"
            >
              <DxLabel text="göwrümi (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftUterusLocation"
              editor-type="dxSelectBox"
              :editor-options="ovariesOptions"
            >
              <DxLabel
                text="Adaty ýerleşen, ýatgynyň yzynda, ýatgynyň düýbünden ýokarda"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftFollicularPhase"
              editor-type="dxSelectBox"
              :editor-options="follicularOptions"
            >
              <DxLabel
                text="Follikulýar apparaty sikliň fazasyna gabat gelýär,bildirmeýär"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftOtherChanges"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Başga üýgeşmeler" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftStroma"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Stroma" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxSimpleItem
          data-field="additionalInfo"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Goşmaça maglumatlar:" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="result"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Netije:" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="advices"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Maslahat:" />
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

        <template #femaleOrgans>
          <span>Aýal jyns agzalarynyň ultrases barlagynyň beýany </span>
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
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";
import { IApplicationObservation } from "~/infrastructure/interfaces/IApplicationObservation";
import { ApplicationObservationResult } from "~/infrastructure/classes/administration/ApplicationObservationResult";
import { IFemaleOrgans } from "~/infrastructure/interfaces/administration/IFemaleOrgans";
import { FemaleOrgans } from "~/infrastructure/classes/administration/FemaleOrgans";
import DocumentEditorPopup from "~/components/documentEditor/editor-popup.vue";
import DxFileUploader from "devextreme-vue/file-uploader";
import {
  OvariesPositions,
  FollicularPhases,
} from "~/infrastructure/data-source/FemaleBlank";
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
    let femaleOrgansBlank: IFemaleOrgans = new FemaleOrgans(
      JSON.parse(this.currentBlank.observationResult)
    );

    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    let applicationObservation: IApplicationObservation = this.currentBlank;
    return {
      femaleOrgansBlank,
      observationResult,
      applicationObservation,
      documentEditorData: null,
      documentEditorVisible: false,
    };
  },
  mounted() {
    this.femaleOrgansBlank.cabinet = this.currentBlank.cabinetId;
    this.femaleOrgansBlank.date = this.currentBlank.observationDate;
    this.femaleOrgansBlank.patient = this.currentBlank.applicantId;
  },
  computed: {
    ovariesOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: OvariesPositions(this),
        showClearButton: false,
      });
    },
    follicularOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: FollicularPhases(this),
        showClearButton: false,
      });
    },
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
        parseGetToken?.UserId == this.femaleOrgansBlank.doctor ||
        parseGetToken?.UserName === "Administrator";

      return permission;
    },
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    saveBlank() {
      let result = this.$refs["blankForm"].instance.validate();
      this.observationResult.id = this.currentBlank.id;
      this.observationResult.applicationObservationResult = JSON.stringify(
        this.femaleOrgansBlank
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