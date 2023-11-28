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
        :form-data.sync="innerOrgansBlank"
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="innerOrgans" />
            <DxSimpleItem
              :col-span="1"
              data-field="innerOrgans"
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

        <DxGroupItem
          caption="Bagryň we ödi çykaryjy ýollarynyň ultrases barlagy"
        >
          <DxGroupItem caption="Bagyr">
            <DxGroupItem :col-count="2">
              <DxSimpleItem data-field="liverMeasure" editor-type="dxTextBox">
                <DxLabel text="Ölçeg" />
              </DxSimpleItem>
              <DxSimpleItem data-field="liverWide" editor-type="dxTextBox">
                <DxLabel text="Ini" />
              </DxSimpleItem>
            </DxGroupItem>

            <DxEmptyItem />
            <DxEmptyItem />

            <DxGroupItem :col-count="2">
              <DxSimpleItem data-field="liverRightSide" editor-type="dxTextBox">
                <DxLabel text="Sag bölegi (sm)" />
              </DxSimpleItem>

              <DxSimpleItem data-field="liverLeftSide" editor-type="dxTextBox">
                <DxLabel text="Çep bölegi (sm)" />
              </DxSimpleItem>
            </DxGroupItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="liverContours" editor-type="dxTextBox">
              <DxLabel text="Sudury" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="liverEdge" editor-type="dxTextBox">
              <DxLabel text="Gyrasy" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="liverEchoStructure"
              editor-type="dxTextBox"
            >
              <DxLabel text="Eho gurluşy" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="liverCapsule" editor-type="dxTextBox">
              <DxLabel text="Kapsulasy" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="liverBloodVessels"
              editor-type="dxTextBox"
            >
              <DxLabel text="Gan damarlary" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="liverChanges"
              editor-type="dxTextArea"
              :editor-options="{ height: 120 }"
            >
              <DxLabel text="Bagyryň parenhimasyndaky başga üýtgeşmeler" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="bileDucts"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Öt akýan ýollary" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />

          <DxGroupItem caption="Öt halta">
            <DxSimpleItem data-field="measureOfBile" editor-type="dxTextBox">
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="bileShape" editor-type="dxTextBox">
              <DxLabel text="Şekili" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="bileWalls" editor-type="dxTextBox">
              <DxLabel text="Diwarlary" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="bile" editor-type="dxTextBox">
              <DxLabel text="Ödi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="gallbladderCavity"
              editor-type="dxTextBox"
            >
              <DxLabel text="Öt haltanyň boşlugynda" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="measureTransmitter"
              editor-type="dxTextBox"
            >
              <DxLabel text="Öt geçiriji ýollarynyň göwrüminiň ölçegi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="bileTransmissionRoad"
              editor-type="dxTextBox"
            >
              <DxLabel text="Öt geçiriji ýollarynyň boşlugynda" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem caption="Aşgazanasty mäziniň ultrases barlagy">
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="stomachMeasure" editor-type="dxTextBox">
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>
            <DxSimpleItem data-field="stomachThickness" editor-type="dxTextBox">
              <DxLabel text="Galyňlygy" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />

          <DxSimpleItem data-field="stomachContours" editor-type="dxTextBox">
            <DxLabel text="Sudury" />
          </DxSimpleItem>

          <DxEmptyItem />

          <DxSimpleItem
            data-field="stomachEchoStructure"
            editor-type="dxTextBox"
          >
            <DxLabel text="Eho gurluöy" />
          </DxSimpleItem>

          <DxEmptyItem />

          <DxSimpleItem
            data-field="stomachTransmissionRoad"
            editor-type="dxTextBox"
          >
            <DxLabel text="Geçiriji ýol (sm)" />
          </DxSimpleItem>

          <DxEmptyItem />

          <DxSimpleItem data-field="stomachFeatures" editor-type="dxTextBox">
            <DxLabel text="Aýratynlyklary" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem caption="Dalagyň ultrases barlagy">
          <DxGroupItem :col-count="2">
            <DxSimpleItem data-field="spleenMeasure" editor-type="dxTextBox">
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>

            <DxSimpleItem data-field="spleenThickness" editor-type="dxTextBox">
              <DxLabel text="Galyňlygy" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem />

          <DxSimpleItem data-field="spleenContours" editor-type="dxTextBox">
            <DxLabel text="Sudury" />
          </DxSimpleItem>

          <DxEmptyItem />

          <DxSimpleItem
            data-field="spleenEchoStructure"
            editor-type="dxTextBox"
          >
            <DxLabel text="Eho gurluşy" />
          </DxSimpleItem>

          <DxEmptyItem />

          <DxSimpleItem
            data-field="spleenBloodVessels"
            editor-type="dxTextArea"
            :editor-options="{ height: 120 }"
          >
            <DxLabel text="Gan damarlary" />
          </DxSimpleItem>

          <DxEmptyItem />

          <DxSimpleItem
            data-field="spleenFeatures"
            editor-type="dxTextArea"
            :editor-options="{ height: 80 }"
          >
            <DxLabel text="Aýratynlyklaryy" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="2" caption="Böwregiň ultrases barlagy">
          <DxGroupItem caption="Sag böwrek:">
            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightKidneyMeasure"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightCrackSystem"
              editor-type="dxTextArea"
              :editor-options="{ height: 100 }"
            >
              <DxLabel text="Jamjagaz ýargak  ulgamy" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="rightKidneyWalls" editor-type="dxTextBox">
              <DxLabel text="Diwarjyklary" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightTransmitterAbility"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Içinde ses geçiriji ukyby" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightStones"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Daşlar" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightParenchyma"
              editor-type="dxTextArea"
              :editor-options="{ height: 120 }"
            >
              <DxLabel text="Parenhima" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem caption="Çep böwrek:">
            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftKidneyMeasure"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftCrackSystem"
              editor-type="dxTextArea"
              :editor-options="{ height: 100 }"
            >
              <DxLabel text="Jamjagaz ýargak  ulgamy" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="leftKidneyWalls" editor-type="dxTextBox">
              <DxLabel text="Diwarjyklary" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftTransmitterAbility"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Içinde ses geçiriji ukyby" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftStones"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Daşlar" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftParenchyma"
              editor-type="dxTextArea"
              :editor-options="{ height: 120 }"
            >
              <DxLabel text="Parenhima" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem
          :col-count="2"
          caption="Böwreküsti mäziniň ultrases barlagy"
        >
          <DxGroupItem caption="Sag:">
            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightKidneyGlandsMeasure"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightKidneyGlandsContours"
              editor-type="dxTextBox"
            >
              <DxLabel text="Sudury" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="rightKidneyGlandsEchoStructure"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Eho gurluşy" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem caption="Çep:">
            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftKidneyGlandsMeasure"
              editor-type="dxTextBox"
            >
              <DxLabel text="Ölçegi" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftKidneyGlandsContours"
              editor-type="dxTextBox"
            >
              <DxLabel text="Sudury" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="leftKidneyGlandsEchoStructure"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Eho gurluşy" />
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

        <template #innerOrgans>
          <span> Icki agzalaryň ultrases barlagynyň beýany </span>
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
import { IInnerOrgans } from "~/infrastructure/interfaces/administration/IInnerOrgans";
import { InnerOrgans } from "~/infrastructure/classes/administration/InnerOrgans";
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
    let innerOrgansBlank: IInnerOrgans = new InnerOrgans(
      JSON.parse(this.currentBlank.observationResult)
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    let applicationObservation: IApplicationObservation = this.currentBlank;
    return {
      innerOrgansBlank,
      observationResult,
      applicationObservation,
      documentEditorData: null,
      documentEditorVisible: false,
    };
  },
  mounted() {
    this.innerOrgansBlank.cabinet = this.currentBlank.cabinetId;
    this.innerOrgansBlank.date = this.currentBlank.observationDate;
    this.innerOrgansBlank.patient = this.currentBlank.applicantId;
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
        parseGetToken?.UserId == this.innerOrgansBlank.doctor ||
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
        this.innerOrgansBlank
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