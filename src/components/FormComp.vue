<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores'
const userStore = useUserStore()
import { useCidadeStore } from '@/stores/cidades';
import CidadesApi from '@/api/cidades.js';
const { addUF } = useCidadeStore();
const cidadeApi = new CidadesApi();
let cidades = ref([])

const defaultUser = reactive({
  nome: '',
  email: '',
  senha: '',
  confirmSenha: '',
  data: '',
  endereco: '',
  cidade: '',
  estado: '',
  hobbies: '',
  liguagens: '',
  biografia: ''
})

const estados = [
  { nome: 'Acre', sigla: 'AC', 'UF': 12 },
  { nome: 'Alagoas', sigla: 'AL', 'UF': 27 },
  { nome: 'Amapá', sigla: 'AP', 'UF': 16 },
  { nome: 'Amazonas', sigla: 'AM', 'UF': 13 },
  { nome: 'Bahia', sigla: 'BA', 'UF': 29 },
  { nome: 'Ceará', sigla: 'CE', 'UF': 23 },
  { nome: 'Distrito Federal', sigla: 'DF', 'UF': 53 },
  { nome: 'Espírito Santo', sigla: 'ES', 'UF': 32 },
  { nome: 'Goiás', sigla: 'GO', 'UF': 52 },
  { nome: 'Maranhão', sigla: 'MA', 'UF': 21 },
  { nome: 'Mato Grosso', sigla: 'MT', 'UF': 51 },
  { nome: 'Mato Grosso do Sul', sigla: 'MS', 'UF': 50 },
  { nome: 'Minas Gerais', sigla: 'MG', 'UF': 31 },
  { nome: 'Pará', sigla: 'PA', 'UF': 15 },
  { nome: 'Paraíba', sigla: 'PB', 'UF': 25 },
  { nome: 'Paraná', sigla: 'PR', 'UF': 41 },
  { nome: 'Pernambuco', sigla: 'PE', 'UF': 26 },
  { nome: 'Piauí', sigla: 'PI', 'UF': 22 },
  { nome: 'Rio de Janeiro', sigla: 'RJ', 'UF': 33 },
  { nome: 'Rio Grande do Norte', sigla: 'RN', 'UF': 24 },
  { nome: 'Rio Grande do Sul', sigla: 'RS', 'UF': 43 },
  { nome: 'Rondônia', sigla: 'RO', 'UF': 11 },
  { nome: 'Roraima', sigla: 'RR', 'UF': 14 },
  { nome: 'Santa Catarina', sigla: 'SC', 'UF': 42 },
  { nome: 'São Paulo', sigla: 'SP', 'UF': 35 },
  { nome: 'Sergipe', sigla: 'SE', 'UF': 28 },
  { nome: 'Tocantins', sigla: 'TO', 'UF': 17 },
]


async function adicionarUF() {
  for (let est of estados) {
    if (est.nome == defaultUser.estado) {
      addUF(est.UF)
      try {
        const cidadesObtidas = await cidadeApi.getCidades();
        cidades.value = cidadesObtidas;
      } catch (error) {
        console.error('Erro ao obter cidades:', error);
      }
    }
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="userStore.updateUser(defaultUser)">
        <div>
          <label for="">Nome:</label>
          <input type="text" v-model="defaultUser.nome" />
        </div>

        <div>
          <label for="">Email</label>
          <input type="email" v-model="defaultUser.email" />
        </div>

        <div>
          <label for="">Senha</label>
          <input type="password" v-model="defaultUser.senha" />
        </div>

        <div>
          <label for="">Confirmar Senha</label>
          <input type="text" v-model="defaultUser.confirmSenha" />
        </div>

        <div>
          <label for="">Data de Nascimento:</label>
          <input type="date" v-model="defaultUser.data" />
        </div>
     
        <div>
          <label for="">Estado</label>
          <select name="" id="" v-model="defaultUser.estado">
        <option v-for="estado in estados" :key="estado" :value="estado.nome">{{ estado.sigla }}</option>
      </select>
        </div>
        <div>
          <label for="">Cidade:</label>
          <select name="" id="" v-model="defaultUser.cidade" @click="adicionarUF()" >
        <option v-for="(cidade, index) in cidades" :key="index">{{ cidade.nome }}</option>
      </select>
        </div>
        <div>
          <label for="">Endereço:</label>
          <input type="text" v-model="defaultUser.endereco" />
        </div>
        <div>
          <label for="">Hobbies:</label>
          <input type="text" v-model="defaultUser.hobbies" />
        </div>
        <div>
          <label for="">Linguagens de Programação:</label>
          <input type="text" v-model="defaultUser.linguagens" />
        </div>
      <div>
        <label for="">Biografia:</label>
        <input type="text" v-model="defaultUser.biografia" />
        <button type="submit">Enviar</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: auto;
  background-color: #eee;
}
form {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
form > div{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
