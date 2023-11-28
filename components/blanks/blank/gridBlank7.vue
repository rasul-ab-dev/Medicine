<template>
  <div>
    <div class="form-wrapper fix-header">
      <div class="buttons-wrapper">
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
        <!-- <button class="back-btn panel-btn">{{ $t("commonText.save") }}</button> -->
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
          <DxGroupItem :col-count="4">
            <DxSimpleItem :col-span="2" template="resus-factor" />
            <DxSimpleItem
              :col-span="2"
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

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            template="family-field"
            css-class="blank-label"
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

        <DxGroupItem :col-count="7">
          <DxEmptyItem :col-span="1" />
          <DxSimpleItem :col-span="3" template="result" />
          <DxSimpleItem :col-span="3" template="rule" />
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="immunity-time"
          />
          <DxSimpleItem
            data-field="condenseTime"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem :col-span="3" css-class="blank-label" template="min" />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="blood-leak-time"
          />
          <DxSimpleItem
            data-field="bloodLeakTime"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem :col-span="3" css-class="blank-label" template="min" />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="prothrombin-index"
          />
          <DxSimpleItem
            data-field="protrombIndex"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="perсent"
          />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem css-class="blank-label" :col-span="1" template="atcw" />
          <DxSimpleItem data-field="actw" editor-type="dxTextBox" :col-span="3">
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem :col-span="3" css-class="blank-label" template="sec" />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="fibrinogen"
          />
          <DxSimpleItem
            data-field="fibrinogen"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="gramm"
          />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="reclassification-time"
          />
          <DxSimpleItem
            data-field="reclassificationTime"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="reclassification-sec"
          />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="tromb-time"
          />
          <DxSimpleItem
            data-field="trombTime"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="tromb-sec"
          />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="geparine"
          />
          <DxSimpleItem
            data-field="tolerant"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="geparine-sec"
          />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="fibrin-time"
          />
          <DxSimpleItem
            data-field="fibrinCreatTime"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="negative"
          />
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            css-class="blank-label"
            :col-span="1"
            template="etalon-test"
          />
          <DxSimpleItem
            data-field="referenceTest"
            editor-type="dxTextBox"
            :col-span="3"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
          <DxSimpleItem
            :col-span="3"
            css-class="blank-label"
            template="etalon-test-min"
          />
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

        <template #resus-factor>
          <span>GANYŇ LAGTALANMAK ULGAMYNYŇ GÖRKEZIJILERI №</span>
        </template>

        <template #family-field>
          <span>Maşgala meýdançasy</span>
        </template>

        <template #result>
          <span class="result">Netije</span>
        </template>

        <template #rule>
          <span>Kada</span>
        </template>

        <template #immunity-time>
          <span>Lagtalanma wagty</span>
        </template>

        <template #min>
          <span>min.</span>
        </template>

        <template #blood-leak-time>
          <span>Gan akmanyň wagty</span>
        </template>

        <template #prothrombin-index>
          <span>Protrombin indeksi</span>
        </template>

        <template #perсent>
          <span>90-105%</span>
        </template>

        <template #atcw>
          <span>AÇTW</span>
        </template>

        <template #sec>
          <span>22-36 sek.</span>
        </template>

        <template #fibrinogen>
          <span>Fibrinogen</span>
        </template>

        <template #gramm>
          <span>1.75-4.00 g.</span>
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

        <template #geparine>
          <span>Geparine tolerantlylygy</span>
        </template>

        <template #geparine-sec>
          <span>6-11 min.</span>
        </template>

        <template #etalon-test>
          <span>Etalonyň testi</span>
        </template>

        <template #etalon-test-min>
          <span>7-15 min.</span>
        </template>

        <template #fibrin-time>
          <span>Fibriniň dörän wagty</span>
        </template>

        <template #negative>
          <span>negatiw</span>
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

.result {
  display: block;
  text-align: center;
}

.serach-input-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 20px 0;

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
