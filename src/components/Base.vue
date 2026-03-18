<template>
  <div class="baseBeverage"></div>
</template>

<script setup lang="ts">
import { BaseBeverageType } from '../types/beverage';
import {onMounted, watch} from "vue";

type baseProp ={
  base:BaseBeverageType
}
const props = defineProps<baseProp>();
watch(()=>props.base, (x)=>updateBaseColor(x.color));
onMounted(()=>updateBaseColor(props.base.color))

function updateBaseColor(color:string){
  document.documentElement.style.setProperty("--base-color", color )
}

</script>

<style scoped lang="scss">
@mixin base-color($color){
  background-color:$color;
}

.baseBeverage {
  @include base-color(var(--base-color));
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
