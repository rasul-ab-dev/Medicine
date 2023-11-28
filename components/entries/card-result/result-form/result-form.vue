<template>
  <div>
    <div class="form-wrapper fix-header">
      <div class="buttons-wrapper">
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
        <button @click="saveBlank" class="back-btn panel-btn">
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
        <button class="print-btn" />
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
        :form-data.sync="legsVeinBlank"
        ref="blankForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="legs-vein" />
            <DxSimpleItem
              :col-span="1"
              data-field="legVein"
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
          <DxSimpleItem data-field="string">
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

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="vein-label"
            template="low-vein-label"
          />

          <DxSimpleItem :col-span="3" data-field="rightEmptyVein">
            <DxLabel text="Sag geçirijiligi" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftEmptyVein">
            <DxLabel text="Çep geçirijiligi" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="up-vein-label"
          />

          <DxSimpleItem :col-span="3" data-field="rightOutVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftOutVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="common-vein-label"
          />

          <DxSimpleItem :col-span="3" data-field="rightCommonHamVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftCommonHamVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="inner-hip-label"
          />

          <DxSimpleItem :col-span="3" data-field="rightChunVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftChunVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="hip-label"
          />

          <DxSimpleItem :col-span="3" data-field="rightHamVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftHamVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="big-hypodermic-vein"
          />

          <DxSimpleItem :col-span="3" data-field="rightBigOutSkinVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftBigOutSkinVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="knee-vein"
          />

          <DxSimpleItem :col-span="3" data-field="rightKneesOutVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftKneesOutVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="small-hypodermic-vein"
          />

          <DxSimpleItem :col-span="3" data-field="rightSmallOutVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftSmallOutVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="front-vein"
          />

          <DxSimpleItem :col-span="3" data-field="rightFrontTibialisVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftFrontTibialisVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="back-vein"
          />

          <DxSimpleItem :col-span="3" data-field="rightBackTibialisVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftBackTibialisVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="foot-vein"
          />

          <DxSimpleItem :col-span="3" data-field="rightFootVein">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftFootVein">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="9">
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="difference"
          />

          <DxSimpleItem :col-span="3" data-field="rightFeature">
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem :col-span="3" data-field="leftFeature">
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
            data-field="doctor"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxLabel location="left" text="Lukman" />
          </DxSimpleItem>
        </DxGroupItem>

        <template #legs-vein>
          <span>AÝAKLARYŇ WENALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY</span>
        </template>

        <template #low-vein-label>
          <span>Aşaky boş wenasy</span>
        </template>

        <template #up-vein-label>
          <span>Daşky gasyk wenasy</span>
        </template>

        <template #common-vein-label>
          <span>Umumy but wenasy</span>
        </template>

        <template #inner-hip-label>
          <span>Çun but wenasy</span>
        </template>

        <template #hip-label>
          <span>But wenasy</span>
        </template>

        <template #big-hypodermic-vein>
          <span>Uly deriasty wenasy</span>
        </template>

        <template #knee-vein>
          <span>Dyzçanakasty wenasy</span>
        </template>

        <template #small-hypodermic-vein>
          <span>Kiçi deriasty wenasy</span>
        </template>

        <template #front-vein>
          <span>Öňki tibialis wenasy</span>
        </template>

        <template #back-vein>
          <span>Yzky tibialis wenasy</span>
        </template>

        <template #foot-vein>
          <span>Kiçi daban wenasy</span>
        </template>

        <template #difference>
          <span>Aýratynlyklary</span>
        </template>
      </DxForm>
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
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
import { ILegsVein } from "~/infrastructure/interfaces/administration/ILegsVein";
import { LegsVein } from "~/infrastructure/classes/administration/LegsVein";
import { IApplicationObservationResult } from "~/infrastructure/interfaces/administration/IApplicationObservationResult";
import { ApplicationObservationResult } from "~/infrastructure/classes/administration/ApplicationObservationResult";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxGroupItem,
    DxEmptyItem,
  },
  props: {
    currentBlank: {
      type: Object,
    },
  },
  data() {
    let legsVeinBlank: ILegsVein = new LegsVein();
    let observationResult: IApplicationObservationResult =
      new ApplicationObservationResult();
    return {
      legsVeinBlank,
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
        displayExpr: "firstName",
      });
    },
    doctorOptions() {
      return new SelectBoxPropertiesWithDataSource(this, {
        loadUrl: this.$dataApi.users,
        displayExpr: "firstName",
      });
    },
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    saveBlank() {
      let result = this.$refs["blankForm"].instance.validate();
      this.observationResult.id = 14;
      this.observationResult.applicationObservationResult = JSON.stringify(
        this.legsVeinBlank
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
            this.$router.go(-1);
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
