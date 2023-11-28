<template>
  <div class="edit-bulletin-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="new-bulletin">{{ $t("bulletinPage.bulletin") }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveBulletin" class="save-btn panel-btn">
            {{ $t("bulletinPage.save") }}
          </button>
          <button @click="cancelCreate" class="cancel-btn panel-btn">
            {{ $t("bulletinPage.cancel") }}
          </button>
        </div>
      </div>
      <div class="info-btn-wrapper">
        <button @click="showStatistic" class="bulletin-statistic panel-btn">
          {{ $t("bulletinPage.statistic") }}
        </button>
        <button @click="showBulletin" class="air-play-btn panel-btn" />
        <button @click="editHandler" class="edit-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        ref="bulletinForm"
        :form-data.sync="formData"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
        width="100%"
      >
        <DxSimpleItem
          data-field="nameTm"
          data-type="string"
          editor-type="dxTextBox"
          :editor-options="textBoxOptions"
        >
          <DxLabel :text="$t('bulletinPage.turkmenTitle')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem data-field="nameRu" :editor-options="textBoxOptions">
          <DxLabel :text="$t('bulletinPage.rusTitle')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem template="imageUpload" />

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem data-field="descriptionTm" template="htmlEditorTm">
          <DxLabel text=" " />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem data-field="descriptionRu" template="htmlEditorRu">
          <DxLabel text=" " />
        </DxSimpleItem>

        <template #imageUpload>
          <div class="photo-title-wrapper">
            <span>{{ $t("bulletinPage.titlePhoto") }}</span>
            <div>
              <input
                @change="editorImage"
                :readonly="readOnly"
                id="upload-photo"
                class="input"
                type="file"
              />
              <label :readonly="readOnly" class="add-photo" for="upload-photo">
                {{ $t("bulletinPage.choose") }}
              </label>
            </div>
          </div>
        </template>

        <template #htmlEditorTm>
          <div>
            <span class="tkm-text"> {{ $t("bulletinPage.tkmText") }}</span>

            <HtmlEditor
              :readonly="textBoxOptions"
              :description="formData.descriptionTm"
              @valueChanged="
                (e) => {
                  formData.descriptionTm = e;
                }
              "
            />
          </div>
        </template>

        <template #htmlEditorRu>
          <div>
            <span class="rus-text">{{ $t("bulletinPage.rusText") }}</span>

            <HtmlEditor
              :readonly="textBoxOptions"
              :description="formData.descriptionRu"
              @valueChanged="
                (e) => {
                  formData.descriptionRu = e;
                }
              "
            />
          </div>
        </template>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxGroupItem :col-count="14">
          <DxSimpleItem
            data-field="mustRead"
            data-type="boolean"
            editor-type="dxCheckBox"
            :col-span="2"
            css-class="examination-name"
          >
            <DxLabel location="right" :text="$t('bulletinPage.isRead')" />
          </DxSimpleItem>

          <DxSimpleItem
            data-field="status"
            editor-type="dxCheckBox"
            :col-span="2"
            css-class="examination-name"
          >
            <DxLabel location="right" :text="$t('bulletinPage.hide')" />
          </DxSimpleItem>
        </DxGroupItem>
      </DxForm>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxButtonItem,
  DxLabel,
  DxRequiredRule,
  DxEmptyItem,
  DxGroupItem,
} from "devextreme-vue/form";
import {
  DxHtmlEditor,
  DxToolbar,
  DxMediaResizing,
  DxImageUpload,
  DxItem,
} from "devextreme-vue/html-editor";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxSelectBox } from "devextreme-vue/select-box";
import { IBulletin } from "~/infrastructure/interfaces/IBulletin";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import HtmlEditor from "./htmlEditor/htmlEditor.vue";
export default Vue.extend({
  components: {
    DxHtmlEditor,
    DxMediaResizing,
    DxToolbar,
    DxItem,
    DxImageUpload,
    DxCheckBox,
    DxSelectBox,
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxEmptyItem,
    DxGroupItem,
    HtmlEditor,
  },
  props: {
    currentBulletin: {
      type: Object,
      required: true,
    },
  },
  data() {
    let formData: IBulletin = this.currentBulletin;
    return {
      formData,
      readOnly: true,
    };
  },
  computed: {
    textBoxOptions() {
      return {
        readOnly: this.readOnly,
      };
    },
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
    showStatistic() {
      this.$router.push(`/admin-bulletin/statistic`);
    },
    editHandler() {
      this.readOnly = !this.readOnly;
    },
    showBulletin() {
      this.$router.push(`/admin-bulletin/show/${this.formData.id}`);
    },
    toogleButtons(): boolean {
      return this.readOnly === true ? false : true;
    },
    saveBulletin() {
      const formData = new FormData();
      formData.append("Id", this.formData.id);
      formData.append("NameTm", this.formData.nameTm);
      formData.append("NameRu", this.formData.nameRu);
      formData.append("DescriptionTm", this.formData.descriptionTm);
      formData.append("DescriptionRu", this.formData.descriptionRu);
      formData.append("MustRead", this.formData.mustRead);
      formData.append("Image", this.formData.image);
      let result = this.$refs["bulletinForm"].instance.validate();
      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios({
            method: "put",
            url: `${this.$dataApi.bulletins}/${this.formData.id}`,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          }),
          (e) => {
            this.$awn.success();
            this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e) => {
            this.$awn.alert();
          }
        );
      }
    },
    editorImage(e) {
      this.formData.image = e.target.files[0];
    },
  },
});
</script>
<style lang="scss" scoped>
.edit-bulletin-wrapper {
  .new-bulletin {
    font-family: $fontFamily;
    padding: 12px 150px;
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

  .component-wrapper {
    display: flex;
    row-gap: 40px;
    padding: 30px 50px;
  }

  .hidden-buttons {
    display: flex;
    column-gap: 10px;
  }

  .photo-title-wrapper {
    div {
      display: flex;
      column-gap: 20px;
    }
  }

  #upload-photo {
    width: 34%;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "";
    }
  }

  .add-photo {
    padding: 12px 42px;
    border: none;
    border-radius: 10px;
    font-weight: $bold-weight;
    background-color: $input-bg-color;
    cursor: pointer;
  }

  .choose-file-btn {
    padding: 12px 46px;
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
  }

  .air-play-btn {
    padding: 20px 30px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-image: url("@/assets/images/airplay.png");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: $custom-main-color;
  }

  .dx-htmleditor-content img {
    vertical-align: middle;
    padding-right: 10px;
  }

  .dx-htmleditor-content table {
    width: 50%;
  }

  .options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
  }

  .caption {
    font-size: 18px;
    font-weight: 500;
  }

  .option {
    margin-top: 10px;
    display: inline-block;
    margin-right: 40px;
  }

  .option > .dx-selectbox,
  .option > .label {
    display: inline-block;
    vertical-align: middle;
  }

  .option > .label {
    margin-right: 10px;
  }

  @media all and (max-width: 1285px) {
    .new-bulletin {
      padding: 14px 80px;
    }
  }

  @media all and (max-width: 1240px) {
    .panel-items {
      row-gap: 10px;
    }
  }

  @media all and (max-width: 1148px) {
    .new-bulletin {
      display: none;
    }

    .save-btn {
      padding: 14px 28px;
    }
  }
}
</style>
