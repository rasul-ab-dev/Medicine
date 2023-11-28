<template>
  <div>
    <DxTreeList
      class="component-wrapper"
      height="80vh"
      parent-id-expr="parentId"
      :data-source="dataSource"
      :show-borders="true"
      :hoverStateEnabled="true"
      :errorRowEnabled="false"
      :remote-operations="true"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      :load-panel="{
        enabled: true,
      }"
      :remoteOperations="{
        filtering: true,
        sorting: true,
        grouping: true,
      }"
      @row-dbl-click="rowDblClick"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxHeaderFilter :visible="true" />
      <DxColumnChooser :enabled="true" />
      <DxColumnFixing :enabled="true" />
      <DxSearchPanel position="after" :visible="true" />
      <DxScrolling mode="virtual" />
      <DxStateStoring
        :enabled="true"
        type="localStorage"
        storage-key="organization"
      />
      <DxEditing
        :allow-adding="false"
        :allow-updating="false"
        :allow-deleting="false"
        :useIcons="true"
        mode="row"
      />

      <DxColumn
        data-field="name"
        data-type="string"
        :caption="$t('labels.name')"
      >
        <DxRequiredRule />
      </DxColumn>
      <DxColumn
        data-field="regionId"
        data-type="number"
        :caption="$t('labels.region')"
      >
        <!-- <DxLookup
					value-expr="id"
					display-expr="name"
					:data-source="regionDataSource"
				/> -->
        <DxRequiredRule />
      </DxColumn>
      <DxColumn
        data-field="organizationType"
        data-type="number"
        :caption="$t('labels.organizationType')"
      >
        <!-- <DxLookup
					value-expr="id"
					display-expr="name"
					:data-source="organizationTypeDataSource"
				/> -->
        <DxRequiredRule />
      </DxColumn>
      <DxColumn
        data-field="parentId"
        data-type="number"
        :caption="$t('labels.parent')"
      >
        <!-- <DxLookup
          value-expr="id"
          display-expr="name"
          :data-source="parentDataSource"
        /> -->
      </DxColumn>
      <DxColumn
        data-field="status"
        data-type="number"
        :caption="$t('labels.status')"
      >
        <!-- <DxLookup
          value-expr="id"
          display-expr="name"
          :data-source="statusDataSource"
        /> -->
        <DxRequiredRule />
      </DxColumn>

      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
    </DxTreeList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import {
  DxTreeList,
  DxColumn,
  DxFilterRow,
  DxEditing,
  DxColumnChooser,
  DxHeaderFilter,
  DxSearchPanel,
  DxSelection,
  DxLookup,
  DxScrolling,
  DxRequiredRule,
  DxStateStoring,
  DxColumnFixing,
} from "devextreme-vue/tree-list";
import DataSource from "devextreme/data/data_source";
// import { Statuses } from "~/infrastructure/data-sources/Statuses";
// import { OrganizationTypes } from "~/infrastructure/data-sources/OrganizationTypes";
// import { PermissionControler } from "~/infrastructure/classes/PermissionControler";

export default Vue.extend({
  components: {
    DxSearchPanel,
    DxTreeList,
    DxColumn,
    DxEditing,
    DxHeaderFilter,
    DxScrolling,
    DxLookup,
    DxColumnChooser,
    DxColumnFixing,
    DxFilterRow,
    DxRequiredRule,
    DxStateStoring,
    DxSelection,
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
      return [
        {
          hint: this.$t("labels.detail"),
          icon: "info",
          onClick: (e) => {
            this.$router.push(`/administration/organization/${e.row.data.id}`);
          },
        },
      ];
    },
  },
  methods: {
    rowDblClick(e) {
      this.$router.push(`/administration/organization/${e.data.id}`);
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("labels.plus"),
            icon: "plus",
            // visible: this.canCreate,
          },
          onClick: () => {
            this.$router.push(`/administration/organization/create`);
          },
        },
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("labels.refresh"),
            icon: "refresh",
          },
          onClick: () => {
            this.dataSource.reload();
          },
        },
        ...e.toolbarOptions.items,
      ];
    },
  },
});
</script>