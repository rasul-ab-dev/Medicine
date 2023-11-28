<template>
  <div class="cabinet-card-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="cabinet-id">{{ $route.params.id }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveCabinet" class="save-btn panel-btn">
            {{ $t("cabinetPage.save") }}
          </button>
          <button @click="openPopup" class="cancel-btn panel-btn">
            {{ $t("cabinetPage.cancel") }}
          </button>
        </div>
        <button @click="backHandler" v-else class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
      </div>
      <div v-if="permissionEdit" class="info-btn-wrapper">
        <button @click="editHandler" class="edit-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="form"
        :form-data="cabinet"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
        width="40%"
      >
        <DxSimpleItem
          data-type="string"
          data-field="name"
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
          <button @click="confirmEditor">{{ $t("commonText.yes") }}</button>
          <button @click="closePopup">{{ $t("commonText.no") }}</button>
        </div>
      </div>
    </Popup>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Popup from "~/components/page/popup.vue";
import DxForm, {
  DxSimpleItem,
  DxEmptyItem,
  DxGroupItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
import { DxCheckBox } from "devextreme-vue/check-box";
import { ICabinet } from "~/infrastructure/interfaces/administration/ICabinet";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
export default Vue.extend({
  components: {
    Popup,
    DxForm,
    DxSimpleItem,
    DxEmptyItem,
    DxGroupItem,
    DxLabel,
    DxRequiredRule,
    DxCheckBox,
  },
  props: {
    currentCabinet: {
      type: Object,
      required: true,
    },
  },
  data() {
    let cabinet: ICabinet = this.currentCabinet;
    return {
      cabinet,
      readOnly: true,
    };
  },
  computed: {
    permissionEdit() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.CabinetsController?.includes("FullAccess") ||
        parseGetToken?.CabinetsController?.includes("Update") ||
        parseGetToken?.admin;

      return permission;
    },
    toogleButtons(): boolean {
      return this.readOnly ? false : true;
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
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    confirmEditor() {
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
    saveCabinet() {
      let result = (this as any).$refs["form"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.cabinets}/${this.cabinet.id}`,
            this.cabinet
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
.cabinet-card-wrapper {
  .cabinet-id {
    padding: 12px 200px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
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
    display: flex;
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
    .cabinet-id {
      padding: 14px 80px;
    }
  }

  @media all and (max-width: 645px) {
    .panel-items {
      row-gap: 10px;
    }
  }

  @media all and (max-width: 630px) {
    .cabinet-id {
      display: none;
    }

    .save-btn {
      padding: 14px 28px;
    }
  }
  
}
</style>
