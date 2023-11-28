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
          <DxGroupItem :col-count="5">
            <DxSimpleItem
              :col-span="2"
              css-class="blank-label"
              template="echocg"
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
            template="aorta"
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
          <DxSimpleItem :col-span="1" css-class="blank-label" template="wall" />
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
            template="prisons"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiG"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="10">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="openingOfPrisons"
          />
          <DxSimpleItem
            :col-span="4"
            data-field="antiCore"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="openingOfPrisonsArea"
          />

          <DxSimpleItem
            :col-span="3"
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
            template="circle"
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
            template="leftHeart"
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
            template="mitralValve"
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
            template="prisons"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="antiAg"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="10">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="movementOfPrisons"
          />
          <DxSimpleItem
            :col-span="4"
            data-field="antiHdv"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="openingOfPrisonsArea"
          />

          <DxSimpleItem
            :col-span="3"
            data-field="antiHdv"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="circle"
          />
          <DxSimpleItem :col-span="6" data-field="hiv" editor-type="dxTextBox">
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftHeartStomach"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="helicobacter"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="4">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="SSÖ(mm)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="SDÖ(mm)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="SSG(mm)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="SDG(mm)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="4">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="UÇ(mm)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="EF(%)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="SF(%)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="YU" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftStomachWrinkle"
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
            template="stomachBarrier"
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
            template="stomachBarrierMovement"
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
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="leftStomachBaçkWall"
          />
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
            template="leftStomachViolation"
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
            template="rightHeart"
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
            template="rightHeartStomach"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="mycoplazma"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="tricuspidValve"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="mycoplazma"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="10">
          <DxSimpleItem
            :col-span="2"
            css-class="blank-label"
            template="prisons"
          />
          <DxSimpleItem
            :col-span="4"
            data-field="mycoplazma"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="prisonCircle"
          />
          <DxSimpleItem
            :col-span="3"
            data-field="mycoplazma"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="pulmonaryArtery"
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

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Öýken klapan" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="gabalary" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="halka(mm)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="pericardium"
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
          :col-span="1"
          css-class="blank-label doppler"
          template="dopplerography"
        />

        <DxGroupItem :col-count="3" caption="Aortal klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Sistola akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="3" caption="Mitral klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Diastola akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="3" caption="Trikuspidal klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Diastola akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="3" caption="Öýken klapan">
          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Öýken akymy" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="regurgitasiýa(+)" />
          </DxSimpleItem>

          <DxSimpleItem
            :col-span="1"
            data-field="chlamydiaIgm"
            editor-type="dxTextBox"
          >
            <DxLabel location="top" text="Gradiýent(mmHg)" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="flowHeart"
          />
          <DxSimpleItem
            :col-span="6"
            data-field="mycoplazma"
            editor-type="dxTextBox"
          >
            <DxLabel text=" " />
          </DxSimpleItem>
        </DxGroupItem>

        <DxGroupItem :col-count="7">
          <DxSimpleItem
            :col-span="1"
            css-class="blank-label"
            template="pulmonaryHypertensionSymptoms"
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
          <DxLabel text="Aýratynlyklary" />
        </DxSimpleItem>

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

        <template #echocg>
          <span>Ehokardiografiýa barlagynyň beýany</span>
        </template>

        <template #aorta>
          <span>Aorta (mm)</span>
        </template>

        <template #wall>
          <span>Diwarlary</span>
        </template>

        <template #prisons>
          <span>Gabsalar</span>
        </template>

        <template #openingOfPrisons>
          <span>Gabsalaryň açylmagy</span>
        </template>

        <template #openingOfPrisonsArea>
          <span>S(sm&#178;)</span>
        </template>

        <template #circle>
          <span>Halka (mm)</span>
        </template>

        <template #leftHeart>
          <span>Çep alyn ýürek (mm)</span>
        </template>

        <template #mitralValve>
          <span>Mitral klapan</span>
        </template>

        <template #movementOfPrisons>
          <span>Gabsalaryň hereketi</span>
        </template>

        <template #leftHeartStomach>
          <span>Ýüregiň çep mädejigi</span>
        </template>

        <template #leftStomachWrinkle>
          <span>Çep mädejigiň ýygrylmagy</span>
        </template>

        <template #stomachBarrier>
          <span>Mädejigiň germewi (sm)</span>
        </template>

        <template #stomachBarrierMovement>
          <span>Mädejigiň germewiniň hereketi</span>
        </template>

        <template #leftStomachBaçkWall>
          <span>Çep mädejigiň yzky diwary (sm)</span>
        </template>

        <template #leftStomachViolation>
          <span>Çep mädejigiň ojaklaýyn (lokal) bozulmalary</span>
        </template>

        <template #rightHeart>
          <span>Sag alyn ýürek (mm)</span>
        </template>

        <template #rightHeartStomach>
          <span>Ýüregiň sag mädejigi (mm) </span>
        </template>

        <template #tricuspidValve>
          <span>Trikuspidal klapan</span>
        </template>

        <template #prisonCircle>
          <span>halka (mm)</span>
        </template>

        <template #pulmonaryArtery>
          <span>Öýken arteriýa (mm)</span>
        </template>

        <template #pericardium>
          <span>Perikard</span>
        </template>

        <template #dopplerography>
          <h3 class="doppler">Dopplerografiýa</h3>
        </template>

        <template #flowHeart>
          <span> Ýürekleriň patologiki akymy</span>
        </template>

        <template #pulmonaryHypertensionSymptoms>
          <span>Öýken gipertenziýa alamatlary</span>
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

.doppler {
  text-align: center;
}
</style>
  