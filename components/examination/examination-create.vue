<template>
  <div class="examination-create-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="create-examination">
          {{ $t("examinationPage.newExamination") }}
        </div>
        <button @click="saveExamination" class="save-btn panel-btn">
          {{ $t("examinationPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("examinationPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="examinationForm"
        :form-data.sync="examination"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        label-location="top"
      >
        <DxSimpleItem
          data-field="cashNumber"
          data-type="string"
          css-class="cash-number"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('examinationPage.articul')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem
          data-field="name"
          data-type="string"
          editor-type="dxTextBox"
          :editor-options="textBoxOptions"
          css-class="examination-name"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('examinationPage.examinationName')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem
          data-field="blankType"
          editor-type="dxSelectBox"
          :editor-options="blankOptions"
          css-class="examination-name"
        >
          <DxLabel :text="$t('examinationPage.blank')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxSimpleItem template="span" />
        <template #span>
          <span>{{ $t("examinationPage.payment") }}</span>
        </template>

        <DxEmptyItem />

        <DxGroupItem :col-count="4">
          <DxSimpleItem
            data-field="observationPrices[0].price"
            data-type="number"
            editor-type="dxTextBox"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('examinationPage.withoutInsurance')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="observationPrices[1].price"
            data-type="number"
            editor-type="dxTextBox"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('examinationPage.withInsurance')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="observationPrices[2].price"
            data-type="number"
            editor-type="dxTextBox"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('examinationPage.foreigner')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="observationPrices[3].price"
            data-type="number"
            editor-type="dxTextBox"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('examinationPage.diplomat')" />
          </DxSimpleItem>
        </DxGroupItem>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
import { Examination } from "~/infrastructure/classes/administration/Examination";
import { IExamination } from "~/infrastructure/interfaces/administration/IExamination";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { BlankTypes } from "~/infrastructure/data-source/BlankTypes";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
  },
  data() {
    let examination: IExamination = new Examination();
    return {
      examination,
    };
  },
  computed: {
    textBoxOptions() {
      return new TextBoxProperties();
    },
    blankOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: BlankTypes(this),
        showClearButton: false,
        readOnly: this.readOnly,
      });
    },
    numberBoxOptions() {
      return new NumberBoxProperties();
    },
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },

    saveExamination() {
      // this.examination.blankId = 1; // to remove
      this.examination.observationPrices[0].paymentTypeId = 1;
      this.examination.observationPrices[1].paymentTypeId = 2;
      this.examination.observationPrices[2].paymentTypeId = 3;
      this.examination.observationPrices[3].paymentTypeId = 4;

      let result = this.$refs["examinationForm"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.post(this.$dataApi.observations, this.examination),
          (e: any) => {
            (this as any).$awn.success();
            // this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e: any) => {
            (this as any).$awn.alert();
          }
        );
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.examination-create-wrapper {
  .create-examination {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
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

  .component-wrapper {
    row-gap: 40px;
    padding: 30px 50px;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media all and (max-width: 870px) {
    .create-examination {
      padding: 12px 50px;
    }

    .save-btn {
      padding: 14px 30px;
    }
  }

  @media all and (max-width: 730px) {
    .create-examination {
      display: none;
    }
  }
}
</style>
