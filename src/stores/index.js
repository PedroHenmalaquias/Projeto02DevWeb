import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import router from '@/router'

export const useUserStore = defineStore('user', () => {
  const state = useStorage('localUser', {
    localUser: {
      nome: '',
      email: '',
      senha: '',
      data: '',
      endereco: '',
      cidade: '',
      estado: '',
      hobbies: [],
      liguagens: [],
      biografia: ''
    },
    error: ''
  })

  const updateUser = (user) => {
    console.log(user)
    console.log(state.value.localUser)
    try {
      state.value.localUser =  {
         nome: user.nome,
         email: user.email,
         senha: user.senha,
         data: user.data,
         endereco: user.endereco,
         cidade: user.cidade,
         estado: user.estado,
         hobbies: user.hobbies,
         linguagens: user.linguagens,
         biografia: user.biografia
       }
       window.location.reload()
    } catch (error) {
      state.error = error
      console.log(state.error)
    }
  }

  function deleteUser() {
    try{
    state.value.localUser = {
      nome: '',
      email: '',
      senha: '',
      data: '',
      endereco: '',
      cidade: '',
      estado: '',
      hobbies: [],
      liguagens: [],
      biografia: ''
    }
    localStorage.clear()
    router.push('/')
    }
    catch (error) {
      state.error = error
      console.log(state.error)
    }
  }

  return { state, deleteUser, updateUser }
})
