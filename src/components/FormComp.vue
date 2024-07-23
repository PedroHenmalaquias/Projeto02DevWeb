  <script setup>
  import { reactive, ref } from 'vue'
  import { useUserStore } from '@/stores'
  const userStore = useUserStore()
  import { useCidadeStore } from '@/stores/cidades';
  import CidadesApi from '@/api/cidades.js';
  const { addUF } = useCidadeStore();
  import { estados } from '@/stores/estados';
  const cidadeApi = new CidadesApi();
  let cidades = ref([])
  import { Verificar } from '@/stores/verify';
  const verificar = new Verificar();

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

  function enviar(){
    try{
    if(verificar.verificarCampos(defaultUser)){
      alert('Campos preenchidos corretamente')
      userStore.updateUser(defaultUser)
    }
    }catch(error){
      console.log(error)
    }
    console.log(defaultUser)
  
  }
  </script>

  <template>
    <main>
      <form @submit.prevent="">
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
            <input type="password" v-model="defaultUser.confirmSenha" />
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
          <button type="submit" @click="enviar">Enviar</button>
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
