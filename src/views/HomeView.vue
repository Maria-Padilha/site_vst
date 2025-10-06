<template>
  <!-- SESSÃO QUEM SOMOS -->
  <section
      data-aos="fade-right" data-aos-duration="1200"
      class="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"
  >
    <!-- ESQUERDA -->
    <div>
      <!-- título -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-capitalize text-gray-900 letras-espaco">
        Tudo para <span class="text-blue-light">gestão empresarial</span>.
      </h2>

      <!-- subtítulo -->
      <p class="mt-4 text-lg text-gray-600">
        A VST Solution oferece soluções inovadoras para gestão integrada,
        ajudando empresas a crescerem com tecnologia, performance e confiança.
      </p>

      <!-- lista com ícones -->
      <ul class="mt-6 flex flex-col gap-4 text-gray-700">
        <li class="flex gap-3">
          <v-icon icon="mdi-check-circle" color="var(--color-blue-light)"/>
          <span>
            <strong>Experiência:</strong> +20 anos atuando em diversos setores
            como varejo, indústria e serviços.
          </span>
        </li>
        <li class="flex gap-3">
          <v-icon icon="mdi-check-circle" color="var(--color-blue-light)" />
          <span>
            <strong>Objetivo:</strong> entregar soluções flexíveis e de alto
            desempenho para sua empresa.
          </span>
        </li>
      </ul>

      <!-- cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <v-card class="bg-white rounded-xl pa-4 shadow hover:shadow-lg transition" elevation="0"
        >
          <v-icon icon="mdi-domain" color="var(--color-blue-light)" size="28"/>
          <h3 class="mt-4 font-semibold text-gray-900">Fundação</h3>
          <p class="mt-2 text-gray-600 text-sm leading-relaxed">
            Criada em 2002, a VST é referência em soluções empresariais para
            diferentes segmentos.
          </p>
        </v-card>

        <v-card class="bg-white rounded-xl pa-4 shadow hover:shadow-lg transition" elevation="0"
        >
          <v-icon icon="mdi-rocket-launch" color="var(--color-blue-light)" size="28"/>
          <h3 class="mt-4 font-semibold text-gray-900">Objetivo</h3>
          <p class="mt-2 text-gray-600 text-sm leading-relaxed">
            Garantir a satisfação dos clientes, evoluindo sempre nossos
            produtos para maior liberdade de gestão.
          </p>
        </v-card>
      </div>
    </div>

    <!-- DIREITA -->
    <div class="background-secondary rounded-xl pa-4">
      <h3 class="text-xl font-bold text-gray-900">
        Transparência e confiança
      </h3>
      <p class="mt-3 text-gray-700 leading-relaxed">
        Nossas relações com parceiros são pautadas em respeito, cumprimento de
        prazos, honestidade nas soluções e transparência em todas as ações.
      </p>

      <div class="mt-6 flex justify-center">
        <v-img
            :src="require('@/assets/img/quem-somos.png')"
            :lazy-src="require('@/assets/img/quem-somos.png')"
            alt="Sobre nós"
            class="rounded-lg"
            max-width="400"
            cover
        >
          <template v-slot:placeholder><lazy-image /></template>
        </v-img>
      </div>
    </div>
  </section>

  <!-- SESSÃO MODULOS -->
  <section class="mt-10">
    <v-sheet data-aos="fade-right" data-aos-duration="1200" class="w-[100%] pt-9 background-blue-opacity rounded-lg">
      <v-img class="md:w-[80%] w-[90%] rounded-sm mx-auto" :src="require('@/assets/img/foto-6.png')" :lazy-src="require('@/assets/img/foto-6.png')">
        <template v-slot:placeholder><lazy-image /></template>
      </v-img>
    </v-sheet>
  </section>

  <section class="mt-10 w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center">
    <h2 data-aos="fade-right" data-aos-duration="1500" class="text-4xl mt-10 font-extrabold text-capitalize text-gray-900 letras-espaco text-center">
      Conheça nossos <span class="text-blue-light">Módulos</span>.
    </h2>
    <p data-aos="fade-right" data-aos-duration="1500" class="mt-4 text-gray-600 text-center max-w-3xl">
      Nossos módulos são desenvolvidos para atender às necessidades específicas
      de cada cliente, proporcionando uma gestão eficiente e integrada.
    </p>

    <div data-aos="fade-right" data-aos-duration="1500" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full mb-10">
      <v-card
          v-for="(modulo, index) in modulos"
          :key="index"
          class="rounded-2xl p-6 shadow-md bg-white card-custom"
          elevation="0"
      >
        <div class="flex flex-col items-center gap-4">
          <!-- Ícone -->
          <div class="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-blue-600 shadow-md transition-colors duration-300 ease-in-out hover:bg-blue-700">
            <v-icon :icon="modulo.icon" size="40px" color="white" />
          </div>

          <!-- Título -->
          <h3 class="font-bold text-gray-900 text-xl text-center tracking-wide">
            {{ modulo.titulo }}
          </h3>
        </div>

        <!-- Descrição -->
        <p class="mt-3 text-gray-600 leading-relaxed text-center text-base">
          {{ modulo.descricao }}
        </p>

        <!-- Botão -->
        <v-card-actions class="justify-center">
          <v-btn
              class="mt-5 font-semibold px-6 py-3 text-white transition-transform duration-300 ease-in-out hover:scale-105"
              color="blue-darken-2"
              rounded="lg"
              size="large"
              href="#contato"
          >
            Conhecer Módulo
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </section>

  <!-- SESSÃO APP MOBILE -->
  <section class="px-16 background-blue-opacity flex flex-col md:flex-row items-start px-6 pt-10 gap-8">
    <!-- Mockup do App -->
    <v-img
        data-aos="fade-right" data-aos-duration="1500"
        :src="require('@/assets/img/celular.png')"
        :lazy-src="require('@/assets/img/celular.png')"
        alt="App Mobile ERP"
        class="rounded-lg mx-auto w-[70%] md:w-[40%] lg:w-[35%]"
    >
      <template v-slot:placeholder><lazy-image /></template>
    </v-img>

    <!-- Conteúdo -->
    <div data-aos="fade-right" data-aos-duration="1500" class="lg:w-[65%] flex flex-col justify-center mb-4">
      <p class="text-blue-light uppercase text-lg font-semibold">
        Controle na palma da sua mão
      </p>
      <h2 class="text-4xl mt-3 font-extrabold text-gray-900 letras-espaco">
        Acesse seu ERP de qualquer lugar, com o nosso App Mobile
      </h2>

      <!-- Cards de Benefícios -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <!-- Card -->
        <v-card
            v-for="(beneficio, i) in beneficios" :key="i"
            class="rounded-2xl shadow-md bg-white card-custom"
            elevation="0"
        >
          <v-btn variant="tonal" :icon="beneficio.icon" color="var(--color-blue-light)" />
          <h3 class="font-semibold text-lg text-gray-900 mt-2">{{ beneficio.titulo }}</h3>
          <p class="mt-2 text-gray-600 text-sm leading-relaxed">{{ beneficio.desc }}</p>
        </v-card>
      </div>

      <!-- Botões -->
      <div class="flex items-center gap-4 mt-7 flex-col md:flex-row">
        <v-btn
            color="var(--color-blue-medium)" variant="flat" size="large"
            class="px-6 text-white text-lg text-none flex items-center justify-center w-[100%] md:w-auto"
            href="#contato" rounded
        >
          <v-icon icon="mdi-google-play" size="30" />
          <div class="ml-3">
            <small class="text-sm font-light">Disponível no</small>
            <p>Google Play</p>
          </div>
        </v-btn>

        <v-btn
            color="var(--color-blue-medium)" variant="flat" size="large"
            class="px-6 text-white text-lg text-none flex items-center justify-center w-[100%] md:w-auto"
            href="#contato" rounded
        >
          <v-icon icon="mdi-apple" size="30" />
          <div class="ml-3">
            <small class="text-sm font-light">Disponível no</small>
            <p>App Store</p>
          </div>
        </v-btn>
      </div>
    </div>
  </section>

  <!-- SESSÃO SERVIÇOS -->
  <section class="mt-10 w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center">
    <h2 data-aos="fade-right" data-aos-duration="1500" class="text-4xl mt-10 font-extrabold text-capitalize text-gray-900 letras-espaco text-center">
      Conheça nossos <span class="text-blue-light">Serviços</span>.
    </h2>
    <p data-aos="fade-right" data-aos-duration="1500" class="mt-4 text-gray-600 text-center max-w-3xl">
      Oferecemos uma gama completa de serviços para garantir que sua
      empresa aproveite ao máximo nossas soluções de ERP.
    </p>

    <div data-aos="fade-right" data-aos-duration="1500" class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      <v-card
          v-for="(card, i) in cards"
          :key="i"
          class="relative overflow-hidden bg-transparent card-custom-2"
          elevation="0"
      >
        <!-- Imagem -->
        <img
            :src="card.img"
            :alt="card.titulo"
            class="h-56 w-full object-cover"
        />

        <!-- Conteúdo sobreposto -->
        <div
            class="bg-white mx-4 relative z-10 bottom-10 shadow-md pa-4 flex flex-col flex-grow items-stretch"
        >
          <h3 class="font-bold text-lg text-gray-900">{{ card.titulo }}</h3>
          <p class="text-gray-600 mt-2 flex-grow text-justify">
            {{ card.desc }}
          </p>
        </div>
      </v-card>
    </div>
  </section>

  <!-- SESSÃO PARCEIROS -->
  <section
      data-aos="fade-right" data-aos-duration="1200"
      class="w-100 background-secondary mt-10 flex items-center flex-col justify-center pa-5 overflow-hidden"
  >
    <div class="flex items-center justify-center gap-5 w-100 text-center">
      <div class="w-[15%] h-[2px] background-blue-dark rounded-full opacity-30" />
      <p class="text-lg opacity-90">Utilizada por empresas de todos os segmentos e tamanhos</p>
      <div class="w-[15%] h-[2px] background-blue-dark rounded-full opacity-30" />
    </div>

    <div class="relative overflow-hidden mt-10">
      <!-- faixa rolando -->
      <div
          class="flex animate-scroll gap-16 items-center"
      >
        <!-- Repete os logos -->
        <img v-for="(logo, i) in logos" :key="i"
             :src="logo"
             class="h-12 object-contain grayscale hover:grayscale-0 transition"
             alt="Parceiro"
        />
        <!-- duplicar para loop infinito -->
        <img v-for="(logo, i) in logos" :key="'dup-' + i"
             :src="logo"
             class="h-9 object-contain grayscale hover:grayscale-0 transition"
             alt="Parceiro"
        />
      </div>
    </div>
  </section>

  <!-- SESSÃO CONTATO -->
  <section
      data-aos="fade-right" data-aos-duration="1200"
      class="mt-16 w-[92%] md:w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-x-12 gap-y-5">
    <!-- Título + barra -->
    <div class="flex items-stretch gap-8">
      <div class="w-[5px] background-blue-light rounded-full opacity-30" />
      <div>
        <h2 class="text-4xl letras-espaco font-extrabold">Fale</h2>
        <h2 class="text-4xl letras-espaco font-extrabold text-blue-light">Conosco</h2>
      </div>
    </div>

    <!-- Texto + chips -->
    <div class="w-100">
      <p class="text-lg text-slate-800">
        Conheça o <strong>VST</strong>, Sistema integrado de Gestão Empresarial. Com o VST, você administra a sua
        empresa de modo prático, seguro e produtivo — inclusive pela internet, multi-empresa, multi-filial e multi-usuários.
      </p>

      <!-- Chips -->
      <div class="mt-6 flex flex-wrap items-center md:justify-center gap-2">
        <v-chip
            v-for="(chip, index) in chips"
            :key="index"
            :prepend-icon="chip.icon"
            class="chip transition-all duration-300"
            :variant="hover[index] ? 'tonal' : 'outlined'"
            rounded
            size="large"
            :ripple="false"
            :color="hover[index] ? 'var(--color-blue-light)' : 'gray'"
            @mouseenter="hover[index] = true"
            @mouseleave="hover[index] = false"
        >
          {{ chip.text }}
        </v-chip>
      </div>
    </div>
  </section>

  <!-- Agendamento -->
  <section data-aos="fade-right" data-aos-duration="1200" class="my-16 background-secondary py-10">
    <div class="w-[92%] md:w-[80%] mx-auto flex flex-col">
      <h2 class="text-4xl font-extrabold text-capitalize text-gray-900 letras-espaco text-center">
        Agende uma <span class="text-blue-light">demonstração</span>
      </h2>
      <p class="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
        Entre em contato conosco para agendar uma demonstração personalizada do
        nosso sistema ERP. Descubra como nossas soluções podem transformar a
        gestão da sua empresa.
      </p>

      <v-form ref="formRef" class="my-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start gap-4">
          <!-- Campos de texto -->
          <v-text-field
              v-for="(form, index) in forms"
              :key="index"
              variant="outlined"
              :label="form.label"
              :type="form.type"
              :required="form.required"
              hide-details="auto"
              :prepend-inner-icon="form.icon"
              :rules="[v => !!v || `${form.label} é obrigatório`]">
          </v-text-field>

          <!-- Select -->
          <v-select
              variant="outlined"
              label="Segmento"
              prepend-inner-icon="mdi-domain"
              hide-details="auto"
              :items="['Distribuição', 'Indústria', 'Serviços', 'Comércio', 'Loja']"
              :rules="[v => !!v || 'Segmento é obrigatório']"
              required>
          </v-select>
        </div>
      </v-form>

      <div class="flex justify-center">
        <v-btn
            color="var(--color-blue-medium)" variant="flat" size="large"
            class="px-6 text-white text-lg text-none flex items-center justify-center"
            href="#contato" rounded
        >
          Agendar Demonstração
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import LazyImage from "@/components/layout/LazyImage.vue";

