<template>
    <div 
    v-if="chosenItems.length"
    class="flex flex-col flex-1 gap-4  w-full h-3/4 overflow-auto">
        <CartItem
        @removeCart="productStore.addItem(item.id)"
        v-for="item in chosenItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :imageUrl="item.imageUrl" />
    </div>
    <div
    v-show="!chosenItems.length"
    class="flex flex-col flex-1 gap-4 w-96 h-3/4 border border-slate-200 rounded-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <p class="text-center text-3xl font-bold mb-5 text-slate-400">Корзина пуста</p>
        <p class="text-center text-2xl font-bold mb-5 text-slate-400">Добавьте хотя бы одну пару кроссовок</p>
    </div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/productStore";

const productStore = useProductStore()
const { chosenItems } = storeToRefs(productStore)
</script>