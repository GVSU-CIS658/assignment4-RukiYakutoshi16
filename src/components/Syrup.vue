<template>
  <div class="syrup"></div>
</template>

<script setup lang="ts">
import { SyrupType } from '../types/beverage';
import {onMounted,watch} from "vue";

type SyrupProp ={
  syrup: SyrupType
}
const props = defineProps<SyrupProp>()
  watch(()=>props.syrup, x => updateSyrupColor(x.color));
  onMounted(()=>updateSyrupColor(props.syrup.color))

function updateSyrupColor(color:string){
  
if (color=="#c6c6c6"){
document.documentElement.style.setProperty("--syrup-transparent", "0%" );

}
else{
document.documentElement.style.setProperty("--syrup-color", color );
document.documentElement.style.setProperty("--syrup-transparent", "20%" );}}

</script>

<style lang="scss" scoped>
@mixin syrup-color($color,$transparent){
  background:repeating-linear-gradient(45deg, rgb(214, 214, 214), rgb(214, 214, 214) 10px, $color 10px, $color 20px);
  height: $transparent;
}
.syrup {
   @include syrup-color(var(--syrup-color),var(--syrup-transparent));
  transform: translateY(400%);
  position: relative;
  width: 100%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
 
}
</style>
