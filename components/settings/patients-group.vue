<template>
  <div class="patient-group">
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
      <DxColumn data-field="name" :caption="$t('setting.nameFile')" />
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
        ref="patientsGroupForm"
        :form-data.sync="patientGroup"
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
        <button @click="savePatientsGroup">{{ $t("commonText.save") }}</button>
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
import DataSource from "devextreme/data/data_source";
import { IPatientsGroup } from "~/infrastructure/interfaces/administration/IPatientsGroup";
import { confirm } from "devextreme/ui/dialog";
import { PatientsGroup } from "~/infrastructure/classes/administration/PatientsGroup";
import "devextreme/data/odata/store";
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
    let patientGroup: IPatientsGroup = new PatientsGroup();
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applicantGroups,
        }),
      }),
      patientGroup,
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
                    `${this.$dataApi.applicantGroups}/${e.row.data.id}`
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
    savePatientsGroup() {
      let result = this.$refs["patientsGroupForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.applicantGroups, this.patientGroup),
          (e: any) => {
            this.$awn.success();
            this.dataSource.reload();
            this.patientGroup.name = "";
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
.patient-group {
  margin: 0 10px;
}

.component-wrapper {
  padding: 10px;
}
</style>
