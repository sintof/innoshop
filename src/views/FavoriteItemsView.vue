<template>
    <div class="p-10">
        <div class="flex justify-between items-center">
            <h2 class="text-3xl font-bold mb-8">Избранные кроссовки</h2>
        </div>
        <FavoriteCardList v-if="favItems.length"/>
    </div>
</template>

<script setup>
import FavoriteCardList from "../components/FavoriteCards/FavoriteCardList.vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";

const productStore = useProductStore()
const { favItems } = storeToRefs(productStore)

</script>