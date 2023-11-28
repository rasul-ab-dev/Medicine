<template>
  <div>
    <div class="form-wrapper fix-header">
      <div class="buttons-wrapper">
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
        <!-- <button class="back-btn panel-btn">
          {{ $t("commonText.save") }}
        </button> -->
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
              data-field="legsArtery"
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
            <DxSimpleItem data-field="rightOutArteryDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightOutArterySpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightOutArteryAB">
              <DxLabel text="A/B" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftOutArteryDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftOutArterySpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftOutArteryAB">
              <DxLabel text="A/B" />
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
            <DxSimpleItem data-field="rightHamArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightHamArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightHamArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftHamArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftHamArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftHamArteryAB">
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
            <DxSimpleItem data-field="rightFrontHamArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightFrontHamArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightFrontHamArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftFrontHamArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftFrontHamArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftFrontHamArteryAB">
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
            <DxSimpleItem data-field="rightKneesOutArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightKneesOutArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightKneesOutArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftKneesOutArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftKneesOutArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftKneesOutArteryAB">
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
            <DxSimpleItem data-field="rightFrontTibialisArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightFrontTibialisArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightFrontTibialisArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftFrontTibialisArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftFrontTibialisArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftFrontTibialisArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="back-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightBackTibialisArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightBackTibialisArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightBackTibialisArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftBackTibialisArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftBackTibialisArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftBackTibialisArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxGroupItem :col-count="11">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="hip-index"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightAnkleIndexDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightAnkleIndexSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightAnkleIndexAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftAnkleIndexDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftAnkleIndexSpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftAnkleIndexAB">
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
            data-field="doctorName"
            editor-type="dxSelectBox"
            :editor-options="doctorOptions"
          >
            <DxLabel location="left" text="Lukman" />
          </DxSimpleItem>
        </DxGroupItem>

        <template #legs-artery>
          <span>AÝAKLARYŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY</span>
        </template>

        <template #outside-artery>
          <span>Daşky gasyk arteriýasy</span>
        </template>

        <template #common-artery>
          <span>Umumy but arteriýasy</span>
        </template>

        <template #front-hip-artery>
          <span>Öňki but arteriýasy</span>
        </template>

        <template #knee-artery>
          <span>Dyzçanak asty arteriýasy</span>
        </template>

        <template #front-artery>
          <span>Öňki tibialis arteriýasy</span>
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
import DxTextArea from "devextreme-vue/text-area";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxGroupItem,
    DxEmptyItem,
    DxTextArea
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
  margin-top: 20px;

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
</style>
