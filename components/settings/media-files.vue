<template>
  <div class="mediafile-wrapper">
    <div class="search-panel-wrapper fix-header">
      <div class="search-panel-items">
        <input class="search-input" v-model="search" type="search" />
        <div>
          <button @click="openDeletePopup" class="add panel-btn">
            {{ $t("setting.delete") }}
          </button>
          <button @click="openAddPopup" class="add panel-btn">
            {{ $t("setting.add") }}
          </button>
        </div>
      </div>
    </div>

    <DxDataGrid
      class="component-wrapper"
      :data-source="dataSource"
      :show-borders="false"
      :hoverStateEnabled="true"
      :allow-column-resizing="true"
      :column-auto-width="true"
    >
      <DxSorting mode="single" />
      <DxSelection mode="multiple" />
      <DxColumn data-field="id" :width="40"> </DxColumn>
      <DxColumn data-field="name" :caption="$t('setting.nameFile')" />
      <DxColumn :width="100" :buttons="editButtons" type="buttons" />
    </DxDataGrid>

    <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>Вы хотите удалить выбранные медиафайлы?</span>
        <div class="confirm-btn">
          <button @click="closeDeletePopup">Да</button>
          <button @click="closeDeletePopup">Нет</button>
        </div>
      </div>
    </Popup>

    <Popup
      ref="addPopup"
      width="36vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <!-- <DxForm
        ref="popupForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem data-field="entryNumber">
          <DxLabel :text="$t('setting.nameFile')" />
        </DxSimpleItem>

        <DxEmptyItem />

        <DxGroupItem :col-count="10">
          <DxSimpleItem :col-span="8" template="uploader-field" />
          <DxSimpleItem :col-span="2" template="file-uploader" />
        </DxGroupItem>

        <DxSimpleItem template="mediafile-btn" />

        <template #file-uploader>
          <DxFileUploader
            accept="image/*"
            multiple="true"
            upload-mode="useForm"
            upload-url="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          />
        </template>

        <template #uploader-field>
          <div class="file-name"></div>
        </template>

        <template #mediafile-btn>
          <div class="diagnosis-btn-wrapper">
            <button @click="saveMediafile">{{ $t("commonText.save") }}</button>
            <button @click="closeAddPopup">
              {{ $t("commonText.cancel") }}
            </button>
          </div>
        </template>
      </DxForm> -->
      <div class="file-upload-popup">
        <div class="file-name-wrapper">
          <label for="upload">{{ $t("setting.nameFile") }}</label>
          <input type="text" class="input" />
        </div>

        <div class="file-wrapper">
          <input id="upload" type="file" class="input" />
          <label class="choose-file" for="upload">{{
            $t("setting.choose")
          }}</label>
        </div>
        <div class="diagnosis-btn-wrapper">
          <button>{{ $t("commonText.save") }}</button>
          <button @click="closeAddPopup">
            {{ $t("commonText.cancel") }}
          </button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxLabel,
  DxRequiredRule,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import Popup from "~/components/page/popup.vue";
import {
  DxDataGrid,
  DxColumn,
  DxSearchPanel,
  DxSorting,
  DxSelection,
} from "devextreme-vue/data-grid";
import DataSource from "devextreme/data/data_source";
import { ISettings } from "~/infrastructure/interfaces/administration/ISettings";
import { Settings } from "~/infrastructure/classes/administration/Settings";
import { DxFileUploader } from "devextreme-vue/file-uploader";
import "devextreme/data/odata/store";
export default Vue.extend({
  components: {
    DxDataGrid,
    DxColumn,
    DxSearchPanel,
    DxSorting,
    Popup,
    DxForm,
    DxSimpleItem,
    DxLabel,
    DxRequiredRule,
    DxEmptyItem,
    DxGroupItem,
    DxSelection,
    DxFileUploader,
  },
  data() {
    let mediafile: ISettings = new Settings();
    return {
      mediafile,
      dataSource: new DataSource({
        store: this.$dxStore({
          key: "id",
          loadUrl: this.$dataApi.images,
        }),
      }),
      search: "",
    };
  },
  computed: {
    searchHandler() {
      return this.dataSource._items.filter((el) => {
        return el.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    editButtons() {
      return [
        {
          hint: "удалить",
          icon: "trash",
          onClick: async (e) => {
            this.$awn.asyncBlock(
              this.$axios.delete(`${this.$dataApi.images}/${e.row.data.id}`),

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
  },
  methods: {
    openAddPopup() {
      return (this as any).$refs["addPopup"].open();
    },
    closeAddPopup() {
      return (this as any).$refs["addPopup"].close();
    },
    openDeletePopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closeDeletePopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    saveMediafile() {
      let result = (this as any).$refs["popupForm"].instance.validate();
      if (result.isValid) {
        (this as any).$awn.asyncBlock(
          this.$axios.post(" http://localhost:3001/mediafile", this.mediafile),
          (e: any) => {
            (this as any).$awn.success();
            // this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e: any) => {
            (this as any).$awn.alert();
          }
        );
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.mediafile-wrapper {
  margin: 0 10px;
}
.search-panel-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .search-panel-items {
    display: flex;
    justify-content: space-between;
  }

  div {
    display: flex;
    column-gap: 10px;
  }
}

.component-wrapper {
  padding: 10px;
}

.search-input {
  position: relative;
  width: 400px;
  height: 42px;
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
    background-color: $custom-main-color;
    border: 1px solid $light-blue;
  }
}

.panel-btn {
  background-color: $custom-main-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: $light-blue;
    color: $custom-main-color;
    transition: 0.3s ease-in-out;
  }

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.add {
  font-weight: $bold-weight;
  padding: 12px 42px;
  border: none;
}

.file-name-wrapper {
  display: flex;
  flex-direction: column;

  .input:focus {
    border: 1px solid #337ab7;
  }
}

input::-webkit-file-upload-button {
  visibility: hidden;
}

.file-upload-popup {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.file-wrapper {
  display: flex;
  column-gap: 20px;
}

.choose-file {
  padding: 12px 42px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  background-color: $input-bg-color;
  cursor: pointer;
}
.file-name {
  width: 100%;
  height: 42px;
  border-radius: 10px;
  padding: 8px;
  background-color: $input-bg-color;
}
</style>
