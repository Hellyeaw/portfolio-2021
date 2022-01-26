//events
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('../sw-cached-pages.js')
      .then(reg => console.log('Service worker is supported now'))
      .cache(err => console.log(`service worker: error: ${err}`));
  });
}