const logos = ref([
  require('@/assets/img/parceiros/fermat.png'),
  require('@/assets/img/parceiros/olifer.png'),
  require('@/assets/img/parceiros/vibor.png'),
  require('@/assets/img/parceiros/clair.png'),
  require('@/assets/img/parceiros/onng.png'),
  require('@/assets/img/parceiros/k9.png'),
  require('@/assets/img/parceiros/vidrocenter.png'),
  require('@/assets/img/parceiros/grupoverao.png'),
  require('@/assets/img/parceiros/dp.png'),
  require('@/assets/img/parceiros/unifilm.png'),
  require('@/assets/img/parceiros/vm.png'),
  require('@/assets/img/parceiros/elocar.png'),
  require('@/assets/img/parceiros/tapefrisos.png'),
  require('@/assets/img/parceiros/soportas.png'),
  require('@/assets/img/parceiros/soparabrisas.png'),
  require('@/assets/img/parceiros/pilar.png'),
  require('@/assets/img/parceiros/isatak.png'),
  require('@/assets/img/parceiros/inoxtak.png'),
  require('@/assets/img/parceiros/concaço.png'),
  require('@/assets/img/parceiros/eletroaco.png'),
  require('@/assets/img/parceiros/acobrasil.png'),
]);

const beneficios = ref([
  {
    icon: "mdi-chart-line",
    titulo: "Relatórios em tempo real",
    desc: "Acompanhe os resultados da sua empresa de onde estiver."
  },
  {
    icon: "mdi-bell-ring",
    titulo: "Notificações instantâneas",
    desc: "Receba alertas importantes diretamente no seu celular."
  },
  {
    icon: "mdi-account-group",
    titulo: "Multiusuários",
    desc: "Permissões e acessos personalizados para cada colaborador."
  },
  {
    icon: "mdi-shield-lock",
    titulo: "Segurança avançada",
    desc: "Seus dados protegidos com criptografia de ponta."
  },
  {
    icon: "mdi-sync",
    titulo: "Sincronização automática",
    desc: "Todas as informações sempre atualizadas em tempo real."
  },
  {
    icon: "mdi-cellphone-link",
    titulo: "Integração total",
    desc: "Conectado aos módulos do seu ERP sem complicações."
  }
]);

