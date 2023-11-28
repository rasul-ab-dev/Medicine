<template>
  <div>
    <div class="panel-items fix-header">
      <div class="btn-wrapper">
        <button class="create-cabinet">
          {{ $t("toleranceGroup.newAccessGroup") }}
        </button>
        <button @click="saveToleranceGroup" class="save-btn panel-btn">
          {{ $t("toleranceGroup.save") }}
        </button>
        <button @click="cancelCreate" class="cancel-btn panel-btn">
          {{ $t("toleranceGroup.cancel") }}
        </button>
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
                  />
                  <label :for="item.id.toString()">{{
                    item.accessDisplayName
                  }}</label>
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
                  />
                  <label :for="item.id.toString()">{{
                    item.accessDisplayName
                  }}</label>
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
  </div>
</template>
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
import DxButton from "devextreme-vue/button";
import { TextBoxProperties } from "~/infrastructure/components-properties/TextBoxProperties";
import { IAccessGroup } from "~/infrastructure/interfaces/administration/IAccessGroup";
import { IChooseAccessGroup } from "~/infrastructure/interfaces/administration/IChooseAccessGroup";
import { IToleranceGroup } from "~/infrastructure/interfaces/administration/IToleranceGroup";
import { ToleranceGroup } from "~/infrastructure/classes/administration/ToleranceGroup";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxButtonItem,
    DxLabel,
    DxRequiredRule,
    DxButton,
  },
  data() {
    let accessElement: IAccessGroup[];
    let chooseElement: IChooseAccessGroup[];
    let toleranceGroup: IToleranceGroup = new ToleranceGroup();
    return {
      toleranceGroup,
      accessElement,
      chooseElement,
      selected: [],
      selected2: [],
      allSelected: false,
    };
  },
  computed: {
    textBoxOptions() {
      return new TextBoxProperties();
    },
  },
  methods: {
    cancelCreate() {
      this.$router.go(-1);
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
    addAccess() {
      this.chooseElement = this.selected;
      this.selected.forEach((element) => {
        var ae = this.accessElement.find((a) => a.id === element.id);

        if (ae)
          this.accessElement = this.accessElement.filter((e) => {
            return e != ae;
          });
      });
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
    },
    saveToleranceGroup() {
      let result = this.$refs["toleranceForm"].instance.validate();
      this.toleranceGroup.claimTypesId = this.chooseElement?.map((p) => p.id);

      if (result.isValid) {
        this.$awn.asyncBlock(
          this.$axios.post(this.$dataApi.roles, this.toleranceGroup),
          (e: any) => {
            this.$awn.success();
            this.$router.go(-1);
          },
          (e: any) => {
            this.$awn.alert();
          }
        );
      }
    },
  },
  created() {
    this.$axios.get(this.$dataApi.authentications).then((response) => {
      this.accessElement = response.data.data;
      return this.accessElement;
    });
  },
});
</script>
<style lang="scss" scoped>
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
