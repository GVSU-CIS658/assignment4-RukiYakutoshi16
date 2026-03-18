import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import creamers from "../data/creamers.json"
import syrups from "../data/syrups.json"
import bases from "../data/bases.json"


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    creamers,
    currentCreamer: creamers[0],
    syrups,
    currentSyrup: syrups[0],
    bases,
    cuurentBases: bases[0]


  }),

  actions: {
    makeBeverage() { },
    showBeverage() { },
  },
  persist: true,
});
