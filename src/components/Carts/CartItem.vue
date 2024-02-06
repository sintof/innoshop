<template>
    <div class="flex border border-slate-200 rounded-xl p-4 cursor-pointer w-full">
        <img class="w-16 h-16 mr-2" :src="imageUrl" alt="sneakers">

        <div class="flex flex-col w-full">
            <p>{{ title }}</p>
            
            <div class="flex justify-between mt-2">
                <b>{{ price }} руб.</b>
                <img
                @click="$emit('removeCart', id)"
                class="opacity-40 hover:opacity-100 cursor-pointer transition"
                src="/close.svg"
                alt="close">
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    imageUrl: String,
    price: Number,
    id: Number
})
</script>