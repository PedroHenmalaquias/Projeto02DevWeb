
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCidadeStore = defineStore('UF', () => {
    const UF = ref([])
    const addUF = (newUF) => {
        UF.value.push(newUF)
    }
    return { UF, addUF }
})
