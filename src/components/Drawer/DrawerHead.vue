<template>
        <div class="flex items-center gap-5 mb-5">
            <img
            @click="switchDrawer"
            src="/arrow-next.svg"
            alt="close"
            class="opacity-30 cursor-pointer rotate-180 hover:opacity-100 transition hover:translate-x-1">
            <h2 class="text-2xl font-bold">Корзина</h2>
        </div>
</template>

<script setup>
defineProps({
  switchDrawer: Function
})
</script>