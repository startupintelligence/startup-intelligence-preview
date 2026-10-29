/* Limited offline support for the GitHub Pages preview. */
const CACHE_NAME = 'si-preview-shell-v2';
const BASE = new URL('./', self.location.href);
const CORE_ASSETS = [
  './','./index.html','./assets/css/cro.css','./assets/css/animated-background.css',
  './assets/css/section-motion.css','./assets/css/privacy-banner.css','./assets/js/cro.js',
  './assets/js/animated-background.js','./assets/js/section-motion.js','./assets/js/site-enhancements.js',
  './assets/icons/favicon.svg','./assets/css/visual-assets.css','./assets/images/hero-orbit.svg','./assets/images/web-experience.svg','./assets/images/growth-analytics.svg','./assets/images/strategy-system.svg','./privacy/'
].map(path => new URL(path, BASE).href);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => Promise.all(CORE_ASSETS.map(url => cache.add(url).catch(() => undefined)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('si-preview-shell-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
      return response;
    }).catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      return (await caches.match(new URL('./index.html', BASE).href)) || Response.error();
    }));
    return;
  }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && response.type === 'basic') caches.open(CACHE_NAME).then(cache => cache.put(request, response.clone()));
    return response;
  })));
});
