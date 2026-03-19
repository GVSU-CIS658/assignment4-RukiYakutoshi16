<template>
  <div class="froth">
    <div v-for=" in 5" class="foam"></div>
  </div>
</template>

<script setup lang="ts">
import { CreamerType} from ".././types/beverage";
import { watch} from "vue";

type creamProp = {
 cream: CreamerType;
}
const props = defineProps<creamProp>();
watch(()=>props.cream, (x)=>{updateCream(x.color);});
function updateCream(color:string){
  
if (color=="transparent"){
  document.documentElement.style.setProperty("--froth-transparent","0%"); 
}
else{ 
  document.documentElement.style.setProperty("--foam-color", color); 
  document.documentElement.style.setProperty("--froth-transparent","20%");}
}

</script>
<style lang="scss" scoped>
@mixin foam-color($color){
  background-color: $color;
  }
@mixin froth-height($transparent){
height: $transparent;
}

.froth {
    @include froth-height(var(--froth-transparent));
  overflow: visible;
  transform: translateY(400%);
  position: relative;
  
  width: 100%;
  background-color: #c6c6c6;
  animation: pour-tea 2s 2s forwards;
}
.foam {
   @include foam-color(var(--foam-color));
  display: block;
  border-radius: 30px;
  height: 40px;
  width: 40px;
  position: absolute;
}

.foam:nth-child(1) {
  top: 0px;
  left: -3px;
}

.foam:nth-child(2) {
  top: 0px;
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  border-radius: 40px;
  top: 3px;
  left: 30px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  border-radius: 45px;
  top: 5px;
  right: -2px;
}

.foam:nth-child(5) {
  top: 2px;
  right: 10px;
}
</style>
