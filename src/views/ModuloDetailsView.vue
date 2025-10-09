<template>
  <section class="w-[100%] pt-10 background-blue-opacity">
    <v-sheet data-aos="fade-right" data-aos-duration="1200" class="bg-transparent">
      <v-img
          class="w-[90%] rounded-sm mx-auto"
          :class="modulo !== 'inventário' ? 'md:w-[75%]' : 'md:w-[65%] pb-3'"
          :src="require(`@/assets/img/modulos/${modulo}.png`)"
          :lazy-src="require(`@/assets/img/modulos/${modulo}.png`)"
          :alt="`Imagem do módulo ${modulo}`"
      >
        <template v-slot:placeholder><lazy-image /></template>
      </v-img>
    </v-sheet>
  </section>

  <section class="background-secondary py-10">
    <div class="w-[90%] md:w-[70%] mx-auto flex flex-col items-center justify-center">
      <h1 class="text-4xl font-extrabold letras-espaco text-center">Módulo <span class="text-blue-light">{{modulosDetalhes[modulo]?.nome}}</span></h1>

      <p
          v-html="displayedText"
          class="text-gray-700 mt-10 text-lg transition-all duration-300 whitespace-pre-line"
      ></p>

      <!-- Botão -->
      <v-btn
          v-if="isLongText"
          class="mt-6 text-blue-700 font-semibold text-sm text-none"
          variant="tonal" color="var(--color-blue-light)"
          @click="expanded = !expanded"
      >
        {{ expanded ? 'Ocultar texto' : 'Exibir mais' }}
      </v-btn>
    </div>
  </section>

  <section class="mt-10 w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center">
    <h2 class="text-4xl font-extrabold letras-espaco text-center">Características do <span class="text-blue-light">Módulo</span></h2>

    <div class="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-3 mt-10">
      <v-card
          v-for="(caracteristica, index) in modulosDetalhes[modulo]?.caracteristicas" :key="index"
          class="bg-white rounded-lg pa-4 transition card-custom" elevation="0"
      >
        <v-icon :icon="icons[modulo]" color="var(--color-blue-light)" size="28" />
        <h3 class="mt-4 font-semibold text-gray-900">{{ caracteristica }}</h3>
      </v-card>
    </div>

    <div class="mt-10 items-center flex gap-4 justify-center flex-wrap">
      <v-btn
          :to="`/modulo/${modulo.id}`" v-for="(modulo, index) in modulos" :key="index"
          variant="text" color="var(--color-blue-light)" class="font-semibold text-none"
          :prepend-icon="icons[modulo.id]"
      >
        Módulo {{modulo.nome}}
      </v-btn>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import LazyImage from "@/components/layout/LazyImage.vue";

const route = useRoute();
const modulo = computed(() => route.params.modulo || 'Desconhecido');

