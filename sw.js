const cacheName = 'v1';
const assetsToCache = ['README.md', './style.css']; // Add your filenames here

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(assetsToCache)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );

});
