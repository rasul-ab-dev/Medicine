<template>
  <div id="document-editor">
    <button @click="print" class="print-btn" />
    <vue-document-editor
      class="editor"
      ref="editor"
      :content.sync="content"
      :zoom="zoom"
      :page_format_mm="page_format_mm"
      :page_margins="page_margins"
      :display="display"
    />
  </div>
</template>

<script>
import VueDocumentEditor from "vue-document-editor";

export default {
  components: {
    VueDocumentEditor,
  },
  props: {
    data: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      content: [this.data],
      zoom: 1,
      zoom_min: 0.1,
      zoom_max: 5.0,
      page_format_mm: [210, 297],
      page_margins: "10mm 15mm",
      page_font: "Times New Roman",
      display: "vertical",
      mounted: false,
      points: 1.33,
    };
  },
  methods: {
    print() {
      window.print({
        landscape: true,
      });
    },
  },
};
</script>

<style lang="scss">
#document-editor {
  .main {
    width: fit-content;
    min-width: 100%;
  }
  .bar {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(248, 249, 250, 0.8);
    border-bottom: solid 1px rgb(248, 249, 250);
    backdrop-filter: blur(10px);
    --bar-button-active-color: #188038;
    --bar-button-open-color: #188038;
    --bar-button-active-bkg: #e6f4ea;
    --bar-button-open-bkg: #e6f4ea;
  }
}
</style>
