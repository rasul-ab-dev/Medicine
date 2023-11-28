<template>
  <div>
    <div class="result-card-wrapper fix-header">
      <button @click="backHandler" class="back-btn panel-btn">Назад</button>
      <div class="panel-input-wrapper">
        <div class="view-label">
          <span>Görnüşiň şertli belligi</span>
          <input class="input" type="text" />
        </div>
        <div class="organization-label">
          <span>Edaranyň şertli belligi</span>
          <input class="input" type="text" />
        </div>
        <button class="print-btn panel-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="result-bulletin-wrapper">
        <div class="bulletin-header-text">
          <p>Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi</p>
          <span>Şikesleri bejeriş Halkara merkezi</span>
        </div>
        <img class="bulletin-logo" src="~/assets/images/logo.png" alt="" />
        <p>
          N 238/h görnüşli saglygy goraýyş resminamasy <br />
          Türkmenistanyň SG we DS ministrligi tarapyndan <br />
          2006ý. Noýabr aýynyň “18” <br />
          N 230 buýruk esasynda tassyklandy
        </p>
      </div>
      <div class="blood-analysis-wrapper">
        <div>
          <span>Ganyň lagtalanmak ulgamynyň görkezijileri №</span>
          <input class="input blood-analysis" type="text" />
        </div>
        <input type="date" />
      </div>
      <div class="payment-label-wrapper">
        <div class="payment-label-items">
          <div>
            <span>Töleg belligi</span>
            <select class="input" name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div>
            <span>Kabinet</span>
            <input class="input" type="text" />
          </div>
        </div>
        <div class="serach-input-wrapper">
          <span>Näsag</span>
          <input class="input serach-input" type="search" />
        </div>
      </div>
      <div class="result-data-wrapper">
        <div>
          <span>Netije</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Kada</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Lagtalanma wagty</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>min</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Gan akmanyň wagty</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>min</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Protrombin indeksi</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>90-105%</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>AÇTW</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>22-36 sek.</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Fibrinogen</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>1-75-4.00 g</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Reklasifikasiýa wagty</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>60-120 sek.</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Trombiniň wagty</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>11.3-18.5 sek.</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Geparine tolerantlylygy</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>6-11 min.</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Fibriniň dörän wagty</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>7-15 min.</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Etalonyň testi</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Negative</span>
          <input class="input" type="text" />
        </div>
      </div>

      <div class="horizont-line" />

      <div class="square-input-wrapper">
        <input class="input" type="text" />
        <input class="input" type="text" />
        <input class="input" type="text" />
      </div>

      <div class="doctor-search">
        <span>Lukman</span>
        <input class="input" type="search" />
      </div>

      <div class="family-status">
        <span>Maşgala meýdançasy</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="horizont-line" />

      <div class="note-wrapper">
        <span>Примечание</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.result-card-wrapper {
  display: flex;
  justify-content: space-between;
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

.panel-input-wrapper {
  display: flex;
  column-gap: 30px;
  width: 60%;

  .organization-label,
  .view-label {
    display: flex;
    align-items: center;
    width: 100%;
    column-gap: 10px;

    span {
      white-space: nowrap;
    }
  }

  .input {
    width: 80%;
    background-color: $custom-main-color;
  }
}

.result-bulletin-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-bottom: 10px;
}

.bulletin-header-text {
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    margin-top: 20px;
  }
}

p {
  font-weight: $bold-weight;
}

.bulletin-logo {
  width: 102px;
  height: 102px;
}

.blood-analysis-wrapper {
  display: flex;
  justify-content: space-between;
  column-gap: 54px;

  div {
    display: flex;
    column-gap: 12px;
    align-items: center;
  }

  span {
    white-space: nowrap;
  }

  .input {
    width: 70%;
  }

  input[type="date"] {
    width: 30%;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 10px 14px;
  }
}

.payment-label-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 62px;

  .payment-label-items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 54px;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
}

.serach-input-wrapper {
  margin-top: 20px;

  .serach-input {
    width: 48%;
    background-image: url("@/assets/images/magnifyingGlass.png");
    background-position: right;
    background-repeat: no-repeat;
    background-size: 24px;

    &:focus {
      background-image: none;
    }
  }
}

.result-data-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  div {
    display: grid;
    grid-template-columns: 130px 1fr;
    align-items: center;
    column-gap: 100px;

    span {
      white-space: nowrap;
    }
  }
}

.square-input-wrapper {
  display: flex;
  column-gap: 50px;

  input {
    height: 188px;
  }
}

.doctor-search {
  display: flex;
  column-gap: 50px;
  align-items: center;
  width: 50%;

  .input {
    background-image: url("@/assets/images/magnifyingGlass.png");
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: right;

    &:focus {
      background-image: none;
    }
  }
}
.family-status {
  display: flex;
  column-gap: 80px;

  span {
    white-space: nowrap;
  }
  .input {
    resize: none;
    height: 150px;
  }
}

.note-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .input {
    resize: none;
    height: 150px;
  }
}
</style>
