const cacheName = "v1";

const cacheAssets = [
    "index.html",
    "./src"
]

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(cacheAssets);
        }).then(() => self.skipWaiting())
    )
})

self.addEventListener("fetch", (e) => {
    e.respondWith(
        fetch(e.request).catch(() => caches.matches(e.request))
    )
})