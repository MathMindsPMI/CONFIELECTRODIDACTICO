self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("confielectro").then(cache => {
            return cache.addAll([
                "index.html",
                "style.css",
                "script.js",
                "elementos.js",
                "config-electronica.js",
                "manifest.json",
                "logo.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(resp => resp || fetch(e.request))
    );
});
