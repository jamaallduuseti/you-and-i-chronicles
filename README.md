# 💖 Site Romântico — Surpresa de Amor

Site de declaração de amor totalmente personalizável, com tema romântico,
animações suaves, música, contador em tempo real, galeria, carta e uma
seção secreta.

## ✏️ Como personalizar

**Tudo o que você precisa editar está em UM único arquivo:**

```
src/config/love-config.ts
```

Lá você pode mudar:

- Nomes do casal e data de início do namoro
- Foto e textos da tela inicial
- Linha do tempo (datas, fotos, textos)
- Datas especiais (primeiro encontro, beijo, etc.)
- Galeria de fotos (URLs)
- **Música**: troque `youtubeId`, `title`, `artist`, `cover`
- Texto da carta
- Mensagem final
- **Senha secreta** (`secret.password`)

> 💡 Para a música: pegue o ID do vídeo do YouTube (a parte depois de
> `v=` na URL) e cole em `music.youtubeId`. O site usa um iframe oculto
> do YouTube como fonte de áudio, em loop infinito.

## 🚀 Como rodar localmente

```bash
bun install
bun run dev
```

## 🌐 Como publicar no GitHub Pages

Este projeto é uma SPA TanStack Start. Para hospedar gratuitamente no
GitHub Pages, gere a versão estática:

1. **Crie um repositório** no GitHub e faça push do código.
2. No `vite.config.ts`, defina `base: "/nome-do-repo/"` se o repo não
   for `seu-usuario.github.io`.
3. Gere o build:
   ```bash
   bun run build
   ```
4. Publique a pasta de saída (`dist/`) no branch `gh-pages` — use a
   ação oficial `peaceiris/actions-gh-pages` no GitHub Actions, ou
   `bunx gh-pages -d dist`.
5. Em **Settings → Pages**, escolha o branch `gh-pages` como source.
6. Pronto! Seu site estará em `https://seu-usuario.github.io/nome-do-repo/`.

> Alternativa ainda mais simples: publique direto na **Vercel** ou
> **Netlify** — basta conectar o repositório, sem configuração extra.

## 🎁 Seção secreta

Há um coração no final do site. Ao clicar, abre um modal pedindo a
"palavra mágica". Defina a senha em `loveConfig.secret.password`.

## ❤️ Tecnologias

- React + TanStack Start
- Tailwind CSS v4 (design system com tokens românticos)
- Framer Motion (animações)
- YouTube IFrame API (música em loop)
