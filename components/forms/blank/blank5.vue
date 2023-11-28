<template>
  <div>
    <div class="form-wrapper fix-header">
      <div class="buttons-wrapper">
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
        <button v-if="permissionControler" @click="saveBlank" class="back-btn panel-btn">
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
        :form-data.sync="formData"
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="5">
            <DxSimpleItem :col-span="2" template="immunity-result" />
            <DxSimpleItem
              :col-span="3"
              data-field="condenseBlood"
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
        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="result"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="result"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="rule" />
          <DxSimpleItem :col-span="6" data-field="rule" editor-type="dxTextBox">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="condense-time"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="condenseTime"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="min" />
          <DxSimpleItem
            :col-span="6"
            data-field="condenseTimeMin"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="blood-leak-time"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="bloodLeakTime"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="min" />
          <DxSimpleItem
            :col-span="6"
            data-field="bloodLeakTimeMin"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="prothrombin-index"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="protrombIndex"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="perсent"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="protrombIndexPersent"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="actw" />
          <DxSimpleItem :col-span="6" data-field="actw" editor-type="dxTextBox">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="sek" />
          <DxSimpleItem
            :col-span="6"
            data-field="actwSec"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="fibrinogen"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="fibrinogen"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="gram" />
          <DxSimpleItem
            :col-span="6"
            data-field="fibrinogenGram"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="reclassification-time"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="reclassificationTime"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="reclassification-sec"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="reclassificationTimeSec"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="tromb-time"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="trombTime"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="tromb-sec"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="trombTimeSec"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="tolerant"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="tolerant"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="ureaplazma"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="tolerantMin15"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="mycoplazma"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="tolerantMin11"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="etalon-test"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="referenceTest"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="fibrin-time"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="fibrinCreatTime"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="negatiýe"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="negative"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="family-field"
          />
          <DxSimpleItem
            data-field="familyField"
            editor-type="dxTextArea"
            :editor-options="{ minHeight: 84 }"
            :col-span="6"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
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

        <template #immunity-result>
          <span>GANYŇ LAGTALANMAK ULGAMYNYŇ GÖRKEZIJILERI №</span>
        </template>

        <template #result>
          <span>Netije</span>
        </template>

        <template #rule>
          <span>Kada</span>
        </template>

        <template #condense-time>
          <span>Lagtalanma wagty</span>
        </template>

        <template #min>
          <span>min</span>
        </template>

        <template #blood-leak-time>
          <span>Gan akmanyň wagty</span>
        </template>

        <template #prothrombin-index>
          <span>Protrombin indeksi</span>
        </template>

        <template #anti-HBe>
          <span>Anti-HBe (anti- CORE)</span>
        </template>

        <template #perсent>
          <span>90-105%</span>
        </template>

        <template #actw>
          <span>AÇTW</span>
        </template>

        <template #sek>
          <span>22-36 sek.</span>
        </template>

        <template #fibrinogen>
          <span>Fibrinogen</span>
        </template>

        <template #gram>
          <span>1-75-4.00 g</span>
        </template>

        <template #reclassification-time>
          <span>Reklasifikasiýa wagty</span>
        </template>

        <template #reclassification-sec>
          <span>60-120 sek.</span>
        </template>

        <template #tromb-time>
          <span>Trombiniň wagty</span>
        </template>

        <template #tromb-sec>
          <span>11.3-18.5 sek.</span>
        </template>

        <template #tolerant>
          <span>Geparine tolerantlylygy</span>
        </template>

        <template #ureaplazma>
          <span>7-15 min.</span>
        </template>

        <template #mycoplazma>
          <span>6-11 min.</span>
        </template>

        <template #etalon-test>
          <span>Etalonyň testi</span>
        </template>

        <template #fibrin-time>
          <span>Fibriniň dörän wagty</span>
        </template>

        <template #negatiýe>
          <span>Negative</span>
        </template>

        <template #family-field>
          <span>Maşgala meýdançasy</span>
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
import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";
import { ApplicationObservationResult } from "~/infrastructure/classes/administration/ApplicationObservationResult";
import { IBloodThick } from "~/infrastructure/interfaces/administration/IBloodThick";
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
    let formData: IBloodThick = JSON.parse(this.currentBlank.observationResult);
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    return {
      formData,
      observationResult,
    };
  },
  computed: {
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
        parseGetToken?.UserId == this.formData.doctor ||
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
        this.formData
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
</style>
