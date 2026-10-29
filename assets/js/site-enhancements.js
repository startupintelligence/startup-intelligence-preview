/* Privacy preferences, offline notice, image defaults and service worker registration. */
(() => {
  'use strict';
  const banner = document.querySelector('#privacy-banner');
  const reopen = document.querySelector('#privacy-reopen');
  const settings = document.querySelector('#privacy-settings');
  const settingsButton = document.querySelector('#privacy-settings-button');
  const optional = document.querySelector('#optional-consent');
  const accept = document.querySelector('#privacy-accept');
  const reject = document.querySelector('#privacy-reject');
  const save = document.querySelector('#privacy-save');
  const key = 'si-privacy-choice-v1';
  let choice = null;
  try { choice = JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) {}
  function storeChoice(allowOptional) {
    choice = { essential: true, optionalAnalytics: Boolean(allowOptional), updatedAt: new Date().toISOString() };
    try { localStorage.setItem(key, JSON.stringify(choice)); } catch (_) {}
    if (banner) banner.hidden = true;
    if (reopen) reopen.hidden = false;
  }
  if (banner && !choice) banner.hidden = false;
  if (reopen) reopen.hidden = !choice;
  if (optional && choice) optional.checked = Boolean(choice.optionalAnalytics);
  if (settingsButton && settings) settingsButton.addEventListener('click', () => {
    const open = settings.hidden;
    settings.hidden = !open;
    settingsButton.setAttribute('aria-expanded', String(open));
    if (save) save.hidden = !open;
    if (accept) accept.hidden = open;
    if (reject) reject.hidden = open;
    if (open) optional?.focus();
  });
  accept?.addEventListener('click', () => storeChoice(true));
  reject?.addEventListener('click', () => storeChoice(false));
  save?.addEventListener('click', () => storeChoice(Boolean(optional?.checked)));
  reopen?.addEventListener('click', () => {
    if (!banner) return;
    banner.hidden = false;
    reopen.hidden = true;
    if (settings) settings.hidden = false;
    if (settingsButton) settingsButton.setAttribute('aria-expanded', 'true');
    if (optional) optional.checked = Boolean(choice?.optionalAnalytics);
    if (save) save.hidden = false;
    if (accept) accept.hidden = true;
    if (reject) reject.hidden = true;
    document.querySelector('#privacy-title')?.focus();
  });
  const offlineNotice = document.querySelector('#offline-notice');
  function updateConnection() { if (offlineNotice) offlineNotice.hidden = navigator.onLine; }
  window.addEventListener('online', updateConnection);
  window.addEventListener('offline', updateConnection);
  updateConnection();
  document.querySelectorAll('img').forEach((img, index) => {
    if (!img.hasAttribute('loading')) img.loading = img.closest('.hero') || index === 0 ? 'eager' : 'lazy';
    if (!img.hasAttribute('decoding')) img.decoding = 'async';
  });
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => {
      const script = [...document.scripts].find(item => item.src.includes('site-enhancements.js'));
      const workerUrl = script ? new URL('../../service-worker.js', script.src) : new URL('./service-worker.js', location.href);
      navigator.serviceWorker.register(workerUrl.href).catch(() => {});
    });
  }
})();
