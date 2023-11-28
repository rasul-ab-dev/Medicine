<template>
  <div>
    <div class="panel-items fix-header">
      <button class="statistic">{{ $t("statistic.statistic") }}</button>
      <!-- <button class="print-btn" /> -->
    </div>
    <div class="component-wrapper">
      <div class="statistic-block">
        <PatientStatisticBlock />
        <EntryStatisticBlock />
        <CashStatisticBlock />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PatientStatisticBlock from "~/components/statistics/patient-statistic/patient-statistic.vue";
import EntryStatisticBlock from "~/components/statistics/entry-statistic/entry-statistic.vue";
import CashStatisticBlock from "~/components/statistics/cash-statistic/cash-statistic.vue";

export default Vue.extend({
  components: {
    PatientStatisticBlock,
    EntryStatisticBlock,
    CashStatisticBlock,
  },
});
</script>
<style lang="scss" scoped>
.statistic {
  padding: 14px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
}

.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.statistic-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 90px;
}
</style>
