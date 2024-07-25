<script setup>
import FormComp from '@/components/FormComp.vue'
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'

import { onMounted } from 'vue'
import { useUserStore } from '@/stores'
import  router from "@/router";
const userStore = useUserStore()

onMounted(async () => {
  if (userStore.state.localUser.nome != '') {
    await router.push('/user')
  }
})

</script>

<template>
  <main>
    <HeaderComp />
    <FormComp />
    <FooterComp />
  </main>
</template>

<style scoped></style>