const modulos = ref([
  { titulo: 'Estoque', descricao: 'Monitore e controle o estoque em tempo real, evitando faltas ou excessos.', icon: 'mdi-warehouse' },
  { titulo: 'Financeiro', descricao: 'Controle completo das finanças da sua empresa, desde contas a pagar e receber até fluxo de caixa.', icon: 'mdi-currency-usd' },
  { titulo: 'Gestão Fiscal', descricao: 'Automatize processos fiscais e garanta conformidade com as regulamentações vigentes.', icon: 'mdi-file-percent' },
  { titulo: 'Ordem de Produção', descricao: 'Controle e organize todo o processo produtivo da sua empresa.', icon: 'mdi-factory' },
  { titulo: 'Ordem de Serviço', descricao: 'Gerencie solicitações, execuções e entregas de serviços com eficiência.', icon: 'mdi-clipboard-text-outline' },
  { titulo: 'Vendas', descricao: 'Gerencie todo o processo de vendas, desde o pedido até a entrega ao cliente.', icon: 'mdi-chart-line' },
]);

const cards = ref([
  {
    img: require('@/assets/img/servicos/Colegas de trabalho.avif'),
    titulo: "Consultoria de Gestão",
    desc: "Orientamos sua empresa na tomada de decisões estratégicas, identificando oportunidades de crescimento e melhorias nos processos. Alavanque seu negócio com nossa expertise."
  },
  {
    img: require('@/assets/img/servicos/reunião.avif'),
    titulo: "Suporte e Manutenção",
    desc: "Oferecemos suporte técnico especializado e serviços de manutenção para garantir o bom funcionamento dos seus sistemas e equipamentos. Conte conosco para resolver problemas de forma ágil e eficiente."
  },
  {
    img: require('@/assets/img/servicos/chuva de ideias.avif'),
    titulo: "Treinamentos",
    desc: "Capacite sua equipe com nossos treinamentos especializados, desenvolvidos para aprimorar habilidades e conhecimentos específicos. Invista no desenvolvimento profissional e potencialize os resultados da sua empresa."
  },
  {
    img: require('@/assets/img/servicos/Dando uma apresentação.avif'),
    titulo: "Customizações",
    desc: "Adaptamos soluções de software às necessidades exclusivas do seu negócio, personalizando funcionalidades e interfaces. Tenha um sistema sob medida para impulsionar sua produtividade e eficiência."
  },
  {
    img: require('@/assets/img/servicos/codificação.avif'),
    titulo: "Business Intelligence",
    desc: "Transforme dados em insights valiosos com nossa solução de Business Intelligence. Tenha acesso a relatórios e análises detalhadas para embasar suas decisões estratégicas e obter vantagem competitiva."
  },
  {
    img: require('@/assets/img/servicos/imagem_2023-10-09_120824967.avif'),
    titulo: "Migração de dados entre sistemas",
    desc: "Realizamos a migração segura e eficiente dos seus dados de um sistema para outro, garantindo a integridade e a consistência das informações. Simplifique o processo e evite perdas de dados."
  }
]);

