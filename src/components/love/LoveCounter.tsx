import { useEffect, useState } from "react";
import { loveConfig } from "@/config/love-config";

function diff(start: Date, now: Date) {
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();
  let hours = now.getHours() - start.getHours();
  let minutes = now.getMinutes() - start.getMinutes();
  let seconds = now.getSeconds() - start.getSeconds();

  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prev = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prev; months--;
  }
  if (months < 0) { months += 12; years--; }
  return { years, months, days, hours, minutes, seconds };
}

export function LoveCounter() {
  const start = new Date(loveConfig.couple.startDate);
  const [t, setT] = useState(() => diff(start, new Date()));

  useEffect(() => {
    const id = setInterval(() => setT(diff(start, new Date())), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = [
    { label: "Anos", value: t.years },
    { label: "Meses", value: t.months },
    { label: "Dias", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Minutos", value: t.minutes },
    { label: "Segundos", value: t.seconds },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-2xl border border-border/60 bg-card/70 p-4 text-center shadow-soft backdrop-blur-sm"
        >
          <div className="font-display text-3xl font-bold text-gradient-romantic tabular-nums sm:text-4xl">
            {String(it.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
