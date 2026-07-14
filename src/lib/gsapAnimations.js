import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initHeroAnimations() {
  // gsap.set posisi awal sudah dilakukan di GsapProvider saat mount.
  // Langsung jalankan timeline animasi.
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  tl.to("[data-nav]", { autoAlpha: 1, y: 0, duration: 0.7 })
    .to(
      "[data-hero-line]",
      {
        yPercent: 0,
        duration: 1.0,
        stagger: 0.08,
        onComplete: () => gsap.set("[data-hero-line]", { clearProps: "transform" }),
      },
      "-=0.6"
    )
    .to(
      "[data-hero-fade]",
      { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.08 },
      "-=0.65"
    )
    .to(
      "[data-hero-image]",
      { autoAlpha: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out" },
      "-=0.9"
    );

  document.querySelectorAll("#beranda [data-counter]").forEach((el, i) => {
    const target = parseInt(el.dataset.counter, 10);
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: target,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(counter.value) + "+";
        },
      },
      `-=${1.1 - i * 0.12}`
    );
  });

  gsap.to("[data-scroll-indicator]", {
    y: 8,
    duration: 1.4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  const heroImg = document.querySelector("[data-hero-image] img");
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: "#beranda",
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }

  gsap.to("[data-hero-glow]", {
    scale: 1.08,
    opacity: 0.7,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
}

export function initScrollReveals() {
  // Set posisi awal semua elemen sekaligus sebelum ScrollTrigger dibuat.
  // Ini mencegah flash dan mencegah replay saat ScrollTrigger.refresh() dipanggil.
  gsap.set("[data-header-badge]", { x: -16, autoAlpha: 0 });
  gsap.set("[data-header-title]", { y: 30, autoAlpha: 0 });
  gsap.set("[data-header-subtitle]", { y: 16, autoAlpha: 0 });
  gsap.set("[data-stagger-item]", { y: 32, autoAlpha: 0, scale: 0.97 });
  gsap.set("[data-reveal]", { y: 36, autoAlpha: 0 });

  // Section headers
  gsap.utils.toArray("[data-section-header]").forEach((header) => {
    const badge = header.querySelector("[data-header-badge]");
    const title = header.querySelector("[data-header-title]");
    const subtitle = header.querySelector("[data-header-subtitle]");

    ScrollTrigger.create({
      trigger: header,
      start: "top 92%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();
        if (badge) {
          tl.to(badge, { x: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" });
        }
        if (title) {
          tl.to(
            title,
            { y: 0, autoAlpha: 1, duration: 0.6, ease: "power4.out" },
            badge ? "-=0.3" : 0
          );
        }
        if (subtitle) {
          tl.to(
            subtitle,
            { y: 0, autoAlpha: 1, duration: 0.5, ease: "power3.out" },
            "-=0.35"
          );
        }
      },
    });
  });

  // Stagger groups
  gsap.utils.toArray("[data-stagger]").forEach((group) => {
    const items = group.querySelectorAll("[data-stagger-item]");
    if (!items.length) return;

    ScrollTrigger.create({
      trigger: group,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
        });
      },
    });
  });

  // Reveal elements
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (el.closest("[data-stagger]")) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power3.out",
        });
      },
    });
  });
}

export function initCounters() {
  gsap.utils.toArray("[data-counter]").forEach((el) => {
    if (el.closest("#beranda")) return;
    const target = parseInt(el.dataset.counter, 10);
    const suffix = el.dataset.counterSuffix || "+";

    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(counter.value) + suffix;
          },
        });
      },
    });
  });
}

export function initTimeline() {
  const line = document.querySelector("[data-timeline-line]");
  if (!line) return;

  gsap.set(line, { scaleY: 0, transformOrigin: "top center" });

  ScrollTrigger.create({
    trigger: line.parentElement,
    start: "top 90%",
    once: true,
    onEnter: () => {
      gsap.to(line, { scaleY: 1, duration: 1.2, ease: "power2.inOut" });
    },
  });

  gsap.utils.toArray("[data-timeline-dot]").forEach((dot) => {
    if (dot.closest("[data-stagger-item]")) return;

    gsap.set(dot, { scale: 0, autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: dot,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(dot, { scale: 1, autoAlpha: 1, duration: 0.4, ease: "back.out(2)" });
      },
    });
  });
}

export function initParallaxCards() {
  gsap.utils.toArray("[data-parallax-card]").forEach((card) => {
    const img = card.querySelector("img");
    if (!img) return;

    gsap.fromTo(
      img,
      { yPercent: -10, scale: 1.1 },
      {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );
  });
}

export function initMagneticButtons() {
  const handlers = [];

  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
      gsap.to(btn, { x, y, duration: 0.35, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    handlers.push({ btn, onMove, onLeave });
  });

  return () => {
    handlers.forEach(({ btn, onMove, onLeave }) => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    });
  };
}

export function initAmbientParallax() {
  gsap.utils.toArray("[data-parallax-bg]").forEach((el, i) => {
    const speed = parseFloat(el.dataset.parallaxBg || "0.15") + i * 0.05;
    gsap.to(el, {
      yPercent: 30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
}

export function initAllAnimations() {
  initScrollReveals();
  initCounters();
  initTimeline();
  initParallaxCards();
  initAmbientParallax();

  const cleanupMagnetic = initMagneticButtons();

  return cleanupMagnetic;
}
