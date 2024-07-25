<script setup>
import { useUserStore } from '@/stores'
const userStore = useUserStore()
defineProps({
    data: Object
})
</script>

<template>
    <section>
        <h2>Nome: {{ data.nome }}</h2>
        <p>Email: {{ data.email }}</p>
        <p>Senha: {{ data.senha }}</p>
        <p>Data de Nascimento: {{ data.data }}</p>
        <p>Endereço: {{ data.endereco }}</p>
        <p>Cidade: {{ data.cidade }}</p>
        <p>Estado: {{ data.estado }}</p>
        <p>Hobbies:
            <span v-for="item in data.hobbies" :key="item"> {{ item }}</span>
        </p>
        <p>Linguagens:
            <span v-for="item in data.linguagens" :key="item"> {{ item }}</span>
        </p>
        <p>Biografia: {{ data.biografia }}</p>
        <button @click="userStore.deleteUser">Logout</button>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    margin: 1rem auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    border: 1px solid black;
    padding: 1.5rem;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: #f4f4f4;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
