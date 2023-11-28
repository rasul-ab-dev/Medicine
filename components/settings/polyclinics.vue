<template>
  <div class="polyclinic-wrapper">
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxSorting mode="single" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn data-field="name" :caption="$t('setting.nameFile')"/>
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
      <template #cellTemplate="{ data }">
        <div>{{ data.rowIndex + 1 }}</div>
      </template>
    </DxDataGrid>
    <Popup
      ref="addPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <DxForm
        ref="polyclinicForm"
        :form-data.sync="polyclinic"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem data-field="name" data-type="string">
          <DxLabel :text="$t('setting.nameFile')" />
          <DxRequiredRule />
        </DxSimpleItem>
      </DxForm>
      <div class="diagnosis-btn-wrapper">
        <button @click="savePolyclinic">{{ $t("commonText.save") }}</button>
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
  DxSorting,
  DxFilterRow,
  DxSearchPanel,
  DxRequiredRule,
} from "devextreme-vue/data-grid";
import DxForm, {
  DxSimpleItem,
  DxLabel,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import { IPolyclinics } from "~/infrastructure/interfaces/administration/IPolyclinics";
import { Polyclinics } from "~/infrastructure/classes/administration/Polyclinics";
import DataSource from "devextreme/data/data_source";
import { confirm } from "devextreme/ui/dialog";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSorting,
    Popup,
    DxForm,
    DxSimpleItem,
    DxLabel,
    DxEmptyItem,
    DxGroupItem,
    DxFilterRow,
    DxSearchPanel,
    DxRequiredRule,
  },
  data() {
    let polyclinic: IPolyclinics = new Polyclinics();
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.clinics,
        }),
      }),
      polyclinic,
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
                    `${this.$dataApi.clinics}/${e.row.data.id}`
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
    savePolyclinic() {
      let result = this.$refs["polyclinicForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.clinics, this.polyclinic),
          (e: any) => {
            this.$awn.success();
            this.dataSource.reload();
            this.polyclinic.name = "";
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
.polyclinic-wrapper {
  margin: 0 10px;
}

.component-wrapper {
  padding: 10px;
}
</style>
