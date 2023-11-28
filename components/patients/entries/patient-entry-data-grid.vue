<template>
  <div>
    <div class="search-panel-wrapper fix-header">
      <!-- <div>
        <input class="search-input" v-model="search" type="search" />
        <button @click="addEntry" class="add panel-btn">
          {{ $t("patientPage.add") }}
        </button>
        <button @click="backHandler" class="add panel-btn">
          {{ $t("patientPage.cancel") }}
        </button>
      </div> -->
      <button @click="openPopup" class="sorting panel-btn" />
    </div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showEntry"
    >
      <DxColumn data-field="id" :width="40" />
      <DxColumn
        data-field="applicationNumber"
        :caption="$t('patientPage.entriesNumber')"
        alignment="center"
      />
      <DxColumn
        data-field="applicantNumber"
        :caption="$t('patientPage.medicalCardNumber')"
        alignment="center"
      />
      <DxColumn
        data-field="applicantId"
        :caption="$t('patientPage.patientName')"
        alignment="center"
      >
        <DxLookup
          value-expr="id"
          display-expr="firstName"
          :data-source="applicantDataSource"
        />
      </DxColumn>
      <DxColumn
        data-field="paymentState"
        :caption="$t('patientPage.status')"
        alignment="center"
      />

      <DxColumn
        :caption="$t('patientPage.result')"
        :width="100"
        :buttons="editButtons"
        type="buttons"
      />
    </DxDataGrid>

    <Popup
      :hideOnOutsideClick="true"
      ref="sortingPopup"
      position="right top"
      width="auto"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="sorting-item">
        <span>{{ $t("patientPage.sort.byDefault") }}</span>
        <span>{{ $t("patientPage.sort.byEntryNumber") }}</span>
        <span>{{ $t("patientPage.sort.byMedicalCardNumber") }}</span>
        <span>{{ $t("patientPage.sort.byPatientName") }}</span>
        <span>{{ $t("patientPage.sort.byStatus") }}</span>
      </div>
    </Popup>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import Popup from "~/components/page/popup.vue";
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn, DxLookup } from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    Popup,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applications,
        }),
        filter: ["id" === this.$route.query.id],
      }),
      applicantDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.applicants,
      }),
      editButtons: [
        {
          icon: "doc",
          onClick: (e: any) => {
            this.$router.push(`/patients/entries/${e.row.data.id}`);
          },
        },
      ],
    };
  },
  computed: {},
  methods: {
    showEntry(e: any) {
      this.$router.push(`/patients/entries/${e.data.id}`);
    },
    addEntry(e: string) {
      this.$router.push(`/patients/entries/create`);
    },
    backHandler() {
      this.$router.go(-1);
    },
    openPopup() {
      return (this as any).$refs["sortingPopup"].open();
    },
    closePopup() {
      return (this as any).$refs["sortingPopup"].close();
    },
  },
});
</script>
<style lang="scss" scoped>
.search-panel-wrapper {
  display: flex;
  justify-content: space-between;
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
  height: 42px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-image: url("~assets/images/magnifyingGlass.png");
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: right;
  background-color: $custom-main-color;

  &:focus {
    background: none;
    background-color: $custom-main-color;
    border: 1px solid $light-blue;
  }
}

.panel-btn {
  font-family: $fontFamily;
  background-color: $custom-main-color;
  border-radius: 10px;
  cursor: pointer;

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

.add {
  font-weight: $bold-weight;
  padding: 12px 42px;
  border: none;
}

.add:hover {
  background-color: $light-blue;
  color: $custom-main-color;
  transition: 0.3s ease-in-out;
}

.add:active {
  box-shadow: inset 0 2px 2px 0 #333;
  transition: 0.1s ease-out;
  -webkit-box-shadow: inset 1px 1px 8px #333;
  -moz-box-shadow: inset 1px 1px 8px #333;
  box-shadow: inset 1px 1px 8px #333;
}
</style>
