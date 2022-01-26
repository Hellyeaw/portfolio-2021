const cacheName = 'v1';

const cacheAssets = [
  'jewel.html',
  'logo.html',
  'draw.html',
  'about.html',
  'index.html',
  'Game.html',
  'pixel.html',
  'web.html',
  '/css/styles.css',
  '/css/anim.css',
  '/js/anim.js',
  '/js/mediaqueryController.js',
  '/sw-cache.js',
];

// call install event
self.addEventListener('install', (e) => {
  console.log('service worker: installed');

  e.waitUntill(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('service worker: caching files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// call acticate event
self.addEventListener('activate', (e) => {
  console.log('service worker: activated');

  //remove unwanted caches
  e.waitUntill(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('service worker: clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//call fetch event
self.addEventListener('fetch', e => {
  console.log('service worker: fetching');
  e.respondWith(fetch(e.request).catch(() => catches.match(e.request)));
});
