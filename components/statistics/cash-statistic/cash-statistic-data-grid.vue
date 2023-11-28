<template>
  <div class="cash-statistic-data-grid-wrapper" id="chart-demo">
    <div class="panel-items fix-header">
      <div class="back-btn-wrapper">
        <div class="cash">{{ $t("statistic.cash") }}</div>
        <button @click="backHandler" class="back-btn">
          {{ $t("commonText.back") }}
        </button>
      </div>
      <!-- <div class="export-btn-wrapper">
        <button class="export-btn">Экспорт отчета</button>
        <button class="export-days-btn">Посл. 30 дней</button>
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
          </DxSimpleItem>

          <DxSimpleItem
            data-field="endDate"
            data-type="date"
            editor-type="dxDateBox"
            :editor-options="dateBoxOptions"
          >
            <DxLabel :text="$t('statistic.end')" />
          </DxSimpleItem>
        </DxGroupItem>
      </DxForm>

      <div class="statistic-btn-wrapper">
        <button @click="onGetData" class="show-statistic-btn">
          {{ $t("statistic.show") }}
        </button>
      </div>

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
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import {
  DxChart,
  DxSeries,
  DxArgumentAxis,
  DxCommonSeriesSettings,
  DxExport,
  DxGrid,
  DxBorder,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
} from "devextreme-vue/chart";
import DxForm, {
  DxGroupItem,
  DxSimpleItem,
  DxLabel,
  DxRequiredRule,
  DxButtonItem,
} from "devextreme-vue/form";
import { DateBoxProperties } from "~/infrastructure/components-properties/DateBoxProperties";
import moment from "moment";
import DataSource from "devextreme/data/data_source";

export default Vue.extend({
  components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxExport,
    DxBorder,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip,
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
          loadUrl: `${this.$dataApi.applicationObservationPayments}/count`,
          customQueryParams: {
            start: moment().startOf("month").format("YYYY-MM-DD"),
            end: moment(Date.now()).format("YYYY-MM-DD"),
          },
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
    backHandler() {
      this.$router.go(-1);
    },
    async onGetData() {
      let result = this.$refs["dateForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.get(
            `${this.$dataApi.applicationObservationPayments}/count?start=${this.formData.startDate}&end=${this.formData.endDate}`
          ),
          (e) => {
            this.chartDataSource = e.data;
          },
          (e) => {
            this.$awn.alert();
          }
        );
      }
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
.cash {
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-family: $fontFamily;
  font-weight: $bold-weight;
}
.back-btn-wrapper,
.export-btn-wrapper {
  display: flex;
  column-gap: 10px;
  font-family: $fontFamily;
}
.export-days-btn,
.export-btn {
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  font-family: $fontFamily;
  cursor: pointer;
}
.component-wrapper {
  padding: 30px 10px;
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
</style>
