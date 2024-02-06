<template>
  <Drawer v-if="showDrawer" :switchDrawer="switchDrawer"/>

  <div class="w-4/5 m-auto bg-white  rounded-lg shadow-xl mt-14">
    <Header :switchDrawer="switchDrawer"/>

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

        <div class="flex gap-4">
          <select
            v-model="sort"
            class="bg-white border border-slate-200 rounded-md py-2 px-3 outline-none"
          >
            <option value="name">По названию</option>
            <option value="priceasc">По цене (дешевые)</option>
            <option value="pricedesc">По цене (дорогие)</option>
          </select>

          <div class="relative">
            <img src="/search.svg" alt="search" class="absolute left-4 top-3" />
            <input
              class="border border-slate-200 rounded-md py-2 pl-12 pr-4 focus:outline-none focus:border-slate-400"
              type="text"
              placeholder="Поиск..."
              v-model="search"
            />
          </div>
        </div>
      </div>
      <CardList v-if="sneakers.length" :sort="sort" :search="search"/>
    </div>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import CardList from "./components/Cards/CardList.vue";
import Drawer from "./components/Drawer/Drawer.vue";
import { provide, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "./stores/productStore";

const productStore = useProductStore()
productStore.getSneakers()
const { sneakers, chosenItems, overallPrice } = storeToRefs(productStore)
const sort = ref("name");
const search = ref("");
const showDrawer = ref(false);

watch(chosenItems.value, () => {
  overallPrice.value = chosenItems.value.reduce((acc, item) => {
    return acc + item.price
  }, 0)
})

const switchDrawer = () => {
  showDrawer.value = !showDrawer.value
}

provide('overallPrice', overallPrice)
</script>