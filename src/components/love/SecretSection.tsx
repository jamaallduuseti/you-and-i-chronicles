import { useState } from "react";
import { Heart, Lock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { loveConfig } from "@/config/love-config";

export function SecretSection() {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pwd.trim().toLowerCase() === loveConfig.secret.password.toLowerCase()) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p className="max-w-md text-muted-foreground">
        Existe algo que eu guardei só pra você. Clica no coração... ou tente adivinhar a palavra mágica.
      </p>

      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir segredo"
        className="group relative grid h-24 w-24 place-items-center rounded-full bg-gradient-wine shadow-glow transition-transform hover:scale-110"
      >
        <Heart className="h-12 w-12 fill-primary-foreground stroke-primary-foreground pulse-heart" />
        <span className="absolute -bottom-8 text-xs uppercase tracking-widest text-muted-foreground">
          toque aqui
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-md rounded-3xl bg-card p-8 shadow-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>

              {!unlocked ? (
                <form onSubmit={submit} className="flex flex-col items-center gap-4 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-secondary">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold">Mensagem secreta</h3>
                  <p className="text-sm text-muted-foreground">
                    Digite a palavra mágica para revelar.
                  </p>
                  <input
                    autoFocus
                    value={pwd}
                    onChange={(e) => { setPwd(e.target.value); setError(false); }}
                    placeholder="palavra mágica..."
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-center font-display text-lg outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                  {error && (
                    <p className="text-sm text-destructive">Não é essa... tente de novo 💭</p>
                  )}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-wine py-3 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
                  >
                    Revelar
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  <Heart className="h-10 w-10 fill-primary stroke-primary pulse-heart" />
                  <h3 className="font-display text-3xl font-bold text-gradient-romantic">
                    {loveConfig.secret.title}
                  </h3>
                  <p className="font-script text-2xl leading-relaxed text-foreground">
                    {loveConfig.secret.message}
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
