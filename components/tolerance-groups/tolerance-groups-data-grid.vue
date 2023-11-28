<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showToleranceGroup"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="name"
        :caption="$t('toleranceGroup.accessGroupName')"
      />
      <DxColumn
        data-field="userCount"
        alignment="center"
        :caption="$t('toleranceGroup.employeeCount')"
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
import "devextreme/data/odata/store";
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
          loadUrl: this.$dataApi.roles,
        }),
      }),
    };
  },
  computed: {
    editButtons() {
      return [
        {
          icon: "doc",
          onClick: (e: any) => {
            this.$router.push(`/tolerance-groups/${e.row.data.id}`);
          },
        },
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
                  this.$axios.delete(`${this.$dataApi.roles}/${e.row.data.id}`),

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
    },
  },
  methods: {
    showToleranceGroup(e: any) {
      this.$router.push(`/tolerance-groups/${e.data.id}`);
    },
    addAccess() {
      this.$router.push(`/tolerance-groups/create`);
    },
    openPopup() {
      return (this as any).$refs["sortingPopup"].open();
    },
    closePopup() {
      return (this as any).$refs["sortingPopup"].close();
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
            this.addAccess();
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
</style>
