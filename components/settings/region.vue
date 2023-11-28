<template>
  <div class="region-wrapper">
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <!-- <DxSelection mode="multiple" /> -->
      <DxSorting mode="single" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn data-field="name" :caption="$t('setting.nameFile')" />
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
      <template #cellTemplate="{ data }">
        <div>{{ data.rowIndex + 1 }}</div>
      </template>
    </DxDataGrid>

    <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>Вы хотите удалить выбранные медиафайлы?</span>
        <div class="confirm-btn">
          <button @click="closePopup">Да</button>
          <button @click="closePopup">Нет</button>
        </div>
      </div>
    </Popup>

    <Popup
      ref="addPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <DxForm
        ref="regionForm"
        :form-data.sync="region"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem data-field="name">
          <DxLabel :text="$t('setting.nameFile')" />
          <DxRequiredRule />
        </DxSimpleItem>
      </DxForm>
      <div class="diagnosis-btn-wrapper">
        <button @click="saveRegion">{{ $t("commonText.save") }}</button>
        <button @click="closeAddPopup">{{ $t("commonText.cancel") }}</button>
      </div>
    </Popup>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Popup from "~/components/page/popup.vue";
import {
  DxDataGrid,
  DxColumn,
  DxSearchPanel,
  DxSorting,
  DxRequiredRule,
} from "devextreme-vue/data-grid";
import DxForm, {
  DxSimpleItem,
  DxLabel,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import DataSource from "devextreme/data/data_source";
import "devextreme/data/odata/store";
import { IRegion } from "~/infrastructure/interfaces/administration/IRegion";
import { Region } from "~/infrastructure/classes/administration/Region";
import { confirm } from "devextreme/ui/dialog";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DxSorting,
    Popup,
    DxForm,
    DxSimpleItem,
    DxLabel,
    DxEmptyItem,
    DxGroupItem,
    DxRequiredRule,
  },
  data() {
    let region: IRegion = new Region();
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.regions,
        }),
      }),
      region,
    };
  },
  computed: {
    editButtons() {
      return [
        {
          hint: "удалить",
          icon: "trash",
          onClick: async (e) => {
            const result = confirm(
              this.$t("notification.labels.index"),
              this.$t("notification.labels.confirm")
            );
            result.then((dialogResult) => {
              if (dialogResult) {
                this.$awn.asyncBlock(
                  this.$axios.delete(
                    `${this.$dataApi.regions}/${e.row.data.id}`
                  ),

                  (e) => {
                    this.$awn.success();
                    this.dataSource.reload();
                  },
                  (e) => {
                    this.$awn.alert();
                  }
                );
              }
            });
          },
        },
      ];
    },
  },
  methods: {
    openAddPopup() {
      return (this as any).$refs["addPopup"].open();
    },
    closeAddPopup() {
      return (this as any).$refs["addPopup"].close();
    },
    openPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closePopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    saveRegion() {
      let result = this.$refs["regionForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.regions, this.region),
          (e: any) => {
            this.$awn.success();
            this.dataSource.reload();
            this.region.name = "";
          },
          (e: any) => {
            this.$awn.alert();
          }
        );
        this.closeAddPopup();
      }
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("cabinetPage.add"),
            icon: "plus",
          },
          onClick: () => {
            this.openAddPopup();
          },
        },
        ...e.toolbarOptions.items,
      ];
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}

.region-wrapper {
  margin: 0 10px;
}
</style>
