<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showEntry"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="applicantName"
        :caption="$t('entriesPage.patientName')"
        alignment="center"
      />
      <DxColumn
        data-field="applicationNumber"
        :caption="$t('entriesPage.entryNumber')"
        alignment="center"
      />
      <DxColumn
        data-field="applicantNumber"
        :caption="$t('entriesPage.medicalCardNumber')"
        alignment="center"
      />
      <DxColumn
        data-field="paymentStatus"
        :caption="$t('entriesPage.status')"
        alignment="center"
      >
        <DxLookup
          value-expr="id"
          display-expr="name"
          :data-source="paymentTypes"
        />
      </DxColumn>

      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
      <template #cellTemplate="{ data }">
        <div>{{ data.rowIndex + 1 }}</div>
      </template>
    </DxDataGrid>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DataSource from "devextreme/data/data_source";
import { Payments } from "~/infrastructure/data-source/PaymentType";
import { confirm } from "devextreme/ui/dialog";
import {
  DxDataGrid,
  DxColumn,
  DxLookup,
  DxFilterRow,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxFilterRow,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applications,
        }),
      }),
      paymentTypes: Payments(this),
    };
  },
  computed: {
    editButtons() {
      if (this.permissionControler?.includes("FullAccess")) {
        return [
          {
            hint: "удалить",
            icon: "trash",
            onClick: async (e) => {
              const result = confirm(
                this.$t("notification.labels.index"),
                this.$t("notification.labels.confirm")
              );
              result.then((dialogResult) => {
                if (dialogResult) {
                  this.$awn.asyncBlock(
                    this.$axios.delete(
                      `${this.$dataApi.applications}/${e.row.data.id}`
                    ),

                    (e) => {
                      this.$awn.success();
                      this.dataSource.reload();
                    },
                    (e) => {
                      this.$awn.alert();
                    }
                  );
                }
              });
            },
          },

          {},
        ];
      }
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.admin || parseGetToken?.ApplicationsController;

      return permission;
    },
    reportControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let report =
        parseGetToken?.admin ||
        parseGetToken?.ApplicationObservationPaymentsController;

      return report;
    },
  },
  methods: {
    showEntry(e: any) {
      this.$router.push(`/entries/${e.data.id}`);
    },
    addEntries(e) {
      this.$router.push(`/entries/create`);
    },
    toolbarPreparing(e) {
      e.toolbarOptions.items = [
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("cabinetPage.add"),
            icon: "plus",
            visible:
              this.permissionControler?.includes("FullAccess") ||
              this.permissionControler?.includes("Create") ||
              this.permissionControler?.includes("Update"),
          },
          onClick: () => {
            this.addEntries();
          },
        },
        {
          location: "after",
          widget: "dxButton",
          options: {
            hint: this.$t("cabinetPage.add"),
            text: "Hasabat",
            visible: this.reportControler,
          },
          onClick: () => {
            // this.$router.push("/entries/report");
            this.$router.push(`/report`);
          },
        },
        ...e.toolbarOptions.items,
      ];
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}
</style>
