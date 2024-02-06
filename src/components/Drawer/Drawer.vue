<template>
    <div 
    @click="switchDrawer"
    class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 z-10"></div>
    <div class="bg-white h-full fixed right-0 top-0 z-20 p-8">
        <DrawerHead :switchDrawer="switchDrawer"/>

        <CartItemList />

        <div class="flex flex-col gap-4 mt-2">
            <div class="flex gap-2">
                <span>Цена:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ overallPrice }} руб.</b>
            </div>
            <div class="flex gap-2">
                <span>Налог 5%</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ overallPrice * 0.05 }} руб.</b>
            </div>
            <div class="flex gap-2">
                <span>Итого:</span>
                <div class="flex-1 border-b border-dashed"></div>
                <b>{{ overallPrice * 0.95 }} руб.</b>
            </div>
            <button
        :disabled="!overallPrice"
        class="disabled:bg-slate-300 mt-4 bg-lime-500 w-full rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700">
            Оформить заказ
            </button>
        </div>
    </div>
</template>

<script setup>
import DrawerHead from './DrawerHead.vue';
import CartItemList from './Carts/CartItemList.vue';
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/productStore";

const productStore = useProductStore()
const { overallPrice } = storeToRefs(productStore)

defineProps({
  switchDrawer: Function
})
</script>