<template>
  <div class="examination-create-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="examination-id">{{ $route.params.id }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveExamination" class="save-btn panel-btn">
            {{ $t("examinationPage.save") }}
          </button>
          <button @click="openPopup" class="cancel-btn panel-btn">
            {{ $t("examinationPage.cancel") }}
          </button>
        </div>
        <button @click="backHandler" v-else class="back-btn panel-btn">
          {{ $t("examinationPage.cancel") }}
        </button>
      </div>
      <button
        v-if="permissionEdit"
        @click="editHandler"
        class="edit-btn panel-btn"
      ></button>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="examinationForm"
        :form-data="examination"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        label-location="top"
      >
        <DxSimpleItem
          data-field="cashNumber"
          data-type="number"
          :editor-options="numberBoxOptions"
          css-class="cash-number"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('examinationPage.articul')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem
          data-type="string"
          data-field="name"
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
            :editor-options="numberBoxOptions"
            editor-type="dxNumberBox"
            data-type="number"
          >
            <DxLabel :text="$t('examinationPage.withoutInsurance')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="observationPrices[1].price"
            data-type="number"
            :editor-options="numberBoxOptions"
            editor-type="dxNumberBox"
          >
            <DxLabel :text="$t('examinationPage.withInsurance')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="observationPrices[2].price"
            data-type="number"
            :editor-options="numberBoxOptions"
            editor-type="dxNumberBox"
          >
            <DxLabel :text="$t('examinationPage.foreigner')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="observationPrices[3].price"
            data-type="number"
            :editor-options="numberBoxOptions"
            editor-type="dxNumberBox"
          >
            <DxLabel :text="$t('examinationPage.diplomat')" />
          </DxSimpleItem>
        </DxGroupItem>
      </DxForm>
    </div>
    <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      :hide-on-outside-click="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>{{ $t("commonText.cancelEdit") }}</span>
        <div class="confirm-btn">
          <button @click="backHandler">{{ $t("commonText.yes") }}</button>
          <button @click="closePopup">{{ $t("commonText.no") }}</button>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxEmptyItem,
  DxGroupItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
import Popup from "~/components/page/popup.vue";
import { IExamination } from "~/infrastructure/interfaces/administration/IExamination";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { BlankTypes } from "~/infrastructure/data-source/BlankTypes";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
export default Vue.extend({
  components: {
    Popup,
    DxForm,
    DxGroupItem,
    DxSimpleItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
  },
  props: {
    currentExamination: {
      type: Object,
      required: true,
    },
  },
  data() {
    let examination: IExamination = this.currentExamination;
    return {
      readOnly: true,
      examination,
    };
  },
  computed: {
    permissionEdit() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.admin ||
        parseGetToken?.ObservationsController?.includes("FullAccess") ||
        parseGetToken?.ObservationsController?.includes("Update");

      return permission;
    },
    toogleButtons(): boolean {
      return this.readOnly === true ? false : true;
    },
    textBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
    numberBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
    blankOptions() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: BlankTypes(this),
        readOnly: this.readOnly,
      });
    },
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    editHandler() {
      this.readOnly = !this.readOnly;
    },
    openPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closePopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    saveExamination() {
      this.examination.observationPrices[0].paymentTypeId = 1;
      this.examination.observationPrices[1].paymentTypeId = 2;
      this.examination.observationPrices[2].paymentTypeId = 3;
      this.examination.observationPrices[3].paymentTypeId = 4;
      let result = (this as any).$refs["examinationForm"].instance.validate();

      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.observations}/${this.examination.id}`,
            this.examination
          ),
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
  .examination-id {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
    color: $red;
  }

  .hidden-buttons {
    display: flex;
    column-gap: 10px;
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

  .payment-title {
    font-weight: $bold-weight;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .info-btn-wrapper {
    display: flex;
    column-gap: 30px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media all and (max-width: 870px) {
    .examination-id {
      padding: 14px 80px;
    }
  }

  @media all and (max-width: 645px) {
    .panel-items {
      row-gap: 10px;
    }
  }

  @media all and (max-width: 630px) {
    .examination-id {
      display: none;
    }

    .save-btn {
      padding: 14px 28px;
    }
  }
}
</style>
