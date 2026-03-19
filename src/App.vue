<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'"
              :baseType="beverageStore.currentBase"
              :syrupType="beverageStore.currentSyrup"
              :creamerType="beverageStore.currentCream" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
        <li>
        <template v-for="base in bases" :key="base.id">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base.id}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name}}
          </label>
        </template>
      </li>
       <li>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup.id}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name}}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer.id}`"
              :value="creamer"
              v-model="beverageStore.currentCream"
            />
            {{ creamer.name}}
          </label>
        </template>
      </li>
    </ul>
    <input type="text" placeholder="Beverage Name" v-model="bev_name" />
    <button @click = "makeBeverage( bev_name )">🍺 Make Beverage</button>
    <button @click = "emptyBeverage">Empty Beverages</button>
  </div>
  <div id="beverage-container" style="margin-top: 20px">
<ul>
      <li>
        <template v-for="savedBev in SavedBeverages" :key="savedBev.id">
          <label>
            <input
              @click="showBeverage(savedBev)"
              name = "beverage"
              type="radio"
            />
            {{ savedBev.name}}
          </label>
        </template>
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { bases, syrups, creamers} from "./types/beverage";

const {makeBeverage,showBeverage, emptyBeverage} = useBeverageStore();
const beverageStore = useBeverageStore();
const {SavedBeverages} = useBeverageStore();

var bev_name = "";
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
