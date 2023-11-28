<template>
  <div>
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <div class="tolerance-id">{{ $route.params.id }}</div>
        <div v-if="toogleButtons" class="hidden-buttons">
          <button @click="saveToleranceGroup" class="save-btn panel-btn">
            {{ $t("cabinetPage.save") }}
          </button>
          <button @click="openPopup" class="cancel-btn panel-btn">
            {{ $t("cabinetPage.cancel") }}
          </button>
        </div>
        <button @click="backHandler" v-else class="back-btn panel-btn">
          Назад
        </button>
      </div>
      <div class="info-btn-wrapper">
        <button @click="editHandler" class="edit-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <DxForm
        :form-data.sync="toleranceGroup"
        ref="toleranceForm"
        :read-only="false"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
      >
        <DxSimpleItem
          data-field="name"
          data-type="string"
          :editor-options="textBoxOptions"
          css-class="examination-name"
        >
          <DxRequiredRule />
          <DxLabel :text="$t('toleranceGroup.name')" />
        </DxSimpleItem>

        <DxEmptyItem />
        <DxEmptyItem />

        <DxSimpleItem template="access-box" />

        <template #access-box>
          <div class="box-wrapper">
            <div class="access-wrapper">
              <span>{{ $t("toleranceGroup.available") }}</span>
              <div class="access-items-wrapper">
                <div
                  class="access-items"
                  v-for="(item, id) in accessElement"
                  :key="id"
                >
                  <input
                    :id="item.id.toString()"
                    type="checkbox"
                    v-model="selected"
                    :value="item"
                    :disabled="disabled"
                  />
                  <label :for="item.id.toString()">
                    {{ item.accessDisplayName }}
                  </label>
                </div>
              </div>
              <button @click="selectAll" class="select-all-btn">
                {{ $t("toleranceGroup.selectAll") }}
              </button>
            </div>

            <div class="chevron-icon-wrapper">
              <div class="chevron-icon">
                <i @click="addAccess" class="dx-icon-chevronright"></i>
                <i @click="removeAccess" class="dx-icon-back"></i>
              </div>
            </div>

            <div class="access-wrapper">
              <span> {{ $t("toleranceGroup.selected") }} </span>
              <div class="access-items-wrapper">
                <div
                  v-for="(item, id) in chooseElement"
                  :key="id"
                  class="selected-element"
                >
                  <input
                    :id="item.id.toString()"
                    type="checkbox"
                    v-model="selected2"
                    :value="item"
                    :disabled="disabled"
                  />
                  <label :for="item.id.toString()">
                    {{ item.accessDisplayName }}
                  </label>
                </div>
              </div>
              <button @click="deleteAll" class="delete-all-btn">
                {{ $t("toleranceGroup.selectAll") }}
              </button>
            </div>
          </div>
        </template>
      </DxForm>
    </div>
    <Popup
      ref="confirmPopup"
      width="34vw"
      height="auto"
      :shading="true"
      shadingColor="rgba(0, 0, 0, 0.3)"
    >
      <div class="confirm-wrapper">
        <span>{{ $t("commonText.cancelEdit") }}</span>
        <div class="confirm-btn">
          <button @click="confirmEditor">{{ $t("commonText.yes") }}</button>
          <button @click="closePopup">{{ $t("commonText.no") }}</button>
        </div>
      </div>
    </Popup>
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
import Popup from "~/components/page/popup.vue";
import { IAccessGroup } from "~/infrastructure/interfaces/administration/IAccessGroup";
import { IChooseAccessGroup } from "~/infrastructure/interfaces/administration/IChooseAccessGroup";
import { IToleranceGroup } from "~/infrastructure/interfaces/administration/IToleranceGroup";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    Popup,
  },
  props: {
    currentToleranceGroups: {
      type: Object,
      required: true,
    },
  },
  data() {
    let accessElement: IAccessGroup[];
    let chooseElement: IChooseAccessGroup[];
    let toleranceGroup: IToleranceGroup = this.currentToleranceGroups;
    return {
      toleranceGroup,
      accessElement,
      chooseElement,
      selected: [],
      selected2: [],
      // selectAll: false,
      readOnly: true,
      disabled: true,
    };
  },
  computed: {
    toogleButtons(): boolean {
      return this.disabled === true ? false : true;
    },
    textBoxOptions() {
      return {
        disabled: this.disabled,
      };
    },
  },
  methods: {
    openPopup() {
      return (this as any).$refs["confirmPopup"].open();
    },
    closePopup() {
      return (this as any).$refs["confirmPopup"].close();
    },
    editHandler() {
      this.disabled = !this.disabled;
    },
    backHandler() {
      this.$router.go(-1);
    },
    confirmEditor() {
      this.$router.go(-1);
    },
    addAccess() {
      this.chooseElement.push(...this.selected);
      this.selected.forEach((element) => {
        var ae = this.accessElement.find((a) => a.id === element.id);
        if (ae)
          this.accessElement = this.accessElement.filter((e) => {
            return e != ae;
          });
      });
      this.selected = [];
    },

    selectAll() {
      if (this.selected?.length === this.accessElement.length) {
        this.selected = [];
      } else {
        this.selected = this.accessElement.slice();
      }
    },
    deleteAll() {
      if (this.selected2?.length === this.chooseElement?.length) {
        this.selected2 = [];
      } else {
        this.selected2 = this.chooseElement?.slice();
      }
    },
    removeAccess() {
      this.selected2.forEach((el) => {
        this.accessElement.push(el);
      });

      this.selected2.forEach((el) => {
        var ce = this.chooseElement.find((c) => c.id === el.id);
        if (ce)
          this.chooseElement = this.chooseElement.filter((e) => {
            return e != ce;
          });
        this.selected2 = this.selected2.filter((e) => {
          return e != ce;
        });
      });
      this.selected2 = [];
    },
    saveToleranceGroup() {
      let result = this.$refs["toleranceForm"].instance.validate();
      this.toleranceGroup.claimTypesId = this.chooseElement.map((p) => p.id);

      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.put(
            `${this.$dataApi.roles}/${this.toleranceGroup.id}`,
            this.toleranceGroup
          ),
          (e: any) => {
            this.$awn.success();
            // this.$emit("successedSaved", e.data);
            this.$router.go(-1);
          },
          (e: any) => {
            this.$awn.alert();
          }
        );
      }
    },
  },
  // created() {
  //   this.accessElement = this.toleranceGroup.claimTypes.filter((p) => {
  //     // console.log("false", p);

  //     if (p.isUsed === false) return p;
  //   });

  //   this.chooseElement = this.toleranceGroup.claimTypes.filter((p) => {
  //     // console.log("true", p);
  //     if (p.isUsed === true) return p;
  //   });
  // },

  mounted() {
    this.accessElement = this.toleranceGroup.claimTypes.filter((p) => {
      if (p.isUsed === false) return p;
    });

    this.chooseElement = this.toleranceGroup.claimTypes.filter((p) => {
      if (p.isUsed === true) return p;
    });
  },
});
</script>
  <style lang="scss" scoped>
