<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer :cream="creamerType"/>
      </template>
      <template v-slot:mid>
        <Syrup :syrup="syrupType"/>
      </template>
      <template v-slot:bottom>
        <Base :base="baseType"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";
import { BaseBeverageType, SyrupType, CreamerType,  } from "../types/beverage";
type Props = {
  isIced: boolean;
  creamerType:CreamerType;
  baseType:SyrupType;
  syrupType:BaseBeverageType;
};
defineProps<Props>();
</script>
