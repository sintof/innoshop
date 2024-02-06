<template>
    <div class="grid grid-cols-4 gap-5" v-if="sortedItems.length">
        <Card 
        v-for="item in sortedItems"
        :id="item.id"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :isAdded="item.isAdded"
        :isFavorite="item.isFavorite"/>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import Card from '../Cards/Card.vue';
import { fsort } from '../../composables/featuredItems';
import { storeToRefs } from "pinia";
import { useProductStore } from "../../stores/productStore";

const productStore = useProductStore()
const { sneakers } = storeToRefs(productStore)

const sortedItems = ref(sneakers.value)

const props = defineProps({
    sort: String,
    search: String
})

watch(() => props.search, () => {
    sortedItems.value = sneakers.value.filter(item => item.title.toLowerCase().includes(props.search.toLowerCase()))
}, { immediate: true })

watch(() => props.sort, () => {
    sortedItems.value = fsort(props.sort, sneakers.value)
})
</script>