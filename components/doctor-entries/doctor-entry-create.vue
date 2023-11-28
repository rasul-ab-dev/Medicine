<template>
  <div class="doctor-entry-create-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="new-entries">Новая запись</button>
        <button class="save-btn panel-btn">Сохранить</button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          Отменить
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <div class="info-form-wrapper">
        <span>Номер записи</span>
        <input class="input entries-number" type="text" />
      </div>
      <div>
        <input class="input name" type="search" />
        <button class="new-patient">Новый пациент?</button>
      </div>
      <div class="horizont-line" />
      <div class="select-box-wrapper">
        <div>
          <span>Кабинет</span>
          <select name="" id="" class="input" type="text">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <span>Доктор</span>
          <select name="" id="" class="input" type="text">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div class="receptions-wrapper">
        <p>Проводимые приемы, обследования, диагностика</p>
        <select class="input" name="" id="">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div>
          <button class="add-receptions-btn">Добавить</button>
        </div>
      </div>
      <div class="date-input-wrapper">
        <div>
          <span>Дата</span>
          <input class="input" name="trip-start" type="date" />
        </div>
        <div>
          <span>Время</span>
          <input class="input" name="trip-start" type="time" />
        </div>
      </div>
      <div class="note-wrapper">
        <span>Примечание</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button class="add-notes">Добавить</button>

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

      <div class="horizont-line" />

      <div class="additional-payment-wrapper">
        <span class="additional-payment-title">Дополнительная оплата</span>
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
    cancelCreate() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.doctor-entry-create-wrapper {
  .new-entries {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
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

  .input {
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
  }

  .entries-number {
    width: 20%;
  }

  .name {
    background-image: url("@/assets/images/magnifyingGlass.png");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: right;
    background-color: $input-bg-color;
    width: 40%;

    &:focus {
      background-image: none;
      transform: 0.8s;
    }
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

    &:active {
      box-shadow: inset 0 2px 2px 0 #333;
      transition: 0.1s ease-out;
      -webkit-box-shadow: inset 1px 1px 8px #333;
      -moz-box-shadow: inset 1px 1px 8px #333;
      box-shadow: inset 1px 1px 8px #333;
    }
  }

  .select-box-wrapper {
    display: flex;
    column-gap: 54px;

    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 100%;
    }
  }

  .receptions-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    p {
      font-weight: $bold-weight;
    }

    .add-receptions-btn {
      padding: 12px 42px;
      border: none;
      border-radius: 10px;
      font-weight: $bold-weight;
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
  .date-input-wrapper {
    display: flex;
    column-gap: 50px;

    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 18%;
    }
  }
  .note-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    textarea {
      padding: 10px 16px;
      min-height: 84px;
      resize: none;
    }
  }

  .add-notes {
    padding: 12px 42px;
    margin-right: auto;
    font-weight: $bold-weight;
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

  .additional-payment-wrapper {
    display: flex;
    flex-direction: column;

    .additional-payment-title {
      margin-bottom: 20px;
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
