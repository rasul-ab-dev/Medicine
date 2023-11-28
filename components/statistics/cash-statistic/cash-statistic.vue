<template>
  <div class="cash-statistic-wrapper" id="chart-demo">
    <span>{{ $t("statistic.payment") }}</span>
    <DxChart id="chart" :data-source="chartDataSource" palette="Violet">
      <DxCommonSeriesSettings type="stackedbar" argument-field="date" />
      <DxSeries
          value-field="tmtPrice"
          :name="$t('statistic.currencyManat')"
          stack="Manat"
        />
        <DxSeries
          value-field="usdPrice"
          :name="$t('statistic.currencyDollar')"
          stack="Dollar"
        />
      <DxLegend position="inside" horizontal-alignment="right">
        <DxBorder :visible="true" />
      </DxLegend>
      <DxTooltip :enabled="true" />
    </DxChart>
    <button @click="showCashStatistic" class="show-statistic-btn">
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
  DxExport,
  DxBorder,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
} from "devextreme-vue/chart";
import DxSelectBox from "devextreme-vue/select-box";
import moment from "moment";
import DataSource from "devextreme/data/data_source";

export default Vue.extend({
  components: {
    DxSelectBox,
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxExport,
    DxBorder,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip,
  },

  data() {
    return {
      chartDataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: `${this.$dataApi.applicationObservationPayments}/count`,
          customQueryParams: {
            start: moment().startOf("month").format("YYYY-MM-DD"),
            end: moment(Date.now()).format("YYYY-MM-DD").replaceAll("/", "."),
          },
        }),
      }),
    };
  },
  methods: {
    showCashStatistic() {
      this.$router.push(`/statistics/cash-statistic`);
    },
  },
});
</script>
<style lang="scss" scoped>
#chart {
  width: 90%;
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
}

span {
  display: block;
  text-align: center;
  margin-bottom: 10px;
}
</style>
