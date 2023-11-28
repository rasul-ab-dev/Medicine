<template>
  <DxDataGrid
    class="component-wrapper"
    :data-source="dataSource"
    :show-borders="false"
    :hoverStateEnabled="true"
    :allow-column-resizing="true"
    :highlight-changes="true"
    :column-auto-width="true"
    @row-dbl-click="showCabinet"
    @toolbar-preparing="toolbarPreparing"
  >
    <DxFilterRow :visible="true" />
    <DxSearchPanel :visible="true" :width="250" />
    <DxSorting mode="single" />
    <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40">
    </DxColumn>
    <DxColumn data-field="name" :caption="$t('cabinetPage.cabinetName')" />
    <DxColumn
      data-field="phone"
      :caption="$t('cabinetPage.phoneNumber')"
      alignment="center"
    />
    <DxColumn
      data-field="number"
      :caption="$t('cabinetPage.cabinetNumber')"
      alignment="center"
    />
    <DxColumn
      data-field="flat"
      :caption="$t('cabinetPage.floor')"
      alignment="center"
    />
    <DxColumn :width="100" :buttons="editButtons" type="buttons" />
    <template #cellTemplate="{ data }">
      <div>{{ data.rowIndex + 1 }}</div>
    </template>
  </DxDataGrid>
</template>
<script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import { confirm } from "devextreme/ui/dialog";
import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxFilterRow,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxFilterRow,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.cabinets,
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
                      `${this.$dataApi.cabinets}/${e.row.data.id}`
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
      }
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.admin || parseGetToken?.CabinetsController;

      return permission;
    },
  },
  methods: {
    showCabinet(e: any) {
      this.$router.push(`/cabinet/${e.data.id}`);
    },
    addCabinet(e) {
      this.$router.push(`/cabinet/create`);
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
              this.addCabinet();
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
