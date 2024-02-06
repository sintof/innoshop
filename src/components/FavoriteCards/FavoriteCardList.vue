<template>
    <div class="grid grid-cols-4 gap-5">
        <Card v-for="item in favItems" :id="item.id" :key="item.id" :imageUrl="item.imageUrl" :title="item.title"
            :price="item.price" :isAdded="item.isAdded" :isFavorite="item.isFavorite" />
    </div>
</template>

<script setup>
import Card from '../Cards/Card.vue';
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/productStore";

const productStore = useProductStore()
const { sneakers, favItems } = storeToRefs(productStore)

</script>