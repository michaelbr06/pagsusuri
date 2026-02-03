const CACHE_NAME = "kumpisal-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./script.js",
  "./translations.js",
  "./styles.css",
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
    caches.match(event.request).then((cachedResponse) => {
      // Return the cached file immediately if it exists
      if (cachedResponse) {
        return cachedResponse;
      }
      // Otherwise, go to the network
      return fetch(event.request);
    }),
  );
});
