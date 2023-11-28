 <template>
  <div class="wrapper">
    <div class="logo-wrapper">
      <div>
        <img src="~/assets/images/logo.png" alt="logo" />
      </div>
      <p class="title">Halkara trawmatologiýa merkezi</p>
    </div>
    <div class="input-wrapper">
      <p class="input-title">Sistema girmek</p>
      <DxForm
        ref="loginForm"
        :read-only="false"
        :form-data="login"
        :show-colon-after-label="false"
        :show-validation-summary="true"
        validation-group="customerData"
        label-location="top"
        @editorEnterKey="enterHandler"
      >
        <DxSimpleItem
          data-field="name"
          data-type="string"
          editor-type="dxTextBox"
          :editor-options="loginOptions"
        >
          <DxLabel text=" " />
        </DxSimpleItem>

        <DxSimpleItem
          data-field="password"
          editor-type="dxTextBox"
          :editor-options="passwordOptions"
        >
          <DxLabel text=" " />
        </DxSimpleItem>
      </DxForm>
    </div>
    <button @click="enter" class="enter-btn">Girmek</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import DxForm, {
  DxSimpleItem,
  DxGroupItem,
  DxEmptyItem,
  DxLabel,
  DxRequiredRule,
} from "devextreme-vue/form";
import { ILogin } from "~/infrastructure/interfaces/administration/ILogin";
import { Login } from "~/infrastructure/classes/administration/Login";
import { NavigationGenerator } from "~/infrastructure/classes/navigation/NavigationGenerator";
import { SettingNavigationGenerator } from "~/infrastructure/classes/navigation/SettingNavigationGenerator";
import VueJwtDecode from "vue-jwt-decode";
export default Vue.extend({
  components: {
    DxForm,
    DxSimpleItem,
    DxGroupItem,
    DxEmptyItem,
    DxLabel,
    DxRequiredRule,
  },
  data() {
    let login: ILogin = new Login();
    return {
      login,
    };
  },
  computed: {
    loginOptions() {
      return {
        placeholder: "Login",
      };
    },
    passwordOptions() {
      return {
        mode: "password",
        placeholder: "Parol",
      };
    },
  },
  methods: {
    enter() {
      this.$awn.asyncBlock(
        this.$axios.post(this.$dataApi.authentications, this.login),
        (e: any) => {
          this.$awn.success();
          let token = e.data.access_token;
          localStorage.setItem("userId", e.data.userId);
          localStorage.setItem("token", token);

          let parseToken = VueJwtDecode.decode(token);
          localStorage.setItem("parseToken", JSON.stringify(parseToken));

          let getToken = localStorage.getItem("parseToken");
          let controllers = JSON.parse(getToken);

          let nav = new NavigationGenerator();
          nav.generateItemsByClaims(controllers);
          this.$store.commit("menu/SET_ITEMS", nav.items);

          let settingNav = new SettingNavigationGenerator();
          settingNav.generateItemsByClaims(controllers);
          this.$store.commit("settingsMenu/SET_ITEMS", settingNav.items);

          this.$router.push("/bulletin");
        },
        (e: any) => {
          this.$awn.alert();
        }
      );
    },
    enterHandler() {
      this.enter();
    },
  },
});
</script>
<style  lang="scss" scoped>
.wrapper {
  width: 300px;
  height: 500px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 250px);
}
.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-size: 20px;
  font-weight: 500;
  color: green;
  font-weight: bold;
}
.input-wrapper {
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.input-title {
  text-align: center;
  font-weight: bold;
}
.enter-btn {
  margin-top: 20px;
  padding: 10px 56px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}
</style>