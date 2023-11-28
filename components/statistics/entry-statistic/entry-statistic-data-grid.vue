<template>
  <div>
    <div class="panel-items fix-header">
      <div class="back-btn-wrapper">
        <div class="entry">{{ $t("statistic.entry") }}</div>
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
      </div>
      <!-- <div class="export-btn-wrapper">
        <button class="export-btn panel-btn">Экспорт отчета</button>
        <button class="export-days-btn panel-btn">Посл. 30 дней</button>
      </div> -->
    </div>
    <div class="component-wrapper">
      <DxForm ref="dateForm" :form-data.sync="formData">
        <DxGroupItem :col-count="2">
          <DxSimpleItem
            data-field="startDate"
            data-type="date"
            editor-type="dxDateBox"
            :editor-options="dateBoxOptions"
          >
            <DxLabel :text="$t('statistic.start')" />
            <!-- <DxRequiredRule /> -->
          </DxSimpleItem>

          <DxSimpleItem
            data-field="endDate"
            data-type="date"
            editor-type="dxDateBox"
            :editor-options="dateBoxOptions"
          >
            <DxLabel :text="$t('statistic.end')" />
            <!-- <DxRequiredRule /> -->
          </DxSimpleItem>
        </DxGroupItem>
      </DxForm>

      <div class="statistic-btn-wrapper">
        <button @click="onGetData" class="show-statistic-btn">{{ $t('statistic.show') }}</button>
      </div>

      <DxChart id="chart" :data-source="chartDataSource">
        <DxSeries
          argument-field="date"
          value-field="count"
          type="stackedbar"
          :name="$t('statistic.entry')"
          color="#7E7CAD"
        />
        <DxLegend
          :customize-items="customizeItems"
          :column-count="2"
          position="inside"
          horizontal-alignment="right"
        >
          <DxBorder :visible="true" />
        </DxLegend>
        <DxTooltip :enabled="true" />
      </DxChart>

      <DxDataGrid
        :data-source="gridDataSource"
        :show-borders="false"
        :hoverStateEnabled="true"
        :allow-column-resizing="true"
        :column-auto-width="true"
      >
        <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
        <DxColumn
          data-field="applicationNumber"
          :caption="$t('statistic.applicantNumber')"
          alignment="center"
        />
        <DxColumn
          data-field="applicantNumber"
          :caption="$t('statistic.applicantNumber')"
          alignment="center"
        />
        <DxColumn
          data-field="applicantName"
          :caption="$t('statistic.patientName')"
          alignment="center"
        />
        <template #cellTemplate="{ data }">
      <div>{{ data.rowIndex + 1 }}</div>
    </template>
      </DxDataGrid>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import DxForm, {
  DxGroupItem,
  DxSimpleItem,
  DxLabel,
  DxRequiredRule,
  DxButtonItem,
} from "devextreme-vue/form";

import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxValueAxis,
  DxTitle,
  DxLegend,
  DxBorder,
  DxExport,
  DxTooltip,
} from "devextreme-vue/chart";
import moment from "moment";
import DataSource from "devextreme/data/data_source";

export default Vue.extend({
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxValueAxis,
    DxTitle,
    DxLegend,
    DxBorder,
    DxExport,
    DxTooltip,
    DxDataGrid,
    DxColumn,
    DxForm,
    DxGroupItem,
    DxSimpleItem,
    DxLabel,
    DxRequiredRule,
    DxButtonItem,
  },
  data() {
    moment.locale("en");
    return {
      formData: {
        startDate: moment().startOf("month").format("YYYY-MM-DD"),
        endDate: moment(Date.now()).format("YYYY-MM-DD"),
      },
      chartDataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applications}/count`,
          customQueryParams: {
            start: moment().startOf("month").format("YYYY-MM-DD"),
            end: moment(Date.now()).format("YYYY-MM-DD"),
          },
        }),
      }),
      gridDataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applications,
        }),
      }),
    };
  },
  computed: {
    dateBoxOptions() {
      return new DateBoxProperties();
    },
  },
  methods: {
    customizeItems(items) {
      const sortedItems = [];

      items.forEach((item) => {
        const startIndex = item.series.stack === "male" ? 0 : 3;
        sortedItems.splice(startIndex, 0, item);
      });
      return sortedItems;
    },
    backHandler() {
      this.$router.go(-1);
    },
    async onGetData() {
      let result = this.$refs["dateForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.get(
            `${this.$dataApi.applications}/count?start=${this.formData.startDate}&end=${this.formData.endDate}`
          ),
          (e) => {
            this.chartDataSource = e.data;

            this.gridDataSource = this.filterGridDataSource();
          },
          (e) => {
            this.$awn.alert();
          }
        );
      }
    },
    filterGridDataSource() {
      return new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applications,
        }),
        filter: [
          ["createdDate", ">=", this.formData.startDate],
          "and",
          ["createdDate", "<=", this.formData.endDate],
        ],
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}

.entry {
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
}

.back-btn-wrapper,
.export-btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.panel-btn {
  font-family: $fontFamily;

  &:hover {
    background-color: $light-blue;
    color: $custom-main-color;
    transition: 0.3s ease-in-out;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }
}

.statistic-btn-wrapper {
  display: flex;
  justify-content: center;

  .show-statistic-btn {
    padding: 14px 50px;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }
}

.export-days-btn,
.export-btn {
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}

.component-wrapper {
  padding: 30px 10px;
}
</style>
