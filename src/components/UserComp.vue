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
            <span v-for="item in data.hobbies" :key="item"> {{ item }}, </span>
        </p>
        <p>Linguagens:
            <span v-for="item in data.linguagens" :key="item"> {{ item }}, </span>
        </p>
        <p>Biografia: {{ data.biografia }}</p>
        <button @click="userStore.deleteUser">Logout</button>
    </section>
</template>

<style scoped>
section {
    width: 70%;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-direction: column;
    border: 1px solid black;
    padding: 1.5rem;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: #f4f4f4;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
    text-align: center;
    margin-bottom: 1rem;
}
p {
    width: 60%;
}
button {
    width: 40%;
    padding: 0.3rem;
    margin: 1rem auto;
    border: none;
    border-radius: 1rem;
    background-color: #333;
    color: white;
    cursor: pointer;
    transition: .5s ease-in-out;
}
button:hover {
    background-color: #555;
}

</style>
