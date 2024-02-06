<template>
  <Drawer v-if="showDrawer" :switchDrawer="switchDrawer"/>

  <div class="w-4/5 m-auto bg-white rounded-lg shadow-xl mt-14">
    <Header :switchDrawer="switchDrawer"/>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

import Header from "./components/Header.vue";
import Drawer from "./components/Drawer/Drawer.vue";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "./stores/productStore";

const productStore = useProductStore()
productStore.getSneakers()
const { chosenItems, overallPrice } = storeToRefs(productStore)
const showDrawer = ref(false);

const switchDrawer = () => {
  showDrawer.value = !showDrawer.value
}

watch(chosenItems.value, () => {
    overallPrice.value = chosenItems.value.reduce((acc, item) => {
        return acc + item.price
    }, 0)
})
</script>