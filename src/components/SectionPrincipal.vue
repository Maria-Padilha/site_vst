<template>
  <section
      class="relative w-full h-[620px] flex items-center justify-center overflow-hidden"
  >
    <!-- vídeo de fundo -->
    <video
        autoplay
        loop
        muted
        playsinline
        class="absolute inset-0 w-full h-full object-cover z-0"
    >
      <source :src="require('@/assets/videos/video.mp4')" type="video/mp4"/>
    </video>

    <!-- overlay escuro opcional -->
    <div class="absolute inset-0 bg-black/40 z-0"></div>

    <!-- conteúdo -->
    <div
        class="relative z-10 flex flex-col items-center justify-center text-center w-full"
    >
      <h1 class="text-5xl font-bold text-white">VST SOLUTION</h1>

      <h2
          class="mt-2 text-white text-lg md:text-xl font-semibold"
      >
        <span ref="typedElement"></span>
      </h2>

      <p class="text-base md:text-lg font-normal text-gray-200 mb-6 mt-5 w-[100%] md:w-[80%] lg:w-[50%]">
        Soluções práticas e flexíveis para que sua empresa tenha alta performance.
        VST Solution ERP - Sistema integrado de gestão empresarial.
      </p>

      <v-btn
          class="text-none text-white"
          target="_blank"
          variant="flat"
          color="var(--color-blue-light)"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYTeQb_g4PFLSWshzloHDZRuV2GltZBc1G1zYtkqg-zHIKZg/viewform?pli=1"
      >
        Comece agora
      </v-btn>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import Typed from "typed.js"

const typedElement = ref(null)

onMounted(() => {
  new Typed(typedElement.value, {
    strings: [
      "A SOLUÇÃO PARA O SEU NEGÓCIO",
      "GESTÃO EMPRESARIAL COMPLETA",
      "SISTEMA INTEGRADO DE PERFORMANCE"
    ],
    typeSpeed: 60,     // velocidade de digitar
    backSpeed: 40,     // velocidade de apagar
    backDelay: 2000,   // tempo antes de apagar
    loop: true,        // repete para sempre
  })
})
</script>


<style scoped>
.padding-left {
  padding-left: 70px;
}

@media screen and (max-width: 768px) {
  .padding-left {
    padding-left: 0;
  }
}
</style>