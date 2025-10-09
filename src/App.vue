<template>
  <v-app>
    <section-principal v-if="$route.path === '/'" />
    <NavBar />
    <v-main class="body pb-10">
      <router-view/>

      <div class="fab-stack">
        <v-fab
            color="gray" v-if="uiStore.top && $route.path === '/'" size="small"
            icon variant="tonal" href="#home" class="mr-1"
        >
          <v-icon size="23px" icon="mdi-chevron-up" />
        </v-fab>

        <v-fab
            color="green"
            icon class="mt-3"
            @click="openWpp"
        >
          <v-icon size="25px" icon="mdi-whatsapp"/>
        </v-fab>
      </div>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script setup>
import NavBar from "@/components/base/NavBar.vue";
import SectionPrincipal from "@/components/SectionPrincipal.vue";
import FooterComponent from "@/components/base/FooterComponent.vue";
import {useUiStore} from "@/stores/ui";

const uiStore = useUiStore();

const openWpp = () => {
  window.open('https://api.whatsapp.com/send?phone=5565996848782&text=Quero%20uma%20apresenta%C3%A7%C3%A3o%20do%20sistema', '_blank');
}
</script>

<style scoped>
.fab-stack {
  position: fixed;
  right: 25px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 100;
}
</style>
