import { useEffect, useRef, useState } from "react";
import { Pause, Play, Music2 } from "lucide-react";
import { loveConfig } from "@/config/love-config";

// Uses hidden YouTube iframe as audio source (loop infinito).
export function MusicPlayer() {
  const { youtubeId, title, artist, cover } = loveConfig.music;
  const playerRef = useRef<HTMLDivElement | null>(null);
  const ytRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API once
    const w = window as any;
    function createPlayer() {
      if (!playerRef.current) return;
      ytRef.current = new w.YT.Player(playerRef.current, {
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: youtubeId,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            setReady(true);
            try {
              e.target.setVolume(45);
              e.target.playVideo();
              setPlaying(true);
            } catch {}
          },
          onStateChange: (e: any) => {
            // 1 = playing, 2 = paused, 0 = ended
            if (e.data === 1) setPlaying(true);
            if (e.data === 2) setPlaying(false);
            if (e.data === 0) e.target.playVideo(); // loop fallback
          },
        },
      });
    }

    if (w.YT && w.YT.Player) {
      createPlayer();
    } else {
      const prev = w.onYouTubeIframeAPIReady;
      w.onYouTubeIframeAPIReady = () => {
        prev?.();
        createPlayer();
      };
      if (!document.getElementById("yt-iframe-api")) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
    }
  }, [youtubeId]);

  // Try to unlock playback on first user interaction (browser autoplay policies)
  useEffect(() => {
    const tryPlay = () => {
      try {
        ytRef.current?.unMute?.();
        ytRef.current?.playVideo?.();
      } catch {}
    };
    window.addEventListener("click", tryPlay, { once: true });
    window.addEventListener("touchstart", tryPlay, { once: true });
    return () => {
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  function toggle() {
    if (!ready || !ytRef.current) return;
    if (playing) ytRef.current.pauseVideo();
    else {
      ytRef.current.unMute?.();
      ytRef.current.playVideo();
    }
  }

  return (
    <>
      {/* Hidden YouTube iframe — acts as audio source */}
      <div
        style={{
          position: "fixed",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          left: -9999,
          top: -9999,
        }}
        aria-hidden
      >
        <div ref={playerRef} />
      </div>

      {/* Visible mini card */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/80 p-2 pr-4 shadow-card backdrop-blur-md sm:bottom-6 sm:right-6">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
          <img src={cover} alt={title} className="h-full w-full object-cover" />
          {playing && (
            <div className="absolute inset-0 grid place-items-center bg-black/30">
              <Music2 className="h-4 w-4 animate-pulse text-white" />
            </div>
          )}
        </div>
        <div className="min-w-0 max-w-[150px]">
          <p className="truncate font-display text-sm font-semibold text-foreground">{title}</p>
          <p className="truncate text-xs text-muted-foreground">{artist}</p>
        </div>
        <button
          onClick={toggle}
          aria-label={playing ? "Pausar música" : "Tocar música"}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-wine text-primary-foreground transition-transform hover:scale-110"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}
        </button>
      </div>
    </>
  );
}
