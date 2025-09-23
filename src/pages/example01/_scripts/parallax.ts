let rafId: number | null = null;

const prefersReduced =
  window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

export function initParallax() {
  if (prefersReduced) return;

  const rootSections = document.querySelectorAll<HTMLElement>("section");

  const measureTop = (el: HTMLElement) =>
    el.getBoundingClientRect().top + window.scrollY;

  const onScroll = () => {
    if (rafId != null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;

      const currentY = window.scrollY;
      rootSections.forEach((section) => {
        const top = measureTop(section);
        const offset = currentY - top;

        section
          .querySelectorAll<HTMLElement>("[data-parallax-layer]")
          .forEach((layer) => {
            const speed = Number(layer.dataset.speed || 0);
            layer.style.transform = `translateY(${offset * speed}px)`;
          });
      });
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

