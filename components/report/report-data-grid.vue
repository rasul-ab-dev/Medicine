<template>
  <DxDataGrid
    class="component-wrapper"
    :data-source="dataSource"
    :show-borders="false"
    :hoverStateEnabled="true"
    :allow-column-resizing="true"
    :highlight-changes="true"
    :column-auto-width="true"
  >
    <DxGrouping :context-menu-enabled="true" />
    <DxGroupPanel :visible="true" />
    <DxFilterRow :visible="true" />
    <DxSorting mode="single" />
    <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40">
    </DxColumn>
    <DxColumn data-field="applicantName" :caption="$t('report.patientName')" />
    <DxColumn
      data-field="paymentDate"
      data-type="date"
      :caption="$t('report.date')"
      alignment="center"
    />
    <DxColumn
      data-field="paymentPrice"
      :caption="$t('report.sum')"
      alignment="center"
    />
    <DxColumn
      data-field="currency"
      :caption="$t('report.currency')"
      alignment="center"
    >
      <DxLookup
        value-expr="id"
        display-expr="name"
        :data-source="paymentTypes"
      />
    </DxColumn>
    <DxSummary>

      <DxGroupItem
      :show-in-group-footer="true"
      column="paymentPrice"
      summary-type="sum"
      
      display-format="Toparlaýyn mukdary: {0}"
      />

      <DxTotalItem column="paymentPrice" summary-type="sum" /> 
    </DxSummary>
    <template #cellTemplate="{ data }">
      <div>{{ data.rowIndex + 1 }}</div>
    </template>
  </DxDataGrid>
</template>
<script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import { CurrencyType } from "~/infrastructure/data-source/Currency";
import { confirm } from "devextreme/ui/dialog";
import {
  DxDataGrid,
  DxColumn,
  DxSorting,
  DxFilterRow,
  DxSelection,
  DxSearchPanel,
  DxLookup,
  DxGrouping,
  DxGroupPanel,
  DxSummary,
  DxTotalItem,
  DxGroupItem,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSorting,
    DxFilterRow,
    DxSelection,
    DxSearchPanel,
    DxLookup,
    DxGrouping,
    DxGroupPanel,
    DxSummary,
    DxTotalItem,
    DxGroupItem,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applicationObservationPayments}/paid`,
        }),
      }),
      paymentTypes: CurrencyType(this),
    };
  },
  computed: {},
  methods: {},
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}
</style>
