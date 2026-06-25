// ============================================================
// 💖 CONFIGURAÇÃO DO SITE — Edite tudo aqui sem mexer no código
// ============================================================

import t1 from "@/assets/love/t1.jpeg.asset.json";
import t2 from "@/assets/love/t2.jpeg.asset.json";
import t3 from "@/assets/love/t3.jpeg.asset.json";
import t4 from "@/assets/love/t4.jpeg.asset.json";
import g1 from "@/assets/love/g1.jpeg.asset.json";
import g2 from "@/assets/love/g2.jpeg.asset.json";
import g3 from "@/assets/love/g3.jpeg.asset.json";
import g4 from "@/assets/love/g4.jpeg.asset.json";
import g5 from "@/assets/love/g5.jpeg.asset.json";
import segredoVideo from "@/assets/love/segredo.mp4.asset.json";

export const loveConfig = {
  couple: {
    name1: "Eu",
    name2: "Você",
    // Início do nosso amor
    startDate: "2022-03-28T00:00:00",
  },

  hero: {
    photo: t4.url,
    title: "Para o amor da minha vida",
    subtitle: "Uma pequena surpresa pra te dizer tudo que sinto ❤️",
    buttonLabel: "Começar nossa história",
  },

  timeline: [
    {
      date: "28 de Março de 2022",
      title: "Como tudo começou",
      text: "Uma simples mensagem que mudou tudo, onde eu pedi uma chance para aquilo que seria a coisa mais importante dos meus dias.",
      photo: t1.url,
    },
    {
      date: "31 de Março de 2022",
      title: "Nosso primeiro beijo",
      text: "Um momento desprevenido que me levou ao céu tão rápido, que diria que viria assim do nada.",
      photo: t2.url,
    },
    {
      date: "14 de Maio de 2022",
      title: "O pedido de namoro",
      text: "O dia tão esperado que eu tanto pensei em o que eu podia fazer, porém foi simples aguardar o momento mais certo. Se eu pudesse repetir aquele dia, eu o repetiria pelo menos 3 vezes por semana.",
      photo: t3.url,
    },
    {
      date: "Hoje",
      title: "E o amor só cresce",
      text: "A cada dia do seu lado, podendo ver como você vem crescendo e ver a mulher perfeita que está do meu lado. Mais que passamos por dificuldades, elas nos deixam mais fortes e me mostram o quão sortudo eu sou de ter você ao meu lado.",
      photo: t4.url,
    },
  ],

  dates: [
    { label: "Quando tudo começou", date: "2022-03-28", icon: "✨" },
    { label: "Primeiro beijo", date: "2022-03-31", icon: "💋" },
    { label: "Pedido de namoro", date: "2022-05-14", icon: "💍" },
    { label: "Primeiro Natal juntos", date: "2022-12-25", icon: "🎄" },
  ],

  gallery: [g1.url, g2.url, g3.url, g4.url, g5.url, t1.url, t2.url, t3.url, t4.url],

  music: {
    youtubeId: "450p7goxZqg",
    title: "All of Me",
    artist: "John Legend",
    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80",
  },

  letter: {
    title: "Para Meu Grande Amor",
    body: `Minha pandinha,

Hoje eu acordei pensando em você. Como em todos os outros dias, pensei o que eu poderia fazer para mostrar isso para você — o que eu quero dizer é que você não faz ideia do quanto eu te amo e como você transformou alguém que via tudo como indiferente em alguém que vê cor em tudo. Sei que diversas vezes sou muito ogro, brinco com coisa séria, porém quero te mostrar que mesmo que não pareça, eu te amo muito!

Obrigado por cada momento, por cada abraço, por cada "bom dia" e por cada piada sem graça kkkk.
Obrigado por estar do meu lado todos os dias e por aceitar viver isso tudo comigo.

Eu te amo de um jeito que eu só via nos filmes, e hoje do seu lado me sinto como se eu estivesse em um — um filme perfeito, colorido, engraçado, onde tudo acontece.
Eu quero te mostrar que o mundo pode ser perfeito e espero conseguir te mostrar tudo isso, pois se eu pudesse, eu te entregaria meus olhos apenas para você poder ver o quão perfeita você é e como meu mundo muda quando você está aqui.

De todo sentimento feito por um coração que lhe pertence,`,
    signature: "— De seu príncipe, para minha princesa.",
  },

  finale: {
    title: "Eu te amo",
    text: "Mais do que ontem, menos do que amanhã. Pra sempre.",
  },

  secret: {
    password: "Violeta",
    hint: "A junção do nosso amor, o fruto perfeito da nossa relação 🌸",
    title: "Você descobriu nosso segredo 💖",
    message:
      "Esse é o nosso pedacinho mais especial. Pra sempre seu.",
    videoUrl: segredoVideo.url,
  },
};

export type LoveConfig = typeof loveConfig;
