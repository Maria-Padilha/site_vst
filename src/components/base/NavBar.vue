<template>
  <!-- NAVBAR DO SITE -->
  <v-app-bar class="text-white pl-5 py-1" elevation="0" :class="($route.path !== '/' || uiStore.drawer || uiStore.top) ? 'background-navbar' : 'bg-transparent'">
    <router-link to="/">
      <v-sheet width="110px" class="bg-transparent">
        <v-img
            alt="logo da empresa" cover
            :src="require('@/assets/img/LogoVST.png')"
        />
      </v-sheet>
    </router-link>

    <v-list v-if="!uiStore.menu" class="flex bg-transparent ml-10 mt-1 gap-3" :lines="false" density="compact" nav>
      <v-list-item
          v-for="(item, index) in links"
          :key="index"
          @click="goToSection(item.route)"
          :value="index"
          rounded="0"
          active-class="rounded-md"
      >
        <template #title>
          <p class="texto-16px font-normal">
            {{ item.name }}
          </p>
        </template>
      </v-list-item>
    </v-list>

   <template v-if="uiStore.menu" #append>
      <v-btn icon="mdi-menu" @click="uiStore.drawer = !uiStore.drawer" />
   </template>
  </v-app-bar>

  <!-- MENU DE NAVEGAÇÃO MOBILE -->
  <v-navigation-drawer v-model="uiStore.drawer" width="850" color="var(--bg-color)" @click="uiStore.drawer = false">
    <v-sheet v-if="uiStore.drawer" width="100%" height="100%"  class="d-flex padding-bottom flex-column absolute z-10 px-10 py-10 bg-transparent">
      <div class="h-[550px] flex flex-col items-center justify-center texto-color-primary">
        <v-btn
            v-for="(link, index) in links" :key="index" variant="text"
            @click="goToSection(link.route)" class="text-none my-3">{{ link.name }}
        </v-btn>
      </div>
    </v-sheet>
  </v-navigation-drawer>

</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useUiStore} from "@/stores/ui";
import { useRouter } from 'vue-router'

const router = useRouter()
const uiStore = useUiStore();

// links da página
const links = ref([
  {route: '#home', name: 'Home'},
  {route: '#modulos', name: 'Módulos'},
  {route: '#mobile', name: 'Mobile'},
  {route: '#servicos', name: 'Serviços'},
  {route: '#contato', name: 'Contato'},
]);

// menu responsivo

onMounted(() => {
  uiStore.initListeners()
})

onBeforeUnmount(() => {
  uiStore.removeListeners()
})

const goToSection = async (hash) => {
  // se não estiver na home, vai pra lá antes
  if (router.currentRoute.value.path !== '/') {
    await router.push('/')
  }

  // espera o DOM renderizar a home antes do scroll
  setTimeout(() => {
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}
</script>

<style scoped>
.padding-bottom{
  padding-bottom: 150px;
}

.background-navbar {
  background-color: var(--color-blue-dark);
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.texto-16px {
  font-size: 16px;
}
</style>