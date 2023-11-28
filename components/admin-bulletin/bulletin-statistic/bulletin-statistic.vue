<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxSearchPanel :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="userId"
        :caption="$t('bulletinPage.name')"
        alignment="center"
      >
        <DxLookup
          value-expr="id"
          display-expr="firstName"
          :data-source="userDataSource"
        />
      </DxColumn>
      <DxColumn
        data-field="readDate"
        :caption="$t('bulletinPage.readDate')"
        data-type="date"
        alignment="center"
      />
      <DxColumn
        data-field="bulletinId"
        :caption="$t('bulletinPage.bulletinTitle')"
        alignment="center"
      >
        <DxLookup
          value-expr="id"
          display-expr="nameTm"
          :data-source="bulletinDataSource"
        />
      </DxColumn>
      <template #cellTemplate="{ data }">
        <div>{{ data.rowIndex + 1 }}</div>
      </template>
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import {
  DxDataGrid,
  DxColumn,
  DxSearchPanel,
  DxLookup,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DxLookup,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.bulletinReaderInfos,
        }),
      }),
      userDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.users,
      }),
      bulletinDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.bulletins,
      }),
    };
  },

  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("commonText.back"),
            // icon: "plus",
            text: this.$t("commonText.back"),
          },
          onClick: () => {
            this.$router.go(-1);
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
