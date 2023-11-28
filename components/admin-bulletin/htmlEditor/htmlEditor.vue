<template>
  <div>
    <DxHtmlEditor height="300px" :value="body" @value-changed="onValueChanged">
      <DxMediaResizing :enabled="true" />
      <DxImageUpload file-upload-mode="base64" />
      <DxToolbar :multiline="isMultiline">
        <DxItem name="undo" />
        <DxItem name="redo" />
        <DxItem name="separator" />
        <DxItem :accepted-values="sizeValues" name="size" />
        <DxItem :accepted-values="fontValues" name="font" />
        <DxItem name="separator" />
        <DxItem name="bold" />
        <DxItem name="italic" />
        <DxItem name="strike" />
        <DxItem name="underline" />
        <DxItem name="separator" />
        <DxItem name="alignLeft" />
        <DxItem name="alignCenter" />
        <DxItem name="alignRight" />
        <DxItem name="alignJustify" />
        <DxItem name="separator" />
        <DxItem name="orderedList" />
        <DxItem name="bulletList" />
        <DxItem name="separator" />
        <DxItem :accepted-values="headerValues" name="header" />
        <DxItem name="separator" />
        <DxItem name="color" />
        <DxItem name="background" />
        <DxItem name="separator" />
        <DxItem name="link" />
        <DxItem name="image" />
        <DxItem name="separator" />
        <DxItem name="clear" />
        <DxItem name="codeBlock" />
        <DxItem name="blockquote" />
        <DxItem name="separator" />
        <DxItem name="insertTable" />
        <DxItem name="deleteTable" />
        <DxItem name="insertRowAbove" />
        <DxItem name="insertRowBelow" />
        <DxItem name="deleteRow" />
        <DxItem name="insertColumnLeft" />
        <DxItem name="insertColumnRight" />
        <DxItem name="deleteColumn" />
      </DxToolbar>
    </DxHtmlEditor>
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
import {
  DxHtmlEditor,
  DxToolbar,
  DxMediaResizing,
  DxImageUpload,
  DxItem,
} from "devextreme-vue/html-editor";
import { DxCheckBox } from "devextreme-vue/check-box";
import { DxSelectBox } from "devextreme-vue/select-box";
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
    DxEmptyItem,
    DxRequiredRule,
    DxGroupItem,
  },
  props: {
    description: {
      default: " ",
    },
  },
  data() {
    return {
      sizeValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"],
      fontValues: [
        "Arial",
        "Courier New",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Tahoma",
        "Times New Roman",
        "Verdana",
      ],
      headerValues: [false, 1, 2, 3, 4, 5],
      allowedFileExtensions: [".jpg", ".jpeg", ".gif", ".png"],
      currentTabs: ["file", "url"],
      isMultiline: true,
      body: this.description,
    };
  },
  methods: {
    onValueChanged(e) {
      this.$emit("valueChanged", e.value);
    },
  },
});
</script>