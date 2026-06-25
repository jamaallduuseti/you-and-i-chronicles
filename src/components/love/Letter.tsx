import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { loveConfig } from "@/config/love-config";

export function Letter() {
  const { title, body, signature } = loveConfig.letter;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(body.slice(0, i));
      if (i >= body.length) { clearInterval(id); setDone(true); }
    }, 18);
    return () => clearInterval(id);
  }, [inView, body]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-card/90 p-8 shadow-card sm:p-12"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent 0, transparent 36px, oklch(0.85 0.04 20 / 0.3) 36px, oklch(0.85 0.04 20 / 0.3) 37px)",
      }}
    >
      <h3 className="mb-6 text-center font-script text-4xl text-gradient-romantic sm:text-5xl">
        {title}
      </h3>
      <pre
        className={`whitespace-pre-wrap font-script text-lg leading-[2.25rem] text-foreground sm:text-xl ${done ? "" : "cursor-blink"}`}
        style={{ fontFamily: "var(--font-script)" }}
      >
        {typed}
      </pre>
      {done && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-right font-script text-xl text-primary"
        >
          {signature}
        </motion.p>
      )}
    </motion.div>
  );
}
