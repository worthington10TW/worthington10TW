// TODO Break on build
const cacheName = 'mzworthington-v5';
const precacheResources = [
  '/',
  '/about/',
  '/404/',

  '/assets/site.webmanifest',
  '/assets/404/where-are-you-guys.gif',
  '/assets/offline/offline.webp',

  '/assets/android-chrome-192x192.png',
  '/assets/android-chrome-512x512.png',
  '/assets/apple-touch-icon.png',
  '/assets/background.webp',
  '/assets/favicon-16x16.png',
  '/assets/favicon-32x32.png',
  '/assets/me.webp',
  '/assets/social-icons.svg',

  '/assets/css/style.css'
];

self.addEventListener("install", (event) => {
    event.waitUntil(
      (async () => {
        const cache = await caches.open(cacheName);
        await cache.addAll(precacheResources);
        await cache.add(new Request("/offline", { cache: "reload" }));
      })()
    );
    // Force the waiting service worker to become the active service worker.
    self.skipWaiting();
  });

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
        const cache = await caches.open(cacheName);
        return await cache.addAll(precacheResources);
    }));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(

        (async () => {
            const cache = await caches.open(cacheName);
            const cachedResponse = await cache.match(event.request);
            if (cachedResponse) {
                return cachedResponse;
            }

            try {
                const networkResponse = await fetch(event.request);
                return networkResponse;
            } catch (error) {
                console.log("Fetch failed; returning offline page instead.", error); 
                const cachedResponse = await caches.match("offline");
                return cachedResponse;
            }
          })());
});
