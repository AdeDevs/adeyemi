import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Radio, ExternalLink } from "lucide-react";

export default function CurrentlyListening({ isTheme }) {
  const [track, setTrack] = useState({
    title: "",
    artist: "",
    album: "",
    albumImageUrl: "",
    spotifyUrl: "",
    isPlaying: false,
    isRecent: false,
    loaded: false,
  });

  const fetchSpotifyTrack = async () => {
    try {
      const res = await fetch("/api/spotify");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      if (data && (data.isPlaying || data.isRecent || data.title)) {
        setTrack({
          title: data.title || "Active",
          artist: data.artist || "Asake (feat. Travis Scott)",
          album: data.album || "",
          albumImageUrl: data.albumImageUrl || "",
          spotifyUrl: data.spotifyUrl || "https://open.spotify.com",
          isPlaying: Boolean(data.isPlaying),
          isRecent: Boolean(data.isRecent),
          loaded: true,
        });
      } else {
        setTrack((prev) => ({
          ...prev,
          isPlaying: false,
          isRecent: false,
          loaded: true,
        }));
      }
    } catch {
      // Graceful fallback state
      setTrack((prev) => ({
        ...prev,
        isPlaying: false,
        isRecent: false,
        loaded: true,
      }));
    }
  };

  useEffect(() => {
    fetchSpotifyTrack();
    // Poll quietly every 20 seconds for real-time sync
    const interval = setInterval(fetchSpotifyTrack, 20000);
    return () => clearInterval(interval);
  }, []);

  const hasTrackInfo = Boolean(track.title);

  return (
    <motion.div
      id="currently-listening-widget"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`mt-3 w-full max-w-full sm:max-w-[340px] border p-2.5 transition-all duration-300 ${
        isTheme
          ? "bg-white/95 border-neutral-300 text-neutral-900 shadow-xs hover:shadow-md"
          : "bg-[#0d1015]/95 border-neutral-800 text-neutral-100 hover:border-neutral-700"
      }`}
    >
      {/* Header bar: "LISTEN ALONG WITH ME" */}
      <div className="flex items-center justify-between font-mono-tech text-[10px] uppercase tracking-wider pb-1.5 mb-1.5 border-b border-inherit">
        <div className="flex items-center gap-1.5">
          <Radio size={12} className={track.isPlaying ? "text-emerald-500" : "text-neutral-500"} />
          <span className="font-bold text-neutral-500">LISTEN ALONG WITH ME</span>
        </div>
        {track.isPlaying ? (
          <div className="flex items-center gap-1 text-emerald-500 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>CURRENTLY PLAYING</span>
          </div>
        ) : track.isRecent ? (
          <span className="text-neutral-500 font-medium">RECENTLY PLAYED</span>
        ) : (
          <span className="text-neutral-500 font-medium">OFFLINE</span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {hasTrackInfo ? (
          <motion.a
            key={track.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            href={track.spotifyUrl || "https://open.spotify.com"}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-3 p-1 transition-colors"
            title={`Open ${track.title} by ${track.artist} on Spotify`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Album Cover Art or Music Icon */}
              <div
                className={`w-9 h-9 shrink-0 border overflow-hidden flex items-center justify-center transition-colors ${
                  isTheme
                    ? "bg-neutral-100 border-neutral-300 text-neutral-800"
                    : "bg-neutral-900 border-neutral-800 text-neutral-200"
                }`}
              >
                {track.albumImageUrl ? (
                  <img
                    src={track.albumImageUrl}
                    alt={track.album || track.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Music size={14} className="group-hover:text-emerald-500 transition-colors" />
                )}
              </div>

              <div className="min-w-0">
                <div className="font-mono-tech text-xs font-bold truncate group-hover:text-emerald-500 transition-colors flex items-center gap-1">
                  <span className="truncate">{track.title}</span>
                  <ExternalLink size={10} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-mono-tech text-[10px] text-neutral-500 truncate">
                  {track.artist}
                </div>
              </div>
            </div>

            {/* Dynamic Equalizer Wave Bars (when playing) or subtle indicator */}
            {track.isPlaying ? (
              <div className="flex items-end gap-[3px] h-3.5 shrink-0 px-1" aria-label="Audio equalizer playing">
                {[0.4, 0.9, 0.5, 0.8].map((delay, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      height: ["30%", "100%", "45%", "85%", "30%"],
                    }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay * 0.4,
                    }}
                    className="w-[2.5px] bg-emerald-500 inline-block"
                  />
                ))}
              </div>
            ) : (
              <div className="shrink-0 text-neutral-500 opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 transition-all pr-1">
                <Music size={13} />
              </div>
            )}
          </motion.a>
        ) : (
          <div className="p-2 font-mono-tech text-xs text-neutral-500 flex items-center justify-between">
            <span>Not currently listening — check back later</span>
            <Music size={14} className="text-neutral-500" />
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
