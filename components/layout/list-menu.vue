<template>
  <div id="navigation_menu_list">
    <!-- <DxScrollView width="100%" height="100%" :use-native="true"> -->
    <!-- <slot> </slot> -->
    <!-- <div class="space-block"></div> -->
    <DxTreeView
      :active-state-enabled="true"
      :items="items"
      @item-click="handleItemClick"
    >
      <template #item="{ data }">
        <div>
          <ListMenuItem :data="data" />
        </div>
      </template>
    </DxTreeView>
    <!-- </DxScrollView> -->
  </div>
</template>
<script lang="ts">
import DxTreeView from "devextreme-vue/ui/tree-view";
import Vue from "vue";
import { DxScrollView } from "devextreme-vue/scroll-view";
import MainLogo from "./main-logo.vue";
import ListMenuItem from "./list-menu-item.vue";
export default Vue.extend({
  components: {
    DxTreeView,
    ListMenuItem,
    MainLogo,
    DxScrollView,
  },
  computed: {
    items(): object[] {
      return this.$store.getters["menu/items"];
    },
  },
  methods: {
    handleItemClick(e: any) {
      this.$router.push(e.itemData.path);
    },
  },
});
</script>

<style lang="scss">
#navigation_menu_list {
  width: 250px;
  padding: 20px 30px;
  flex: 1;

  .dx-treeview {
    white-space: nowrap;

    .dx-treeview-item {
      padding-left: 0;
      padding-right: 0;

      .dx-icon {
        width: 20px !important;
        margin: 0 !important;
      }
    }

    .dx-treeview-node {
      padding: 0 0 !important;
    }

    .dx-treeview-toggle-item-visibility {
      right: 10px;
      left: auto;
    }

    .dx-rtl .dx-treeview-toggle-item-visibility {
      left: 10px;
      right: auto;
    }

    .dx-treeview-node {
      &[aria-level="1"] {
        font-weight: bold;
        border-bottom: 1px solid $base-border-color;
      }

      &[aria-level="2"] .dx-treeview-item-content {
        font-weight: normal;
        padding: 0 0 0 30px;
      }
      &[aria-level="2"] .dx-treeview-toggle-item-visibility {
        display: none;
      }
      &[aria-level="2"] img {
        display: none;
      }
      &[aria-level="3"] .dx-treeview-item-content {
        display: none;
      }
    }
  }

  .dx-treeview {
    .dx-treeview-node-container {
      .dx-treeview-node {
        &.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {
          background: transparent;
        }

        &.dx-state-selected > .dx-treeview-item * {
          color: $base-accent;
        }

        &:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {
          background-color: inherit;
          color: $base-accent;
        }
        &.dx-state-focused > .dx-treeview-item.dx-state-hover {
          background-color: inherit;
        }
        &.dx-state-focused > .dx-treeview-item {
          color: $base-accent;
          background-color: inherit;
        }
      }
    }
  }
}
</style>
