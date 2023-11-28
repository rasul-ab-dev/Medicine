<template>
  <div class="job-title-wrapper">
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
      ref="addPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="diagnosis-popup-wrapper">
        <DxForm
          ref="jobPositionForm"
          :form-data.sync="jobPosition"
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
          <DxSimpleItem
            data-field="jobPositionType"
            data-type="number"
            editor-type="dxSelectBox"
            :editor-options="jobPositionOption"
          >
            <DxLabel :text="$t('setting.jobTitle')" />
            <DxRequiredRule />
          </DxSimpleItem>
        </DxForm>
        <div class="diagnosis-btn-wrapper">
          <button @click="saveJobPosition">{{ $t("commonText.save") }}</button>
          <button @click="closeAddPopup">{{ $t("commonText.cancel") }}</button>
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
  DxLabel,
  DxRequiredRule,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  // DxSelection,
  DxFilterRow,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";
import { confirm } from "devextreme/ui/dialog";
import { SelectBoxPropertiesWithLocalData } from "~/infrastructure/components-properties/SelectBox/SelectBoxPropertiesWithLocalData";
import { JobPositions } from "~/infrastructure/data-source/JobPositions";
import { IJobPosition } from "~/infrastructure/interfaces/administration/IJobPosition";
import { JobPosition } from "~/infrastructure/classes/administration/JobPosition";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSorting,
    // DxSelection,
    Popup,
    DxForm,
    DxSimpleItem,
    DxLabel,
    DxRequiredRule,
    DxEmptyItem,
    DxGroupItem,
    DxFilterRow,
    DxSearchPanel,
  },
  data() {
    let jobPosition: IJobPosition = new JobPosition();
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.jobPositions,
        }),
      }),
      jobPosition,
    };
  },
  computed: {
    jobPositionOption() {
      return new SelectBoxPropertiesWithLocalData({
        dataSource: JobPositions(this),
        showClearButton: false,
      });
    },
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
                    `${this.$dataApi.jobPositions}/${e.row.data.id}`
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
    saveJobPosition() {
      let result = this.$refs["jobPositionForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.jobPositions, this.jobPosition),
          (e: any) => {
            this.$awn.success();
            this.dataSource.reload();
            this.jobPosition.name = "";
            this.jobPosition.jobPositionType = "";
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
.job-title-wrapper {
  margin: 0 10px;
}

.component-wrapper {
  padding: 10px;
}
</style>
