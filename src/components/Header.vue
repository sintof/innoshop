<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <router-link to="/">
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-500">Магазин лучших кросовок</p>
      </div>
    </router-link>
    <ul class="flex items-center gap-10">
      <li @click="switchDrawer" class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
        <img src="/cart.svg" alt="card">
        <b>{{ overallPrice }} руб.</b>
      </li>
      <router-link to="/">
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/home.svg" alt="heart">
          <span>Главная</span>
        </li>
      </router-link>
      <router-link to="/favorite" v-if="authState">
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/heart.svg" alt="heart">
          <span>Закладки</span>
        </li>
      </router-link>
      <router-link to="/login" v-if="!authState">
        <li class="flex items-center gap-3  text-gray-500 hover:text-black cursor-pointer">
          <img src="/profile.svg" alt="profile">
          <span>Войти</span>
        </li>
      </router-link>
      <router-link to="/profile" v-else>
        <li class="flex items-center gap-3  text-gray-500 hover:text-black cursor-pointer">
          <img src="/profile.svg" alt="profile">
          <span>Профиль</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";
import { auth } from "@/firebase";
import { ref } from "vue";

const productStore = useProductStore()
const { overallPrice } = storeToRefs(productStore)

const authState = ref(auth.currentUser)
auth.onAuthStateChanged((user) => {
  authState.value = user
})

defineProps({
  switchDrawer: Function
})
</script>