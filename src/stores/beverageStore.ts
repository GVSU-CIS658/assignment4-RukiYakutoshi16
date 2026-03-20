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
    currentCream: { ...creamers[0] },
    syrups,
    currentSyrup: { ...syrups[0] },
    bases,
    currentBase: { ...bases[0] },
    SavedBeverages: savedBeverages,


  }),

  actions: {
    makeBeverage(name: string) {
      var exit = false;
      if (name.trim().length === 0 || name == null) { alert("Beverage Name is invalid"); return; }

      var savedBev: BeverageType = {
        id: this.currentTemp.toString() + this.currentBase.id + this.currentSyrup.id + this.currentCream.id,
        name,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCream
      }
      this.SavedBeverages.forEach(x => {
        if (x.id === savedBev.id || x.name === savedBev.name) {
          alert("This Beverage is already existed or contained matching name with existing beverages");
          exit = true;
          return;
        }
      })
      if (exit) return;
      this.SavedBeverages.push(savedBev)
    },
    showBeverage(selectedBev: BeverageType) {
      this.currentTemp = selectedBev.temp;
      this.currentBase = selectedBev.base
      this.currentSyrup = selectedBev.syrup;
      this.currentCream = selectedBev.creamer;
    },
    emptyBeverage() {
      this.SavedBeverages.splice(0, this.SavedBeverages.length);
      localStorage.clear();
    }
  },
  persist: true,
});
