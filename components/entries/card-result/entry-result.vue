<template>
  <div>
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="entry-id">MK000000</div>
        <button @click="backHandler" class="back-btn panel-btn">
          {{ $t("commonText.back") }}
        </button>
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="applicationDiseaseForm"
        :form-data="applicationObservationNote"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxGroupItem :col-count="10">
          <DxSimpleItem
            data-field="cabinetName"
            data-type="string"
            editor-type="dxTextBox"
            :col-span="9"
          >
            <DxLabel :text="$t('entriesPage.result')" />
          </DxSimpleItem>

          <DxSimpleItem :col-span="1" template="show-result" />
        </DxGroupItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxEmptyItem />

        <DxSimpleItem
          data-field="note"
          editor-type="dxTextArea"
          :editor-options="{ minHeight: 100 }"
        >
          <DxLabel :text="$t('entriesPage.note')" />
        </DxSimpleItem>

        <DxSimpleItem template="add-treatment" />

        <DxEmptyItem />
        <DxEmptyItem />

        <template #show-result>
          <button @click="showResult" class="show-result-btn">
            {{ $t('commonText.show') }}
          </button>
        </template>

        <template #add-treatment>
          <button @click="addApplicationNote" class="add-btn">
            {{ $t("commonText.save") }}
          </button>
        </template>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
import { DxDataGrid, DxColumn, DxLookup } from "devextreme-vue/data-grid";
import DxTextArea from "devextreme-vue/text-area";
import DataSource from "devextreme/data/data_source";
import { IApplicationObservationNote } from "~/infrastructure/interfaces/IApplicationObservationNote";
import { ApplicationObservationNote } from "~/infrastructure/classes/ApplicationObservationNote";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxTextArea
  },
  props: {
    entryResult: {
      type: Object,
      required: true,
    },
  },
  data() {
    let applicationObservationNote: IApplicationObservationNote =
      this.entryResult;
    return {
      cabinetDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.cabinets,
      }),
      userDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.users,
      }),
      diseaseDataSource: this.$dxStore({
        key: "id",
        loadUrl: this.$dataApi.diseases,
      }),
      applicationObservationNote,
    };
  },
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
    showResult() {
      this.$router.push({
        path: `/forms/${this.applicationObservationNote.blankType + 1}`,
        query: { id: `${this.applicationObservationNote.id}` },
      });
    },
    deleteButtons() {
      return [
        {
          hint: "удалить",
          icon: "trash",
          onClick: async (e) => {
            this.$awn.asyncBlock(
              this.$axios.delete(
                `${this.$dataApi.applicationDiseaseByApplication}/${e.row.data.id}`
              ),

              (e) => {
                this.$awn.success();
                this.dataSource.reload();
                // this.$router.go(-1);
              },
              (e) => {
                this.$awn.alert();
              }
            );
          },
        },
      ];
    },
    addApplicationNote() {
      let result = this.$refs["applicationDiseaseForm"].instance.validate();
      this.applicationObservationNote.id = this.$route.params.id;
      this.applicationObservationNote.applicationObservationNote =
        this.entryResult.note;
      this.$awn.asyncBlock(
        this.$axios.put(
          `${this.$dataApi.applicationObservationsNote}/${this.$route.params.id}`,
          this.applicationObservationNote
        ),
        (e: any) => {
          this.$awn.success();
          this.dataSource.reload();
        },
        (e: any) => {
          this.$awn.alert();
        }
      );
    },
  },
});
</script>
<style lang="scss" scoped>
.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.entry-id {
  padding: 12px 200px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
}

.panel-btn {
  font-family: $fontFamily;

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

.result-textarea-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

textarea {
  width: 100%;
  height: 120px;
  background-color: $input-bg-color;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  resize: none;
}

.add-btn {
  padding: 12px 42px;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  font-weight: $bold-weight;
  margin-top: 10px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.show-result-btn {
  margin-top: 22px;
  padding: 12px 30px;
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

.diagnosis-btn {
  padding: 12px 30px;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  white-space: nowrap;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}
</style>
