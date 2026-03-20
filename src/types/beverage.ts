import { ref, Ref } from "vue";
import iBases from "../data/bases.json"
import iCreamers from "../data/creamers.json"
import iSyrups from "../data/syrups.json"
import iTemperature from "../data/tempretures.json"
interface BaseBeverageType {
  id: string;
  name: string;
  color: string;
}

interface CreamerType {
  id: string;
  name: string;
  color: string;
}

interface SyrupType {
  id: string;
  name: string;
  color: string;
}

type BeverageType = {
  id: string;
  name: string;
  temp: string;
  base: BaseBeverageType;
  syrup: SyrupType;
  creamer: CreamerType;
};


const temps: Ref<string[]> = ref(iTemperature);

const bases: Ref<BaseBeverageType[]> = ref(iBases);

const creamers: Ref<CreamerType[]> = ref(iCreamers);

const syrups: Ref<SyrupType[]> = ref(iSyrups);

const savedBeverages: BeverageType[] = [];

const currentTemp = ref(temps.value[0]);
const defaultBase = ref(bases.value[0]);
const defaultCreamer = ref(creamers.value[0]);
const defaultSyrup = ref(syrups.value[0]);


export { temps, bases, creamers, syrups, savedBeverages };
export { currentTemp, defaultBase, defaultCreamer, defaultSyrup };
export type { BaseBeverageType, CreamerType, SyrupType, BeverageType };