.panel-items {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.tolerance-id {
  padding: 12px 200px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  color: $red;
}

.hidden-buttons {
  display: flex;
  column-gap: 10px;
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

.info-btn-wrapper {
  display: flex;
  column-gap: 30px;
}
.btn-wrapper {
  display: flex;
  column-gap: 10px;
}

.create-cabinet {
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
.panel-btn:hover {
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

.dx-icon-chevronright,
.dx-icon-back {
  font-size: 24px;
  padding: 8px 10px;
  border-radius: 10px;
  background-color: $input-bg-color;
  margin-top: 20px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.chevron-icon-wrapper {
  width: 20%;
  /* margin: 250px 45%; */

  .chevron-icon {
    display: inline-flex;
    flex-direction: column;
    margin: 200px 42%;
  }
}

.select-all-btn,
.delete-all-btn {
  font-weight: $bold-weight;
  border: none;
  border-radius: 10px;
  background-color: $input-bg-color;
  padding: 12px 36px;
  cursor: pointer;
  margin-top: 20px;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}

.box-wrapper {
  display: flex;
}

.access-wrapper {
  width: 40%;
  .access-items-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    column-gap: 10px;
    border: 1px solid $input-bg-color;
    border-radius: 10px;
    height: 60vh;
    padding: 15px;
    overflow-y: scroll;
  }
}

.choose-element-wrapper {
  /* width: 40%; */

  .choose-item {
    border: 1px solid $input-bg-color;
    border-radius: 10px;
    height: 100%;
    /* width: 40%; */
    padding: 15px;
  }
}

.dx-command-select {
  width: 40px !important;
}
</style>
