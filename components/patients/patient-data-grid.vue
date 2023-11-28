<template>
  <div>
    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
      @row-dbl-click="showPatient"
      @toolbar-preparing="toolbarPreparing"
    >
      <DxFilterRow :visible="true" />
      <DxSearchPanel position="after" :visible="true" :width="250" />
      <DxColumn data-field="№" cellTemplate="cellTemplate" :width="40" />
      <DxColumn
        data-field="firstName"
        :caption="$t('patientPage.patientName')"
        alignment="center"
      />
      <DxColumn
        data-field="applicantNumber"
        :caption="$t('patientPage.medicalCardNumber')"
        alignment="center"
      />
      <DxColumn
        data-field="dateOfBirth"
        data-type="date"
        :caption="$t('patientPage.birthday')"
        alignment="center"
      />
      <DxColumn
        data-field="phone1"
        :caption="$t('patientPage.phone')"
        alignment="center"
      />
      <DxColumn
        data-field="passportNumber"
        :caption="$t('patientPage.passportNumber')"
        alignment="center"
      />
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
import { confirm } from "devextreme/ui/dialog";
import {
  DxDataGrid,
  DxColumn,
  DxFilterRow,
  DxSearchPanel,
} from "devextreme-vue/data-grid";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxSearchPanel,
  },
  data() {
    return {
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.applicants,
        }),
      }),
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
                      `${this.$dataApi.applicants}/${e.row.data.id}`
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
        ];
      }
    },
    permissionControler() {
      let getToken = localStorage.getItem("parseToken");
      let parseGetToken = JSON.parse(getToken);
      let permission =
        parseGetToken?.admin || parseGetToken?.ApplicantsController;

      return permission;
    },
  },
  methods: {
    addPatient(e: string) {
      this.$router.push(`/patients/create`);
    },
    showPatient(e: any) {
      this.$router.push(`/patients/${e.data.id}`);
    },
    toolbarPreparing(e) {
      if (
        this.permissionControler?.includes("FullAccess") ||
        this.permissionControler?.includes("Create") ||
        this.permissionControler?.includes("Update")
      ) {
        e.toolbarOptions.items = [
          {
            location: "after",
            widget: "dxButton",
            options: {
              hint: this.$t("cabinetPage.add"),
              icon: "plus",
            },
            onClick: () => {
              this.addPatient();
            },
          },
          ...e.toolbarOptions.items,
        ];
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  padding: 10px;
}
</style>
