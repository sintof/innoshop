<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <div>
      <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
      <p class="text-slate-500">Магазин лучших кросовок</p>
    </div>


    <ul class="flex items-center gap-10">
      <li @click="switchDrawer" class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
        <img src="/cart.svg" alt="card">
        <b>{{ overallPrice }} руб.</b>
      </li>
      <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
        <img src="/heart.svg" alt="heart">
        <span>Закладки</span>
      </li>
      <li class="flex items-center gap-3  text-gray-500 hover:text-black cursor-pointer">
        <img src="/profile.svg" alt="profile">
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";

const productStore = useProductStore()
const { overallPrice } = storeToRefs(productStore)

defineProps({
  switchDrawer: Function
})
</script>