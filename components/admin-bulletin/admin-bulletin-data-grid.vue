<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showBulletin"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="nameTm"
        :caption="$t('bulletinPage.turkmenTitle')"
        alignment="center"
      />
      <DxColumn
        data-field="nameRu"
        :caption="$t('bulletinPage.rusTitle')"
        alignment="center"
      />
      <DxColumn
        data-field="mustRead"
        :caption="$t('bulletinPage.requirement')"
        alignment="center"
      />
      <DxColumn
        data-field="status"
        :caption="$t('bulletinPage.status')"
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
          loadUrl: this.$dataApi.bulletins,
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
                      `${this.$dataApi.bulletins}/${e.row.data.id}`
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
        parseGetToken?.admin || parseGetToken?.BulletinsController;

      return permission;
    },
  },
  methods: {
    showBulletin(e: any) {
      this.$router.push(`/admin-bulletin/${e.data.id}`);
    },
    addBulletin() {
      this.$router.push(`/admin-bulletin/create`);
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
              this.addBulletin();
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
