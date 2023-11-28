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
        :read-only="false"
        ref="blankForm"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="2">
          <DxGroupItem :col-count="2">
            <DxSimpleItem :col-span="1" template="hand-artery-examination" />
            <DxSimpleItem
              :col-span="1"
              data-field="handArtery"
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
            template="collarbone-artery"
          />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="rightClavicularArteryDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightClavicularArterySpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightClavicularArteryAB">
              <DxLabel text="A/B" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftClavicularArteryDiametr">
              <DxLabel text="Diametr" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftClavicularArterySpasm">
              <DxLabel text="Gysylma %" />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftClavicularArteryAB">
              <DxLabel text="A/B" />
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
            <DxSimpleItem data-field="rightShoulderArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightShoulderArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightShoulderArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftShoulderArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftShoulderArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftShoulderArteryAB">
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
            <DxSimpleItem data-field="rightWristArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightWristArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rightWristArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftWristArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftWristArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftWristArteryAB">
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
            <DxSimpleItem data-field="rigntWristHandArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rigntWristHandArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="rigntWristHandArteryAB">
              <DxLabel text=" " />
            </DxSimpleItem>
          </DxGroupItem>

          <DxEmptyItem :col-span="1" />

          <DxGroupItem :col-span="4" :col-count="3">
            <DxSimpleItem data-field="leftWristHandArteryDiametr">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftWristHandArterySpasm">
              <DxLabel text=" " />
            </DxSimpleItem>
            <DxSimpleItem data-field="leftWristHandArteryAB">
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
        <template #hand-artery-examination>
          <span>ELLERIŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY</span>
        </template>

        <template #right-side>
          <span>Sag</span>
        </template>

        <template #left-side>
          <span>Çep</span>
        </template>

        <template #collarbone-artery>
          <span>Ýaýjykasty arteriýasy</span>
        </template>

        <template #shoulder-artery>
          <span>Çigin arteriýasy</span>
        </template>

        <template #arm-artery>
          <span>Bilek arteriýasy</span>
        </template>

        <template #hand-artery>
          <span>Bilek-penje arteriýasy</span>
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
</style>
