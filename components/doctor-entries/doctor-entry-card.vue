<template>
  <div class="doctor-entries-card-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="entries-id">000000000000000</button>
        <button @click="backHandler" class="save-btn panel-btn">Назад</button>
      </div>
      <div>
        <div class="print-wrapper">
          <button class="paid-btn panel-btn">Оплачено</button>
          <button class="print-btn panel-btn" />
        </div>
      </div>
    </div>
    <div class="component-wrapper">
      <div>
        <input class="input name" type="text" />
      </div>

      <div class="horizont-line" />

      <div>
        <DxDataGrid
          :data-source="dataSource"
          :show-borders="false"
          :hoverStateEnabled="true"
          :allow-column-resizing="true"
          :column-auto-width="true"
          @row-dbl-click="showEntryResult"
          height="240px"
        >
          <DxColumn data-field="Product_ID" :width="40" />
          <DxColumn :width="250" data-field="Product_Name" />
          <DxColumn
            data-field="Product_Cost"
            caption="Cost"
            data-type="number"
            format="currency"
            alignment="left"
          />
          <DxColumn
            data-field="Product_Sale_Price"
            caption="Sale Price"
            data-type="number"
            format="currency"
          />
          <DxColumn
            data-field="Product_Retail_Price"
            caption="Retail Price"
            data-type="number"
            format="currency"
          />
          <DxColumn
            data-field="Product_Current_Inventory"
            caption="Inventory"
          />
        </DxDataGrid>
      </div>

      <div class="additional-payment-wrapper">
        <span class="additional-payment-title">Дополнительная оплата</span>
        <p>Название</p>
        <input class="input service-name" type="text" />
        <p>Сумма</p>
        <div class="sum-input-wrapper">
          <input class="sum-input input" type="text" />
        </div>
      </div>

      <div class="note-wrapper">
        <span>Примечание</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
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
      dataSource: {
        store: {
          type: "odata",
          url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
          key: "Product_ID",
        },
        select: [
          "Product_ID",
          "Product_Name",
          "Product_Cost",
          "Product_Sale_Price",
          "Product_Retail_Price",
          "Product_Current_Inventory",
        ],
        filter: ["Product_Current_Inventory", ">", 0],
      },
    };
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showEntryResult() {
      this.$router.push("/doctor-entries/card-result");
    },
  },
});
</script>
<style lang="scss" scoped>
.doctor-entries-card-wrapper {
  .entries-id {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
    color: $red;
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

  .component-wrapper {
    row-gap: 40px;
    padding: 30px 50px;
  }

  .info-form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  .entries-number {
    width: 20%;
  }

  .name {
    width: 40%;
  }

  .print-wrapper {
    display: flex;
    column-gap: 30px;
    align-items: center;
  }

  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }

  .info-btn-wrapper {
    display: flex;
    column-gap: 30px;
  }

  .panel-items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .new-patient {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
  }

  .note-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    textarea {
      padding: 10px 16px;
      min-height: 86px;
      resize: none;
    }
  }

  .additional-payment-wrapper {
    display: flex;
    flex-direction: column;

    .additional-payment-title {
      margin-bottom: 20px;
    }

    .service-name {
      margin-bottom: 20px;
      width: 30%;
    }

    .sum-input-wrapper {
      display: flex;
      align-items: center;
      column-gap: 50px;

      .sum-input {
        width: 18%;
      }
    }

    p {
      margin-bottom: 10px;
      font-weight: $bold-weight;
    }
  }
}
</style>
