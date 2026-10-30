/* Future 3D scene loader.
   Scene modules must export mount(element) and may return a cleanup function.
   No renderer is downloaded until a scene is explicitly enabled and enters view. */
(() => {
  const config = window.SI_CONFIG?.scenes || {};
  if (!config.enabled || config.renderer === "none") return;
  const elements = document.querySelectorAll("[data-si-scene]");
  if (!elements.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(async entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      observer.unobserve(element);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (navigator.connection?.saveData) return;
      const modulePath = element.dataset.siScene;
      if (!modulePath) return;
      try {
        const scene = await import(modulePath);
        const cleanup = await scene.mount?.(element);
        if (typeof cleanup === "function") element.addEventListener("si:scene-destroy", cleanup, { once: true });
      } catch (error) {
        element.dataset.sceneState = "fallback";
        console.warn("Optional 3D scene unavailable; static fallback remains visible.", error);
      }
    });
  }, { rootMargin: "160px" });
  elements.forEach(element => observer.observe(element));
})();
