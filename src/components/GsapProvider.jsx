import { createContext, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initHeroAnimations, initAllAnimations } from "../lib/gsapAnimations.js";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const GsapProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    // Set posisi awal elemen hero SEKARANG, saat preloader masih menutupi layar.
    // Ini mencegah flash elemen sebelum animasi intro dimulai.
    gsap.set("[data-hero-line]", { yPercent: 110, immediateRender: true });
    gsap.set("[data-hero-fade]", { autoAlpha: 0, y: 28, immediateRender: true });
    gsap.set("[data-hero-image]", { autoAlpha: 0, scale: 0.88, y: 40, immediateRender: true });
    gsap.set("[data-nav]", { autoAlpha: 0, y: -24, immediateRender: true });

    const lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    setLenis(lenisInstance);

    lenisInstance.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenisInstance.scrollTo(value, { immediate: true });
        }
        return lenisInstance.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const tickerCallback = (time) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const onRefresh = () => lenisInstance.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);

    let cleanupMagnetic = null;
    let heroAnimationStarted = false;

    const runHeroAndScroll = () => {
      if (heroAnimationStarted) return;
      heroAnimationStarted = true;

      // 1. Setup semua animasi scroll (termasuk gsap.set posisi awal elemen)
      cleanupMagnetic = initAllAnimations();
      // 2. Refresh setelah semua set sudah diterapkan — posisi sudah tersembunyi
      ScrollTrigger.refresh();
      // 3. Jalankan animasi hero intro
      initHeroAnimations();
    };

    const handlePreloaderDone = () => {
      // Tunggu satu frame penuh setelah overlay preloader hilang
      requestAnimationFrame(runHeroAndScroll);
    };

    window.addEventListener("preloader:done", handlePreloaderDone);

    // Jika preloader tidak ada (misal di dev hot-reload), langsung jalankan.
    if (!document.querySelector("[data-preloader]")) {
      requestAnimationFrame(runHeroAndScroll);
    }

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      lenisInstance.scrollTo(target, { offset: -80, duration: 1.6 });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("preloader:done", handlePreloaderDone);
      document.removeEventListener("click", handleAnchorClick);
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      cleanupMagnetic?.();
      gsap.ticker.remove(tickerCallback);
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
};

export default GsapProvider;
