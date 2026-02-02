const CACHE_NAME = "kumpisal-v1";
const ASSETS = [
  "./",
  "./index.html",
  "https://unpkg.com/@hotwired/stimulus/dist/stimulus.umd.js",
];

// Install: Cache all files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
});

// Fetch: Serve from cache if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
