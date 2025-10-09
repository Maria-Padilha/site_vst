<template>
  <section class="h-100 w-100 flex flex-col justify-center items-center text-center px-6">
    <!-- Ícone / Ilustração -->
    <v-icon icon="mdi-robot-confused" size="96" color="var(--color-blue-light)" class="mb-6 opacity-80" />

    <!-- Título -->
    <h1 class="text-5xl font-extrabold text-gray-900 tracking-wide">OOPS!</h1>
    <h2 class="text-3xl font-bold text-blue-light mt-2 tracking-wider">
      Página não encontrada
    </h2>

    <!-- Descrição -->
    <p class="text-gray-600 mt-4 text-lg max-w-xl">
      A página que você está procurando pode ter sido movida, estar em manutenção ou não existir mais.
    </p>

    <!-- Botão -->
    <v-btn
        color="var(--color-blue-light)" variant="flat"
        class="mt-8 text-white text-lg font-semibold shadow-md hover:shadow-lg transition-all"
        to="/"
    >
      Voltar à Página Inicial
    </v-btn>
  </section>
</template>

<style scoped>
section {
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
}
</style>
