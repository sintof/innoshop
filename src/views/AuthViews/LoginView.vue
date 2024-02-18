<template>
    <div class="p-10 flex justify-center items-center h-screen">
        <div class="w-96 bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center">
            <h2 class="text-3xl font-bold mb-8 text-slate-500">Login</h2>
            <input v-model="email" class="my-4 border border-slate-200 rounded-md py-2 px-4" type="text" placeholder="Email">
            <input v-model="password" class="my-4 border border-slate-200 rounded-md py-2 px-4" type="password" placeholder="Password">
            <button @click="login" class="w-full bg-lime-500 rounded-xl py-3 text-white hover:bg-lime-600 transition active:bg-lime-700">Login</button>
            <p class="text-center mt-4">Don't have an account? <router-link to="/signup" class="text-lime-500">Sign Up</router-link></p>
        </div>
    </div>
</template>

<script setup>
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            console.log('User logged in');
            router.push('/');
        })
        .catch((error) => {
            alert(error.message);
            email.value = '';
            password.value = '';
        })
}
</script>