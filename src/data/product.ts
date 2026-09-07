export type ProductColor = {
  id: string;
  name: string;
  description: string;
  swatch: string;
  image: string;
  imageType?: "product" | "lifestyle";
};

export const product = {
  name: "GS10 Mini",
  line: "GS Fit • Series 10 Original",
  size: "41 / 42 mm",
  price: 299.9,
  installments: "ou 12x no cartão",
  checkoutUrl: "https://seu-checkout-aqui.com",
  description:
    "O smartwatch compacto para pulsos finos, com chamadas Bluetooth, notificações, recursos inteligentes e monitoramento para o dia a dia.",
  benefits: [
    { icon: "AI", title: "Chat GPT", text: "Inteligência artificial integrada ao seu pulso." },
    { icon: "⚡", title: "CPU 50% + rápida", text: "Performance fluida para acompanhar sua rotina." },
    { icon: "◉", title: "Até 3 dias de bateria", text: "Autonomia para uso diário, conforme o perfil de uso." },
    { icon: "☎", title: "Chamadas Bluetooth", text: "Faça e receba ligações direto no relógio." }
  ],
  colors: [
    {
      id: "prata",
      name: "Prata",
      description: "Pulseira silicone branca + milanese prata",
      swatch: "#dce3ec",
      image: "/images/gs10-prata.png"
    },
    {
      id: "estelar",
      name: "Estelar",
      description: "Pulseira silicone estelar + milanese estelar",
      swatch: "#eadfc8",
      image: "/images/gs10-estelar.png"
    },
    {
      id: "preto",
      name: "Preto",
      description: "Pulseira silicone preta + milanese preta",
      swatch: "#151515",
      image: "/images/gs10-preto-lifestyle.jpg",
      imageType: "lifestyle"
    }
  ] satisfies ProductColor[],
  packageItems: [
    "1x GS10 Mini com pulseira silicone",
    "1x pulseira milanese na cor correspondente",
    "1x carregador por indução",
    "1x manual do usuário"
  ],
  healthFeatures: [
    "Monitor de passos",
    "Monitor de batimentos cardíacos",
    "Monitor de pressão arterial",
    "Monitor de oxigênio no sangue",
    "Monitor de sono",
    "Monitor de sedentarismo",
    "Monitor de esportes",
    "Objetivo de treino",
    "Treino de respiração"
  ],
  smartFeatures: [
    "Ilha dinâmica",
    "Comando de voz",
    "Atalhos personalizados na tela principal",
    "Várias opções de menu",
    "Cronômetro",
    "Music player",
    "Contagem regressiva",
    "Recebe mensagens de redes sociais",
    "Adicionar fotos da galeria na tela inicial",
    "Travas de pulseiras",
    "Coroa giratória funcional",
    "Calendário",
    "Bloqueio de tela por senha",
    "Previsão do tempo",
    "Calculadora",
    "Controle remoto da câmera do celular",
    "Recebe mensagens de WhatsApp",
    "Baixar novas watchfaces pelo app",
    "Troca de pulseira",
    "Atalho rápido"
  ],
  specifications: [
    ["Tamanho da caixa", "41 / 42 mm"],
    ["Material da caixa", "Metal"],
    ["Material da pulseira", "Silicone + Milanese"],
    ["Conectividade", "Bluetooth (sem Wi‑Fi/GPS)"],
    ["Compatível", "iOS 9.0+ / Android 4.4+"],
    ["Bateria", "Até 3 dias (depende do uso)"],
    ["Idiomas", "Português, Inglês"],
    ["Resistência à água", "Não é à prova d’água"],
    ["Marca", "GS Fit (xwear)"],
    ["Linha / Modelo", "Series 10 / GS10 Mini"],
    ["Homologação Anatel", "079342315715"],
    ["EAN", "7888927512287"]
  ],
  faq: [
    {
      question: "Qual o prazo de garantia?",
      answer: "O produto conta com 90 dias de garantia contra defeitos de fabricação, conforme as condições de garantia da loja."
    },
    {
      question: "O que é essencial para a troca do produto?",
      answer: "Mantenha o selo de garantia do relógio intacto e guarde a embalagem e os acessórios para facilitar qualquer atendimento pós-venda."
    },
    {
      question: "É resistente à água?",
      answer: "Não. O GS10 Mini não é à prova d’água. Evite banho, piscina, mar e contato direto com líquidos."
    },
    {
      question: "Quais carregadores posso usar?",
      answer: "Utilize o carregador por indução compatível que acompanha o produto. Evite acessórios não compatíveis ou com tensão inadequada."
    },
    {
      question: "Os dados de saúde servem para fins médicos?",
      answer: "Não. As medições são voltadas a acompanhamento de bem-estar e não substituem avaliação, diagnóstico ou equipamento médico profissional."
    },
    {
      question: "As pulseiras brinde têm garantia?",
      answer: "A cobertura pode variar para acessórios e brindes. Consulte as condições comerciais aplicáveis no momento da compra."
    }
  ]
} as const;

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
