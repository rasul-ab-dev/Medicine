<template>
  <div class="cabinet-create-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="create-cabinet">
          {{ $t("cabinetPage.newCabinet") }}
        </button>
        <button @click="saveCabinet" class="save-btn panel-btn">
          {{ $t("cabinetPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("cabinetPage.cancel") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="form"
        :read-only="false"
        :form-data="cabinet"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
        width="40%"
      >
        <DxGroupItem>
          <DxSimpleItem
            data-field="name"
            data-type="string"
            editor-type="dxTextBox"
            :editor-options="textBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('cabinetPage.cabinetName')" />
          </DxSimpleItem>

          <DxEmptyItem />
          <DxEmptyItem />

          <DxSimpleItem
            data-type="string"
            data-field="phone"
            :editor-options="numberBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('cabinetPage.phoneNumber')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="3">
          <DxSimpleItem
            data-type="string"
            data-field="number"
            :editor-options="numberBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('cabinetPage.cabinetNumber')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-type="string"
            data-field="flat"
            :editor-options="numberBoxOptions"
          >
            <DxRequiredRule />
            <DxLabel :text="$t('cabinetPage.floor')" />
          </DxSimpleItem>
        </DxGroupItem>

        <DxEmptyItem />
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
import { DxCheckBox } from "devextreme-vue/check-box";
import { ICabinet } from "~/infrastructure/interfaces/administration/ICabinet";
import { Cabinet } from "~/infrastructure/classes/administration/Cabinet";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { NumberBoxProperties } from "~/infrastructure/components-properties/NumberBoxProperties";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxCheckBox,
  },
  data() {
    let cabinet: ICabinet = new Cabinet();
    return {
      cabinet,
    };
  },
  computed: {
    textBoxOptions() {
      return new TextBoxProperties();
    },
    numberBoxOptions() {
      return new NumberBoxProperties({});
    },
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
    saveCabinet() {
      let result = this.$refs["form"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.cabinets, this.cabinet),
          (e: any) => {
            this.$awn.success();
            this.$emit("successedSaved", e.data);
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
.cabinet-create-wrapper {
  .create-cabinet {
    font-family: $fontFamily;
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
    }

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
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
    .create-cabinet {
      padding: 14px 50px;
    }

    .save-btn {
      padding: 14px 30px;
    }
  }

  @media all and (max-width: 730px) {
    .create-cabinet {
      display: none;
    }
  }
}
</style>
