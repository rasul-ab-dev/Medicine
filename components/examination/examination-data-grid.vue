<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showExamination"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="name"
        :caption="$t('examinationPage.examination')"
      />
      <DxColumn
        data-field="cashNumber"
        :caption="$t('examinationPage.articul')"
        alignment="center"
      />
      <DxColumn
        data-field="observationPrices[0].price"
        :caption="$t('examinationPage.withoutInsuranceGrid')"
        alignment="center"
      />
      <DxColumn
        data-field="observationPrices[1].price"
        :caption="$t('examinationPage.withInsuranceGrid')"
        alignment="center"
      />
      <DxColumn
        data-field="observationPrices[2].price"
        :caption="$t('examinationPage.foreignerGrid')"
        alignment="center"
      />
      <DxColumn
        data-field="observationPrices[3].price"
        :caption="$t('examinationPage.diplomatGrid')"
        alignment="center"
      />
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
      <template #cellTemplate="{ data }">
        <div>{{ data.rowIndex + 1 }}</div>
      </template>
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import { confirm } from "devextreme/ui/dialog";
import "devextreme/data/odata/store";
import {
  DxDataGrid,
  DxColumn,
  DxFilterRow,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.observations,
        }),
      }),
    };
  },
  computed: {
    editButtons() {
      if (this.permissionControler?.includes("FullAccess")) {
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
                      `${this.$dataApi.observations}/${e.row.data.id}`
                    ),

                    (e) => {
                      this.$awn.success();
                      this.dataSource.reload();
                      // this.$router.go(-1);
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
      }
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.admin || parseGetToken?.ObservationsController;

      return permission;
    },
  },
  methods: {
    showExamination(e: any) {
      this.$router.push(`examination/${e.data.id}`);
    },
    addExamination(e) {
      this.$router.push(`/examination/create`);
    },
    toolbarPreparing(e) {
      if (
        this.permissionControler?.includes("FullAccess") ||
        this.permissionControler?.includes("Create") ||
        this.permissionControler?.includes("Update")
      ) {
        e.toolbarOptions.items = [
          {
            location: "after",
            widget: "dxButton",
            options: {
              hint: this.$t("cabinetPage.add"),
              icon: "plus",
            },
            onClick: () => {
              this.addExamination();
            },
          },
          ...e.toolbarOptions.items,
        ];
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}
</style>
