self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('confielectro-v1').then(function(cache) {
      return cache.addAll([
        'index.html','style.css','script.js','manifest.json',
        'logo.png','icons/icon-192.png','icons/icon-512.png',
        'sounds/click.wav','sounds/flip.wav','sounds/rare.wav'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(r) { return r || fetch(e.request); }));
});
