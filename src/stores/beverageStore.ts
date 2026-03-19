import { defineStore } from "pinia";
import { savedBeverages, BeverageType } from "../types/beverage";
import temperatures from "../data/tempretures.json";
import creamers from "../data/creamers.json"
import syrups from "../data/syrups.json"
import bases from "../data/bases.json"


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures,
    currentTemp: temperatures[0],
    creamers,
    currentCream: creamers[0],
    syrups,
    currentSyrup: syrups[0],
    bases,
    currentBase: bases[0],
    SavedBeverages: savedBeverages,


  }),

  actions: {
    makeBeverage(savedBev: BeverageType) { this.SavedBeverages.push(savedBev), console.log(this.SavedBeverages); },
    showBeverage(selectedBev: BeverageType) {
      console.log(selectedBev);
      this.currentTemp = selectedBev.temp;
      this.currentBase = selectedBev.base
      this.currentSyrup = selectedBev.syrup;
      this.currentCream = selectedBev.creamer;
    },
  },
  persist: false,
});
