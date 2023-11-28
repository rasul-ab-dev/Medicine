<template>
  <div class="entry-statistic-wrapper">
    <span>{{ $t("statistic.entry") }}</span>
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
    <button @click="showEntryStatistic" class="show-statistic-btn">
      {{ $t("commonText.show") }}
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
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
  },
  data() {
    moment.locale("en");
    return {
      chartDataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applications}/count`,
          customQueryParams: {
            start: moment().startOf("month").format("YYYY-MM-DD"),
            end: moment(Date.now()).format("YYYY-MM-DD").replaceAll("/", "."),
          },
        }),
      }),
    };
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
    showEntryStatistic() {
      this.$router.push(`/statistics/entry-statistic`);
    },
  },
});
</script>
<style lang="scss" scoped>
#chart {
  height: 300px;
  width: 90%;
}

span {
  display: block;
  text-align: center;
  margin-bottom: 10px;
}

.show-statistic-btn {
  display: block;
  margin: 20px auto;
  padding: 12px 32px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  font-family: $fontFamily;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}
</style>