const modulosDetalhes = ref({
  'vendas': {
    nome: 'Vendas',
    descricao: 'O módulo vendas é um dos módulos mais importantes de um sistema ERP, pois é responsável por gerenciar todo o processo de vendas de uma empresa, desde o cadastro de clientes até o faturamento. \n \n' +
        'Defina tabelas de preços, gerencie pedidos e visualize os resultados comerciais em tempo real. \n \n' +
        'Acompanhar pedidos de compra com agilidade e praticidade; \n' +
        'Controlar a prestação de serviços e vendas de maneira rápida e intuitiva; \n' +
        'Fazer orçamentos, devoluções e crie vale-troca rapidamente. \n',
    caracteristicas: [
      'Terminal de vendas',
      'T.E.F',
      'Recebimento por PIX',
      'Aprovação de orçamentos / pedidos',
      'Comissão por produtos / sub-grupo de produtos'
    ],
  },

  'financeiro': {
    nome: 'Financeiro',
    descricao: 'É o coração da sua empresa. O módulo financeiro é uma ferramenta essencial para as empresas que desejam ' +
        'controlar suas finanças e tomar decisões mais informadas.\n \n' +
        'A seguir, são apresentados alguns benefícios do módulo financeiro:\n \n' +
        'Melhora o controle financeiro: Permite que as empresas tenham um controle mais preciso de suas finanças, evitando erros e fraudes.\n' +
        'Automatiza tarefas: Automatiza tarefas manuais, como o lançamento de notas fiscais e o pagamento de contas, conciliação bancária \n' +
        'Gera relatórios: Integrado com todos módulos que geram entradas e saidas, ajudam as empresas a tomar decisões mais informadas.',
    caracteristicas: [
        'Contas a receber',
        'Contas a pagar',
        'Controle bancário',
        'Controle de caixa',
        'Gestão de cartão de crédito',
        'Conciliação bancária via API',
        'Conciliação de cartões de crédito automatizada',
        'Adiantamento a clientes',
        'Adiantamento a fornecedores',
        'Adiantamento a colaboradores',
        'Plano de contas',
        'Gestão por centro de custo',
        'Emissão de boletos bancários híbridos via API',
        'Gestão de pagamentos eletrônicos via API',
        'Controle de mútuos'
    ]
  },

  'inventário': {
    nome: 'Inventário',
    descricao: 'O módulo de inventário é uma ferramenta essencial para empresas que desejam gerenciar seus estoques de forma eficiente. ' +
        'Faça a contagem dos seus itens em estoque de forma rápida e prática, seja manualmente, via mobile ou com coletor de dados, através da IA de contagem de itens. \n \n' +
        'Com o módulo de inventário, você pode:\n \n' +
        'Selecionar o item que será contado; \n' +
        'Realizar a contagem através da IA; \n' +
        'Definir a quantidade correta do item; \n' +
        'Registrar a contagem no sistema; \n' +
        'Analisar o Progresso da contagem. \n \n' ,
    caracteristicas: [
        'Contagem manual',
        'Contagem via imagem',
        'Contagem via coletor de dados',
        'Relatórios de divergência',
        'Relatórios de contagem',
        'Ajuste de inventário automático',
        'Inventário rotativo',
        'Inventário cíclico'
    ]
  },

  'estoque': {
    nome: 'Estoque',
    descricao: 'O objetivo é controlar a entrada, saída e movimentação de produtos e materiais em uma empresa. Para isso, ' +
        'o módulo de estoque deve permitir que o cliente:\n \n' +
        'Cadastre produtos e materiais: Cadastrar todos os produtos e materiais que são utilizados pela empresa, incluindo' +
        ' informações como descrição, código, unidade de medida,grade, preço e custo.\n \n' +
        'Registre entradas e saídas: Registrar todas as entradas e saídas de produtos e materiais da empresa, incluindo informações ' +
        'como data, quantidade, fornecedor ou cliente, e motivo da movimentação.\n \n' +
        'Controle o estoque: Controlar o estoque de produtos e materiais da empresa, incluindo informações como quantidade disponível, ' +
        'quantidade mínima e quantidade máxima.\n \n' +
        'Em resumo, o módulo de estoque ajuda o cliente a:\n \n' +
        'Evitar a falta de estoque: Permite o controle o estoque de produtos e materiais, evitando que a empresa fique sem produtos para ' +
        'vender ou produzir.\n' +
        'Evitar o excesso de estoque: Ajuda o cliente a controlar o estoque, evitando que a empresa tenha mais produtos do que precisa.\n' +
        'Melhorar a eficiência da gestão: Ajuda o cliente a ter uma visão mais clara do estoque da empresa, o que facilita a tomada de decisões.\n \n' +
        'Aqui estão alguns exemplos de como o módulo de estoque pode ser usado:\n \n' +
        'Uma empresa de varejo pode usar o módulo de estoque para controlar as vendas e o inventário de produtos.\n' +
        'Uma empresa de manufatura pode usar o módulo de estoque para controlar o abastecimento de matérias-primas e produtos acabados.\n' +
        'Uma empresa de serviços pode usar o módulo de estoque para controlar o estoque de suprimentos e equipamentos.',
    caracteristicas: [
        'Entrada de notas fiscais por XML / NF destinadas',
        'Validação dos tributos no ato da entrada da NF (PIS, COFINS, ST)',
        'Inventário de produtos manual, mobile, coletor de dados',
        'Transferência de mercadorias entre almoxarifados',
        'Kardex - Registro de entrada / saída de mercadorias',
        'Custo médio de mercadoria',
        'Etiqueta de produtos',
        'Posição de estoque',
        'Grade de produtos'
    ]
  },
})

const modulos = ref([
  { nome: 'Vendas', id: 'vendas' },
  { nome: 'Financeiro', id: 'financeiro' },
  { nome: 'Inventário', id: 'inventário' },
  { nome: 'Estoque', id: 'estoque' },
]);

const icons = ref({
  vendas: 'mdi-sale',
  financeiro: 'mdi-cash-multiple',
  inventário: 'mdi-archive',
  estoque: 'mdi-package-variant-closed',
});

// estado do botão
const expanded = ref(false)
const maxChars = 400 // limite antes de cortar

const descricaoCompleta = ref(
    modulosDetalhes.value[modulo.value]?.descricao.replace(/\n/g, '<br>')
)

const isLongText = computed(() => descricaoCompleta.value?.length > maxChars)

const displayedText = computed(() => {
  if (!isLongText.value) return descricaoCompleta.value
  return expanded.value
      ? descricaoCompleta.value
      : descricaoCompleta.value.slice(0, maxChars) + '...'
})

</script>

<style scoped>
.link {
  color: gray;
  text-decoration: none;
  transition: all .2s ease-in-out;
  font-weight: 400;
  font-size: 18px;
}

.link:hover {
  text-decoration: underline;
  color: var(--color-blue-light);
  font-weight: 700;
  transition: all .2s ease-in-out;
}
</style>