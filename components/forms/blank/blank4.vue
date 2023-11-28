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
        :form-data.sync="immunoferment"
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
              template="immunity-result"
            />
            <DxSimpleItem
              :col-span="3"
              data-field="immunoferment"
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
            template="test-type"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="testType"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="result"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="testResult"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="anti-ig"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiG"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="anti-core"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiCore"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="anti-HCV"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiNs"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="hbs-ag"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="hbsAg"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="anti-HBe"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiHbe"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="anti-HBs-Ag"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiAg"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="anti-HDV"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiHdv"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="hiv" />
          <DxSimpleItem :col-span="6" data-field="hiv" editor-type="dxTextBox">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="helicobacter"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="helicobacter"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="chlamydia"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="chlamydia-igG"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="chlamydiaIgg"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="toxoplazma"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="toxoplazmaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="toxoplazma-igG"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="toxoplazmaIgg"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem :col-span="1" css-class="blank-label" template="cmv" />
          <DxSimpleItem
            :col-span="6"
            data-field="cmvIgm"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="cmv-igG"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="cmvIgg"
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
            data-field="ureaplazma"
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
            data-field="mycoplazma"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
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
            data-field="doctorName"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxLabel location="left" text="Lukman" />
          </DxSimpleItem>
        </DxGroupItem>

        <template #immunity-result>
          <span>Immunoferment derňejiniň netijesi №</span>
        </template>

        <template #test-type>
          <span>Testiň gönüşi</span>
        </template>

        <template #result>
          <span>Netijesi</span>
        </template>

        <template #anti-ig>
          <span>Anti-HCV Ig G</span>
        </template>

        <template #anti-core>
          <span>Anti-HCV-core</span>
        </template>

        <template #anti-HCV>
          <span>Anti-HCV-NS</span>
        </template>

        <template #hbs-ag>
          <span>HBs Ag</span>
        </template>

        <template #anti-HBe>
          <span>Anti-HBe (anti- CORE)</span>
        </template>

        <template #anti-HBs-Ag>
          <span>Anti-HBs Ag</span>
        </template>

        <template #anti-HDV>
          <span>Anti-HDV</span>
        </template>

        <template #hiv>
          <span>HIV</span>
        </template>

        <template #helicobacter>
          <span>Helicobacter pylori Ig G</span>
        </template>

        <template #chlamydia>
          <span>Chlamydia trachomatis IgM</span>
        </template>

        <template #chlamydia-igG>
          <span>Chlamydia trachomatis IgG</span>
        </template>

        <template #toxoplazma>
          <span>Toxoplazma IgM</span>
        </template>

        <template #toxoplazma-igG>
          <span>Toxoplazma IgG</span>
        </template>

        <template #cmv>
          <span>CMV IgM</span>
        </template>

        <template #cmv-igG>
          <span>CMV IgG</span>
        </template>

        <template #ureaplazma>
          <span>Ureaplazma Ig G</span>
        </template>

        <template #mycoplazma>
          <span>Mycoplazma Ig G</span>
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
import { IImmunoferment } from "~/infrastructure/interfaces/administration/IImmunoferment";
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
    let immunoferment: IImmunoferment = JSON.parse(
      this.currentBlank.observationResult
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    return {
      immunoferment,
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
        parseGetToken?.UserId == this.immunoferment.doctor ||
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
        this.immunoferment
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
