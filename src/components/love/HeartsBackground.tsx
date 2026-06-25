import { useEffect, useState } from "react";

const EMOJIS = ["❤️", "💖", "🌹", "💕", "✨"];

type Heart = { id: number; left: number; duration: number; delay: number; emoji: string; size: number };

export function HeartsBackground({ count = 18 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 10 + Math.random() * 12,
        delay: Math.random() * 15,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
        size: 0.8 + Math.random() * 1.4,
      })),
    );
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="heart-float"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            fontSize: `${h.size}rem`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
