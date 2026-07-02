import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div
        className={`w-screen h-screen fixed flex flex-col items-center justify-center bg-zinc-950 z-50 transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">
          Alia<span className="text-blue-500">.</span>
        </h1>
        <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full animate-[loading_2s_ease-in-out_forwards]"></div>
        </div>
        <p className="text-zinc-500 text-sm mt-4">Loading...</p>
      </div>
    )
  );
};

export default Preloader;
