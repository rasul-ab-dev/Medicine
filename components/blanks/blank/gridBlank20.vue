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
            <DxSimpleItem :col-span="1" template="femaleOrgans" />
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

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Aýbaşy sikliň güni" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Ýatgy antefleksio, deksrapositio, sinistropositio" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň görnüşi" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Sudury" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň ölçegleri" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
            <DxLabel text="Uzynlygy" />
          </DxSimpleItem>

          <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
            <DxLabel text="Galyňlygy" />
          </DxSimpleItem>

          <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
            <DxLabel text="Ini" />
          </DxSimpleItem>

          <!-- <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
            <DxLabel text="sm." />
          </DxSimpleItem> -->
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Miometrivanyň gurluşy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Düwmeleri bar" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="a) subseroz" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="b) intramunal" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="c) submukoz" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň boşlugy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Miometriýada başga üýtgeşmeler" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Endometriýa gurluşy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Galyňlygy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Ýatgynyň boşlugy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Boşlugyň gyrasy" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 80 }"
        >
          <DxLabel text="Ýatgynyň boşlugynda patologiki goşulmalar ýok" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel
            text="Ýatgynyň boýunjygynnyň diwarlarynyň gurluşy üýtgemedik"
          />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="2">
          <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
            <DxLabel text="Nabonow suwly ojagy" />
          </DxSimpleItem>

          <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
            <DxLabel text="sm, yzky diwarlarynda" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Serwikal kanalda üýtgeşmeler" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel text="Ölçegleri:" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel
            text="Miometriýanyň, parametriýalarynyň wenalary giňelmedik. Giňelen"
          />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
          <DxLabel
            text="Duglas boşlukda erkin suwuklyk ýüze çykarylmady,beýikligi "
          />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
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
            <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
              <DxLabel text="Sagda (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
              <DxLabel text="göwrümi (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxSelectBox"
              :editor-options="ovariesOptions"
            >
              <DxLabel
                text="Adaty ýerleşen, ýatgynyň yzynda, ýatgynyň düýbünden ýokarda"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxSelectBox"
              :editor-options="follicularOptions"
            >
              <DxLabel
                text="Follikulýar apparaty sikliň fazasyna gabat gelýär,bildirmeýär"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Başga üýgeşmeler" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              :col-span="1"
              data-field="patientName"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Stroma" />
            </DxSimpleItem>
          </DxGroupItem>

          <DxGroupItem caption="Çep">
            <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
              <DxLabel text="Çepde (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem data-field="patientName" editor-type="dxTextBox">
              <DxLabel text="göwrümi (sm)" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxSelectBox"
              :editor-options="ovariesOptions"
            >
              <DxLabel
                text="Adaty ýerleşen, ýatgynyň yzynda, ýatgynyň düýbünden ýokarda"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxSelectBox"
              :editor-options="follicularOptions"
            >
              <DxLabel
                text="Follikulýar apparaty sikliň fazasyna gabat gelýär,bildirmeýär"
              />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Başga üýgeşmeler" />
            </DxSimpleItem>

            <DxEmptyItem />

            <DxSimpleItem
              data-field="patientName"
              editor-type="dxTextArea"
              :editor-options="{ height: 80 }"
            >
              <DxLabel text="Stroma" />
            </DxSimpleItem>
          </DxGroupItem>
        </DxGroupItem>

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Goşmaça maglumatlar:" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
          editor-type="dxTextArea"
          :editor-options="{ height: 120 }"
        >
          <DxLabel text="Netije:" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="patientName"
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
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import { SelectBoxPropertiesWithDataSource } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithDataSource";
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