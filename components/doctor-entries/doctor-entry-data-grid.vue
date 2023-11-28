<template>
  <div>
    <div class="search-panel-wrapper">
      <div>
        <input class="search-input" type="search" />
        <button @click="addEntries" class="add panel-btn">Добавить</button>
      </div>
      <div class="sorting-wrapper">
        <button class="sorting panel-btn" />
      </div>
    </div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="doctorEntryData"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showEntry"
    >
      <DxColumn data-field="id" :width="40" />
      <DxColumn data-field="entryNumber" alignment="center" />
      <DxColumn data-field="medicalCardNumber" alignment="center" />
      <DxColumn data-field="patientName" alignment="center" />
      <DxColumn data-field="paymentState" alignment="center" />
      <DxColumn data-field="result" alignment="center" />
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
  },
  data() {
    return {
      // dataSource: {
      //   store: {
      //     type: "odata",
      //     url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
      //     key: "Product_ID",
      //   },
      //   select: [
      //     "Product_ID",
      //     "Product_Name",
      //     "Product_Cost",
      //     "Product_Sale_Price",
      //     "Product_Retail_Price",
      //     "Product_Current_Inventory",
      //   ],
      //   filter: ["Product_Current_Inventory", ">", 0],
      // },
    };
  },
  computed: {
    doctorEntryData() {
      return this.$store.getters["fakeDataApi/items"];
    },
  },
  methods: {
    showEntry(e: any) {
      this.$router.push(`/doctor-entries/${e.data.id}`);
    },
    addEntries(e: string) {
      this.$router.push(`/doctor-entries/create`);
    },
  },
});
</script>
<style lang="scss" scoped>
.search-panel-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
  div {
    display: flex;
    column-gap: 10px;
  }
}
.component-wrapper {
  padding: 10px;
}

.search-input {
  width: 400px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-image: url("@/assets/images/magnifyingGlass.png");
  background-repeat: no-repeat;
  background-size: 22px;
  background-position: right;
  background-color: $custom-main-color;
  &:focus {
    background-image: none;
    border: 1px solid $light-blue;
  }
}

.add {
  font-weight: $bold-weight;
  padding: 8px 42px;
  background-color: $custom-main-color;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}

.sorting-wrapper {
  display: flex;
  column-gap: 30px;
}

.panel-btn:hover {
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
</style>
