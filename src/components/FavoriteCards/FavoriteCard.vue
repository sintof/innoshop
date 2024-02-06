<template>
    <div :id="id" class="relative h-fit bg-white border border-slate-200 rounded-3xl p-6 cursor-pointer
    hover:-translate-y-2 hover:shadow-xl transition">
      <img @click="productStore.addFavorite(id)" :src="isFavorite ? 'like-2.svg' : 'like-1.svg'" alt="Like" class="absolute top-8 left-8">
      <img class="w-32 h-32 mx-auto" :src="imageUrl" alt="Sneakers">
      
      <p class="mt-2 min-h-12">{{ title }}</p>
      
      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-500">Цена</span>
          <b>{{ price }} руб.</b>
        </div>

        <img @click="productStore.addItem(id)" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="plus">
      </div>
    </div>
</template>

<script setup>
import { useProductStore } from "../../stores/productStore";

const productStore = useProductStore()

const props = defineProps({
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  id: Number
})
</script>