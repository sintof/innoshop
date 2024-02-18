<template>
    <div class="flex flex-col items-center font-bold justify-center p-10 text-slate-500">
        <h1 class="text-3xl mb-8">Profile View</h1>
        <p class="text-xl">Email: {{ userdata }}</p>
        <p class="text-xl">Unique ID: {{ uid }}</p>
        <router-link @click="logout" to="/login" class="text-lime-500 mt-4 hover:text-lime-600 transition active:text-lime-700 cursor-pointer ">Logout</router-link>
    </div>
</template>

<script setup>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";

const uid = ref('');
const userdata = ref('Nothing')

const logout = () => {
    auth.signOut()
}

onAuthStateChanged(auth, (user) => {
    console.log(user)
    if (user) {
        uid.value = user.uid
        userdata.value = user.email
    } else {
        uid.value = ''
        userdata.value = 'Nothing'
    }
});
</script>