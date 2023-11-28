<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showEmployee"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="firstName"
        :caption="$t('employeePage.employeeName')"
        alignment="center"
      />
      <DxColumn
        data-field="phone"
        :caption="$t('employeePage.phone')"
        alignment="center"
      />
      <DxColumn
        data-field="jobPositionId"
        :caption="$t('employeePage.jobTitle')"
        alignment="center"
      >
        <DxLookup
          value-expr="id"
          display-expr="name"
          :data-source="jobPositionDataSource"
        />
      </DxColumn>
      <DxColumn
        data-field="cabinetId"
        :caption="$t('employeePage.cabinet')"
        alignment="center"
      >
        <DxLookup
          value-expr="id"
          display-expr="name"
          :data-source="cabinetDataSource"
        />
      </DxColumn>
      <DxColumn data-field="roleId" :caption="$t('employeePage.tolerance')">
        <DxLookup
          value-expr="id"
          display-expr="name"
          :data-source="roleIdDataSource"
        />
      </DxColumn>
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
  DxLookup,
  DxFilterRow,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxFilterRow,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.users,
        }),
      }),
      cabinetDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.cabinets,
      }),
      jobPositionDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.jobPositions,
      }),
      roleIdDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.roles,
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
                      `${this.$dataApi.users}/${e.row.data.id}`
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
      let permission = parseGetToken?.admin || parseGetToken?.UsersController;

      return permission;
    },
  },
  methods: {
    showEmployee(e: any) {
      this.$router.push(`/employees/${e.data.id}`);
    },
    employeeAdd() {
      this.$router.push(`/employees/create`);
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
              this.employeeAdd();
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
