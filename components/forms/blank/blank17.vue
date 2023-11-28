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

      <!-- <DxForm
        :form-data.sync="applicationObservation"
        ref="blankForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >


        <DxEmptyItem />

      </DxForm> -->

      <DxForm
        :form-data.sync="handVeinBlank"
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="hand-vein-examination" />
            <DxSimpleItem
              :col-span="1"
              data-field="handVein"
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
            template="collarbone-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightSubelaviaDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightSubelaviaSpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightSubelaviaPerforant">
              <DxLabel text="Perforant" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftSubelaviaDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftSubelaviaSpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftSubelaviaPerforant">
              <DxLabel text="Perforant" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="shoulder-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightAxillarisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightAxillarisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightAxillarisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftAxillarisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftAxillarisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftAxillarisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="arm-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightBrahialisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightBrahialisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightBrahialisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftBrahialisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftBrahialisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftBrahialisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="hand-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightUlnarisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightUlnarisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightUlnarisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftUlnarisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftUlnarisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftUlnarisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="radialis"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightRadialisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightRadialisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightRadialisPerforant">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftRadialisDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftRadialisSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftRadialisPerforant">
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

        <template #hand-vein-examination>
          <span>ELLERIŇ WENALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY</span>
        </template>

        <template #right-side>
          <span>Sag</span>
        </template>

        <template #left-side>
          <span>Çep</span>
        </template>

        <template #collarbone-artery>
          <span>w.subelavia</span>
        </template>

        <template #shoulder-artery>
          <span>w.axillaris</span>
        </template>

        <template #arm-artery>
          <span>w.brahialis</span>
        </template>

        <template #hand-artery>
          <span>w.ulnaris</span>
        </template>

        <template #radialis>
          <span>w.radialis</span>
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
import { IHandVein } from "~/infrastructure/interfaces/administration/IHandVein";
import { HandVein } from "~/infrastructure/classes/administration/HandVein";
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
    let handVeinBlank: IHandVein = new HandVein(
      JSON.parse(this.currentBlank.observationResult)
    );
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    let applicationObservation: IApplicationObservation = this.currentBlank;
    return {
      handVeinBlank,
      observationResult,
      applicationObservation,
      documentEditorData: null,
      documentEditorVisible: false,
    };
  },
  mounted() {
    this.handVeinBlank.cabinet = this.currentBlank.cabinetId;
    this.handVeinBlank.date = this.currentBlank.observationDate;
    this.handVeinBlank.patient = this.currentBlank.applicantId;
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
        parseGetToken?.UserId == this.handVeinBlank.doctor ||
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
        this.handVeinBlank
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
    