const chips = ref([
  { icon: 'mdi-account', text: 'Comercial: (65) 99684-8782' },
  { icon: 'mdi-cog', text: 'Suporte: (65) 3021-2500' },
  { icon: 'mdi-email', text: 'comercial@vstsolution.com.br' },
  { icon: 'mdi-map-marker', text: 'Rua  João Batista de Oliveira, 367 – Vista Alegre, Cuiabá – MT, 78085-712' }
]);

const forms = ref([
  { name: 'nome', label: 'Nome', type: 'text', required: true, icon: 'mdi-account' },
  { name: 'empresa', label: 'Empresa', type: 'text', required: true, icon: 'mdi-domain' },
  { name: 'email', label: 'Email', type: 'email', required: true, icon: 'mdi-email' },
  { name: 'telefone', label: 'Telefone', type: 'phone', required: false, icon: 'mdi-phone' },
]);

const hover = ref(Array(chips.value.length).fill(false));

</script>

<style scoped>

.chip {
  transition: all 0.3s ease !important;
}
.chip:hover {
  transform: translateY(-2px);
  border: 1px solid var(--color-blue-light) !important;
  box-shadow: 0 6px 16px rgba(30, 64, 175, 0.15);
}


.letras-espaco {
  letter-spacing: 7px;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 90s linear infinite;
  width: max-content; /* largura só do conteúdo */
}

.card-custom {
  border-radius: 1rem;
  padding: 1.5rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.7s ease, box-shadow 0.7s ease;
}
.card-custom:hover {
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  transition: transform 0.7s ease, box-shadow 0.7s ease;
}

.card-custom-2 {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.7s ease, box-shadow 0.7s ease;
}
.card-custom-2:hover {
  transform: scale(1.05) translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  transition: transform 0.7s ease, box-shadow 0.7s ease;
}

</style>