import Vue from "vue";
import { Currency } from "~/infrastructure/enums/Currency";

function CurrencyType(contex: Vue) {
  return [
    { id: Currency.TMT, name: "Manat" },
    { id: Currency.USD, name: "Dollar" },
    { id: Currency.RUB, name: "Rubl" },
    { id: Currency.CNY, name: "Ýuan" },
    { id: Currency.EUR, name: "Ewro" },
    { id: Currency.GBP, name: "Funt" },
  ];
}

export { CurrencyType };
