import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`w-screen h-screen fixed flex flex-col items-center justify-center bg-zinc-950 z-[100] transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 animate-pulse-glow"></div>
        <h1 className="relative text-4xl font-bold tracking-tight">
          Alia<span className="gradient-text">.</span>
        </h1>
      </div>

      <div className="w-56 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full animate-[loading_1.8s_ease-in-out_forwards]"
          style={{
            background: "linear-gradient(90deg, #2563eb, #818cf8, #2563eb)",
            backgroundSize: "200% auto",
            animation: "loading 1.8s ease-in-out forwards, shimmer 1.8s linear infinite",
          }}
        ></div>
      </div>

      <p className="text-zinc-500 text-sm mt-5 tracking-wide">Memuat portfolio...</p>
    </div>
  );
};

export default Preloader;
