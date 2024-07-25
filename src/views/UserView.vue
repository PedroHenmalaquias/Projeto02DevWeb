<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores'
import  router from "@/router";
const userStore = useUserStore()
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import UserComp from '@/components/UserComp.vue'    

onMounted(async () => {
  if (userStore.state.localUser.nome == '') {
    await router.push('/')
  }
})


</script>

<template>
    <HeaderComp />
    <main>
    <UserComp :data="userStore.state.localUser" />
    </main>
    <FooterComp />
</template>

<style scoped>
main{
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
}
</style>