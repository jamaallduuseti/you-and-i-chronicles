import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, ChevronDown, Calendar } from "lucide-react";
import { loveConfig } from "@/config/love-config";
import { HeartsBackground } from "@/components/love/HeartsBackground";
import { MusicPlayer } from "@/components/love/MusicPlayer";
import { LoveCounter } from "@/components/love/LoveCounter";
import { Letter } from "@/components/love/Letter";
import { SecretSection } from "@/components/love/SecretSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${loveConfig.couple.name1} & ${loveConfig.couple.name2} — Nossa história de amor` },
      { name: "description", content: "Uma surpresa romântica feita com todo o meu coração ❤️" },
      { property: "og:title", content: `${loveConfig.couple.name1} & ${loveConfig.couple.name2} ❤️` },
      { property: "og:description", content: "Uma surpresa romântica feita com todo o meu coração." },
      { property: "og:image", content: loveConfig.hero.photo },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: loveConfig.hero.photo },
      { name: "theme-color", content: "#7a1f2b" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Dancing+Script:wght@500;700&family=Inter:wght@400;500;600&display=swap",
      },
      {
        rel: "icon",
        href: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E❤️%3C/text%3E%3C/svg%3E",
      },
    ],
  }),
  component: LovePage,
});

function Section({
  id, title, eyebrow, children,
}: { id: string; title?: string; eyebrow?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <section id={id} ref={ref} className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-4xl font-bold text-gradient-romantic sm:text-6xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

function LovePage() {
  const [started, setStarted] = useState(false);
  const daysTogether = Math.floor(
    (Date.now() - new Date(loveConfig.couple.startDate).getTime()) / 86400000,
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeartsBackground />
      <MusicPlayer />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 flex flex-col items-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-romantic opacity-60 blur-2xl" />
            <img
              src={loveConfig.hero.photo}
              alt="Nós dois"
              className="relative h-48 w-48 rounded-full border-4 border-card object-cover shadow-card sm:h-64 sm:w-64"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-script text-2xl text-accent sm:text-3xl"
          >
            {loveConfig.couple.name1} <Heart className="mx-1 inline h-5 w-5 fill-primary stroke-primary" /> {loveConfig.couple.name2}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="max-w-3xl font-display text-5xl font-bold text-gradient-romantic sm:text-7xl"
          >
            {loveConfig.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="max-w-xl text-lg text-muted-foreground"
          >
            {loveConfig.hero.subtitle}
          </motion.p>

          <motion.a
            href="#timeline"
            onClick={() => setStarted(true)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-wine px-8 py-4 font-semibold text-primary-foreground shadow-glow"
          >
            {loveConfig.hero.buttonLabel}
            <Heart className="h-4 w-4 fill-primary-foreground pulse-heart" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: started ? 0 : 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-24 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="h-6 w-6 animate-bounce text-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <Section id="timeline" eyebrow="Como tudo aconteceu" title="Nossa história">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-rose to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-16">
            {loveConfig.timeline.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <TimelineItem key={i} item={item} left={left} index={i} />
              );
            })}
          </div>
        </div>
      </Section>

      {/* DATAS ESPECIAIS + CONTADOR */}
      <Section id="dates" eyebrow="Marcos do nosso amor" title="Datas que importam">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {loveConfig.dates.map((d, i) => {
            const dt = new Date(d.date);
            const days = Math.floor((Date.now() - dt.getTime()) / 86400000);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-border/60 bg-card/80 p-6 text-center shadow-soft backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-3 text-4xl">{d.icon}</div>
                <p className="font-display text-xl font-semibold">{d.label}</p>
                <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {dt.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-accent">
                  há {days} dias
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-center font-script text-2xl text-accent">
            Estamos juntos há {daysTogether} dias e contando...
          </p>
          <LoveCounter />
        </div>
      </Section>

      {/* GALERIA */}
      <Section id="gallery" eyebrow="Momentos eternos" title="Nossa galeria">
        <Gallery />
      </Section>

      {/* CARTA */}
      <Section id="letter" eyebrow="Direto do coração" title="Uma carta pra você">
        <Letter />
      </Section>

      {/* SEGREDO */}
      <Section id="secret" eyebrow="Só entre nós" title="Algo escondido">
        <SecretSection />
      </Section>

      {/* FINALE */}
      <Finale />

      <footer className="px-4 py-10 text-center text-sm text-muted-foreground">
        Feito com <Heart className="inline h-4 w-4 fill-primary stroke-primary" /> só pra você
      </footer>
    </main>
  );
}

function TimelineItem({
  item, left, index,
}: { item: typeof loveConfig.timeline[number]; left: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: left ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className={`relative grid grid-cols-[2rem_1fr] items-start gap-4 sm:grid-cols-2 sm:gap-12 ${left ? "" : "sm:[&>*:first-child]:order-2"}`}
    >
      {/* dot */}
      <div className="absolute left-4 top-6 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center rounded-full bg-gradient-wine ring-4 ring-background sm:left-1/2">
        <Heart className="h-2 w-2 fill-primary-foreground stroke-primary-foreground" />
      </div>

      <div className={`col-start-2 sm:col-auto ${left ? "sm:text-right" : ""}`}>
        <p className="text-xs uppercase tracking-widest text-accent">{item.date}</p>
        <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{item.title}</h3>
        <p className="mt-2 text-muted-foreground">{item.text}</p>
      </div>
      <div className="col-start-2 mt-3 sm:col-auto sm:mt-0">
        <div className="overflow-hidden rounded-2xl shadow-card">
          <img src={item.photo} alt={item.title} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </div>
    </motion.div>
  );
}

function Gallery() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {loveConfig.gallery.map((src, i) => (
          <motion.button
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            onClick={() => setActive(src)}
            className={`group relative overflow-hidden rounded-2xl shadow-soft ${i % 5 === 0 ? "sm:row-span-2 sm:col-span-1" : ""}`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/80 p-4 backdrop-blur"
          >
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={active}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-glow"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Finale() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [boom, setBoom] = useState(0);
  return (
    <section ref={ref} className="relative grid min-h-[90svh] place-items-center overflow-hidden px-4 py-32">
      <div className="absolute inset-0 bg-gradient-wine opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.78_0.13_30/0.4),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 flex max-w-3xl flex-col items-center gap-8 text-center text-primary-foreground"
      >
        <p className="font-script text-3xl text-accent sm:text-4xl">E para terminar...</p>
        <h2 className="font-display text-6xl font-bold sm:text-8xl">
          {loveConfig.finale.title}
        </h2>
        <p className="max-w-xl text-xl opacity-90 sm:text-2xl">
          {loveConfig.finale.text}
        </p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setBoom((b) => b + 1)}
          className="group relative mt-4 inline-flex items-center gap-3 rounded-full bg-card px-10 py-5 font-semibold text-primary shadow-glow"
        >
          <Heart className="h-5 w-5 fill-primary stroke-primary pulse-heart" />
          Eu te amo
          <Heart className="h-5 w-5 fill-primary stroke-primary pulse-heart" />
        </motion.button>

        {/* burst */}
        <AnimatePresence>
          {boom > 0 && (
            <BurstHearts key={boom} />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function BurstHearts() {
  const hearts = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 grid place-items-center">
      {hearts.map((_, i) => {
        const angle = (i / hearts.length) * Math.PI * 2;
        const dist = 200 + Math.random() * 180;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist,
              opacity: 0,
              scale: 1.6,
              rotate: Math.random() * 360,
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute text-3xl"
          >
            ❤️
          </motion.span>
        );
      })}
    </div>
  );
}
