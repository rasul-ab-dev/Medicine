<template>
  <div class="admin-bulletin-wrapper">
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="new-bulletin">
          {{ $t("bulletinPage.newBulletin") }}
        </div>
        <button @click="saveBulletin" class="save-btn panel-btn">
          {{ $t("bulletinPage.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("bulletinPage.cancel") }}
        </button>
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
        <DxSimpleItem data-field="nameTm">
          <DxLabel :text="$t('bulletinPage.turkmenTitle')" />
          <DxRequiredRule />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem data-field="nameRu">
          <DxLabel :text="$t('bulletinPage.rusTitle')" />
          <DxRequiredRule />
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
                id="upload-photo"
                class="input"
                @change="editorImage"
                name="file"
                type="file"
                multiple
              />
              <label class="add-photo" for="upload-photo">
                {{ $t("bulletinPage.choose") }}
              </label>
            </div>
          </div>
        </template>

        <template #htmlEditorTm>
          <div>
            <span class="tkm-text"> {{ $t("bulletinPage.tkmText") }}</span>

            <HtmlEditor
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
  DxEmptyItem,
  DxRequiredRule,
  DxGroupItem,
} from "devextreme-vue/form";
import { DxCheckBox } from "devextreme-vue/check-box";
import HtmlEditor from "./htmlEditor/htmlEditor.vue";
import { IBulletin } from "~/infrastructure/interfaces/IBulletin";
import { Bulletin } from "~/infrastructure/classes/Bulletin";
import { DxSelectBox } from "devextreme-vue/select-box";
export default Vue.extend({
  components: {
    DxCheckBox,
    DxSelectBox,
    DxForm,
    DxSimpleItem,
    DxButtonItem,
    DxLabel,
    DxEmptyItem,
    DxRequiredRule,
    DxGroupItem,
    HtmlEditor,
  },
  data() {
    let formData: IBulletin = new Bulletin();
    return {
      formData,
    };
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
    saveBulletin() {
      const formData = new FormData();
      formData.append("NameTm", this.formData.nameTm);
      formData.append("NameRu", this.formData.nameRu);
      formData.append("DescriptionTm", this.formData.descriptionTm);
      formData.append("DescriptionRu", this.formData.descriptionRu);
      formData.append("MustRead", this.formData.mustRead || false);
      formData.append("Image", this.formData.image);
      let result = this.$refs["bulletinForm"].instance.validate();

      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios({
            method: "post",
            url: this.$dataApi.bulletins,
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
.admin-bulletin-wrapper {
  .new-bulletin {
    font-family: $fontFamily;
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

  .component-wrapper {
    display: flex;
    row-gap: 40px;
    padding: 30px 50px;
  }

  .photo-title-wrapper {
    div {
      display: flex;
      column-gap: 20px;
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

  #upload-photo {
    width: 34%;

    &::-webkit-file-upload-button {
      visibility: hidden;
    }

    &::before {
      content: "";
    }
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
      padding: 14px 50px;
    }

    .save-btn {
      padding: 14px 30px;
    }
  }

  @media all and (max-width: 730px) {
    .new-bulletin {
      display: none;
    }
  }
}
</style>
