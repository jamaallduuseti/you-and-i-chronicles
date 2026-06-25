// ============================================================
// 💖 CONFIGURAÇÃO DO SITE — Edite tudo aqui sem mexer no código
// ============================================================

export const loveConfig = {
  // Casal
  couple: {
    name1: "Você",
    name2: "Ela",
    // Data em que começaram a namorar (formato ISO: YYYY-MM-DDTHH:mm:ss)
    startDate: "2023-05-20T20:00:00",
  },

  // Tela inicial (Hero)
  hero: {
    photo: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1200&q=80",
    title: "Para o amor da minha vida",
    subtitle: "Uma pequena surpresa pra te dizer tudo que sinto ❤️",
    buttonLabel: "Começar nossa história",
  },

  // Linha do tempo
  timeline: [
    {
      date: "20 de Janeiro de 2023",
      title: "Nosso primeiro encontro",
      text: "O dia em que tudo começou. Eu já sabia que você era especial.",
      photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    },
    {
      date: "14 de Fevereiro de 2023",
      title: "Nosso primeiro beijo",
      text: "Um momento que eu nunca vou esquecer. O mundo parou.",
      photo: "https://images.unsplash.com/photo-1518621012420-8ab10887ec55?w=800&q=80",
    },
    {
      date: "20 de Maio de 2023",
      title: "O pedido de namoro",
      text: "Quando você disse sim, foi o dia mais feliz da minha vida.",
      photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    },
    {
      date: "Hoje",
      title: "E o amor só cresce",
      text: "Cada dia ao seu lado é um presente. Mal posso esperar pelo amanhã.",
      photo: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&q=80",
    },
  ],

  // Datas especiais
  dates: [
    { label: "Primeiro encontro", date: "2023-01-20", icon: "✨" },
    { label: "Primeiro beijo", date: "2023-02-14", icon: "💋" },
    { label: "Pedido de namoro", date: "2023-05-20", icon: "💍" },
    { label: "Primeira viagem", date: "2023-12-15", icon: "✈️" },
  ],

  // Galeria
  gallery: [
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1518621012420-8ab10887ec55?w=800&q=80",
    "https://images.unsplash.com/photo-1525334174166-78ad81dc8e91?w=800&q=80",
    "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80",
  ],

  // Nossa música — vídeo do YouTube usado como áudio
  music: {
    // ID do vídeo do YouTube (a parte depois de v=)
    youtubeId: "450p7goxZqg", // John Legend - All of Me
    title: "All of Me",
    artist: "John Legend",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
  },

  // Carta
  letter: {
    title: "Para você, meu amor",
    body: `Meu amor,

Hoje eu acordei pensando em você. Como em todos os dias, aliás.
Eu não sei explicar como você mudou minha vida — só sei que tudo
ficou mais leve, mais bonito, mais inteiro depois que você chegou.

Obrigado por cada sorriso, cada abraço, cada "bom dia".
Obrigado por escolher caminhar ao meu lado, mesmo nos dias difíceis.

Eu te amo de um jeito que eu nunca imaginei que fosse possível amar.
E eu prometo continuar te escolhendo, todos os dias.

Sempre seu,`,
    signature: "— Com todo o meu coração",
  },

  // Mensagem final
  finale: {
    title: "Eu te amo",
    text: "Mais do que ontem, menos do que amanhã. Pra sempre.",
  },

  // Seção secreta (senha case-insensitive)
  secret: {
    password: "teamo",
    title: "Você descobriu nosso segredo 💖",
    message:
      "Se um dia você se sentir perdida, lembra: meu coração é o seu lar. Sempre vai ser.",
  },
};

export type LoveConfig = typeof loveConfig;
