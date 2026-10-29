/* Progressive, accessible section motion and subtle pointer depth. */
(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectors = '.hero-copy,.hero-art,.hero-bottom,.section-head,.service-card,.standards-grid article,.timeline li,.budget-layout > div,.discovery-intro,.wizard,.closing-inner,.footer-inner';
  document.querySelectorAll(selectors).forEach((element) => {
    if (element.hasAttribute('data-reveal')) return;
    element.setAttribute('data-reveal', '');
    const siblings = element.parentElement ? Array.from(element.parentElement.children).filter((node) => node.matches('[data-reveal]')) : [];
    element.style.setProperty('--reveal-delay', Math.min(Math.max(0,siblings.indexOf(element)) * 90,270) + 'ms');
  });
  const revealItems = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((element) => element.classList.add('is-visible'));
    return;
  }
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver((entries,currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  },{threshold:0.12,rootMargin:'0px 0px -48px 0px'});
  revealItems.forEach((element) => observer.observe(element));
  if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    document.querySelectorAll('.service-card').forEach((card) => {
      card.setAttribute('data-tilt','');
      let bounds;
      card.addEventListener('pointerenter',() => { bounds=card.getBoundingClientRect(); });
      card.addEventListener('pointermove',(event) => {
        if (!bounds) bounds=card.getBoundingClientRect();
        const x=(event.clientX-bounds.left)/bounds.width;
        const y=(event.clientY-bounds.top)/bounds.height;
        card.style.transform='perspective(900px) rotateX('+((0.5-y)*3.5).toFixed(2)+'deg) rotateY('+((x-0.5)*3.5).toFixed(2)+'deg) translateY(-3px)';
      });
      card.addEventListener('pointerleave',() => { bounds=null; card.style.transform=''; });
    });
  }
})();