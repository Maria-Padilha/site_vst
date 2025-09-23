<template>
  <v-app>
    <section-principal v-if="$route.path === '/'" />
    <NavBar />
    <v-main class="body">
      <router-view/>
      <v-fab
          color="green" location="right bottom"
          app="fixed" icon
      >
        <v-icon size="25px" icon="mdi-whatsapp"/>
      </v-fab>
    </v-main>
  </v-app>
</template>

<script setup>
import NavBar from "@/components/base/NavBar.vue";
import SectionPrincipal from "@/components/SectionPrincipal.vue";
</script>
