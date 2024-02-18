<template>
    <div class="p-10">
        <div class="flex justify-between items-center">
            <h2 class="text-3xl font-bold mb-8">Все кроссовки</h2>

            <div class="flex gap-4">
                <select v-model="sort" class="bg-white border border-slate-200 rounded-md py-2 px-3 outline-none">
                    <option value="name">По названию</option>
                    <option value="priceasc">По цене (дешевые)</option>
                    <option value="pricedesc">По цене (дорогие)</option>
                </select>

                <div class="relative">
                    <img src="/search.svg" alt="search" class="absolute left-4 top-3" />
                    <input
                        class="border border-slate-200 rounded-md py-2 pl-12 pr-4 focus:outline-none focus:border-slate-400"
                        type="text" placeholder="Поиск..." v-model="search" />
                </div>
            </div>
        </div>
        <CardList v-if="sneakers.length" :sort="sort" :search="search" />
    </div>
</template>

<script setup>
import CardList from "@/components/Cards/CardList.vue";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore()
const { sneakers } = storeToRefs(productStore)
const sort = ref("name");
const search = ref("");

</script>