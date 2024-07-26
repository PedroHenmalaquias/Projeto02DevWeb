<script setup>
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify';
import { useUserStore } from '@/stores'
const userStore = useUserStore()
import { useCidadeStore } from '@/stores/cidades'
import CidadesApi from '@/api/cidades.js'
const { addUF } = useCidadeStore()
import { estados } from '@/stores/estados'
const cidadeApi = new CidadesApi()
let cidades = ref([])
import { Verificar } from '@/stores/verify'
const verificar = new Verificar()

const defaultUser = reactive({
  nome: '',
  email: '',
  senha: '',
  confirmSenha: '',
  data: '',
  endereco: '',
  cidade: '',
  estado: '',
  hobbies: [],
  linguagens: [],
  biografia: ''
})

async function adicionarUF() {
  for (let est of estados) {
    if (est.nome == defaultUser.estado) {
      addUF(est.UF)
      try {
        const cidadesObtidas = await cidadeApi.getCidades()
        cidades.value = cidadesObtidas
      } catch (error) {
        console.error('Erro ao obter cidades:', error)
      }
    }
  }
}
let hobbie = ref('')
let linguagem = ref('')
const addHobbie = () => {
  let hobbieAdd = hobbie.value
  defaultUser.hobbies.push(hobbieAdd)
  hobbie.value = ''
}
const addLinguagem = () => {
  let linguagemAdd = linguagem.value
  defaultUser.linguagens.push(linguagemAdd)
  linguagem.value = ''
}
function enviar() {
  try {
    if (verificar.verificarCampos(defaultUser)) {
      toast.success("Campos preenchidos corretamente", {autoclose: 800})
      setTimeout(() => {
        userStore.updateUser(defaultUser)
      }, 1200);
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <main>
    <h1>User Form</h1>
    <form @submit.prevent="">
      <div>
        <label for="">Nome:</label>
        <input type="text" v-model="defaultUser.nome" placeholder='Ex: "Pedro"' />
      </div>

      <div>
        <label for="">Email</label>
        <input type="email" v-model="defaultUser.email" placeholder='Ex: "a@a.com"' />
      </div>

      <div>
        <label for="">Senha</label>
        <input type="password" v-model="defaultUser.senha" placeholder='******' />
      </div>

      <div>
        <label for="">Confirmar Senha</label>
        <input type="password" v-model="defaultUser.confirmSenha" placeholder='******' />
      </div>

      <div>
        <label for="">Data de Nascimento:</label>
        <input type="date" v-model="defaultUser.data" />
      </div>

      <div>
        <label for="">Estado</label>
        <select name="" id="" v-model="defaultUser.estado">
          <option v-for="estado in estados" :key="estado" :value="estado.nome">
            {{ estado.sigla }}
          </option>
        </select>
      </div>
      <div>
        <label for="">Cidade:</label>
        <select name="" id="" v-model="defaultUser.cidade" @click="adicionarUF()">
          <option v-for="(cidade, index) in cidades" :key="index">{{ cidade.nome }}</option>
        </select>
      </div>
      <div>
        <label for="">Endereço:</label>
        <input type="text" v-model="defaultUser.endereco" placeholder='Ex: "Rua da Mangueira"' />
      </div>
      <div>
        <label for="">Hobbie</label>
        <input type="text" placeholder='Ex: "correr"' v-model="hobbie" />
        <button @click="addHobbie">add</button>
      </div>
      <div>
        <label for="">Linguagens:</label>
        <input type="text" placeholder='Ex: "Python"' v-model="linguagem" />
        <button @click="addLinguagem">add</button>
      </div>
      <div>
        <label for="">Biografia:</label>
        <input type="text" v-model="defaultUser.biografia" placeholder='Ex: "Me chamo..."' />
      </div>
      <button type="submit" @click="enviar">Enviar</button>
    </form>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 1rem auto;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  width: 40%;
  border: 2px solid #333;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f4f4f4;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
form > div {
  display: flex;
  gap: 0.5rem;
}
form > div > label {
  width: 30%;
  text-align: right;
}
input,
select {
  border: 2px solid #333;
  border-radius: 1rem;
  padding: .3rem;
  width: 60%;
  height: 2rem;
}
form > div > button{
  border:none;
  color: white;
  border-radius: 1rem;
  padding: .3rem;
  margin: 0;
  width: 8%;
  background-color: rgb(10, 212, 10);
  opacity: .8;
  transition: .5s ease-in-out;
}
form > div > button:hover{
  opacity: 1;
}
button {
  border: none;
  border-radius: 1rem;
  padding: .3rem;
  margin: 1rem auto;
  width: 40%;
  color: white;
  background-color: rgb(0, 98, 255);
  opacity: .8;
  transition: .5s ease-in-out;
}
button:hover {
  opacity: 1;
}
</style>
