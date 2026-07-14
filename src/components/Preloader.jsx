import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(logoRef.current, {
        scale: 0.8,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          barRef.current,
          { scaleX: 0, transformOrigin: "left center", duration: 1.6, ease: "power2.inOut" },
          "-=0.2"
        )
        .from(textRef.current, { autoAlpha: 0, y: 10, duration: 0.4 }, "-=1.2")
        .to(overlayRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.3,
          onComplete: () => {
            // Beri 1 frame setelah overlay benar-benar hilang
            // sebelum memicu animasi hero agar tidak ada jeda visual.
            requestAnimationFrame(() => {
              setLoading(false);
              window.dispatchEvent(new Event("preloader:done"));
            });
          },
        });
    });

    return () => ctx.revert();
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={overlayRef}
      data-preloader
      className="w-screen h-screen fixed inset-0 flex flex-col items-center justify-center bg-zinc-950 z-[100]"
    >
      <div ref={logoRef} className="relative mb-8">
        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150"></div>
        <h1 className="relative text-4xl font-bold tracking-tight">
          Alia<span className="gradient-text">.</span>
        </h1>
      </div>

      <div className="w-56 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #2563eb, #818cf8, #2563eb)",
            backgroundSize: "200% auto",
          }}
        ></div>
      </div>

      <p ref={textRef} className="text-zinc-500 text-sm mt-5 tracking-wide">
        Memuat portfolio...
      </p>
    </div>
  );
};

export default Preloader;
