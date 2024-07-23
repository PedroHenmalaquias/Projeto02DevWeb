import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

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
         liguagens: user.liguagens,
         biografia: user.biografia
       }
    } catch (error) {
      state.error = error
      console.log(state.error)
    }
  }

  function deleteUser() {
    state.value.localUser = {
      nome: '',
      email: '',
      senha: '',
      data: '',
      endereco: '',
      cidade: '',
      estado: '',
      hobbies: '',
      liguagens: '',
      biografia: ''
    }
    localStorage.clear()
  }

  return { state, deleteUser, updateUser }
})
