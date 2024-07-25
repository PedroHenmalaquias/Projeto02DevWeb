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
    hobbies: [],
    linguagens: [],
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
          <hr>

          <div class="checks">
            <p>Hobbies</p>        
            <span>
          <input type="checkbox" id="hobby1" value='Futebol' v-model="defaultUser.hobbies"> <label
            for="hobby1">Futebol</label>
        </span>
        <span>
          <input type="checkbox" id="hobby2" value='Natação' v-model="defaultUser.hobbies"> <label
            for="hobby2">Natação</label>
        </span>
        <span>
          <input type="checkbox" id="hobby3" value="Volei" v-model="defaultUser.hobbies"> <label for="hobby3">Vôlei</label>
        </span>
        <span>
          <input type="checkbox" id="hobby3" value="Video-Game" v-model="defaultUser.hobbies"> <label
            for="hobby3">Video-Game</label>
        </span>
      </div>
      <hr>
      <p>Linguagens de Programação</p>
      <div class="checks">
        <span>
          <input type="checkbox" id="hobby1" value='C#' v-model="defaultUser.linguagens"> <label
            for="linguagem1">C#</label>
        </span>
        <span>
          <input type="checkbox" id="linguagem2" value='Javascript' v-model="defaultUser.linguagens"> <label
            for="linguagem2">Javascript</label>
        </span>
        <span>
          <input type="checkbox" id="linguagem3" value="Fortran" v-model="defaultUser.linguagens"> <label for="linguagem3">Fortran</label>
        </span>
        <span>
          <input type="checkbox" id="linguagem3" value="Python" v-model="defaultUser.linguagens"> <label
            for="linguagem3">Python</label>
        </span>
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
    margin:  15px auto;
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

  input, select {
    border: 2px solid  #333;
    border-radius: 5px;
    padding: 5px;
  }
  </style>
