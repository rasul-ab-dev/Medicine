<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showForms"
    >
      <DxColumn data-field="name" :caption="$t('blanks.blanks')" />
    </DxDataGrid>
  </div>
</template>
  <script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import "devextreme/data/odata/store";
import { BlankTypes } from "~/infrastructure/data-source/BlankTypes";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
  },
  data() {
    return {
      dataSource: BlankTypes(this),
    };
  },
  mounted() {},
  methods: {
    showForms(e: any) {
      this.$router.push(`blanks/${e.data.id + 1}`);
    },
  },
});
</script>
  <style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}
</style>
  