const cacheName = 'mzworthington-v2';
const precacheResources = [
  '/index.html',
  '/about/index.html',
  '/404.html',

  '/assets/404/where-are-you-guys.gif',

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

self.addEventListener('install', (event) => {
  console.info('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.info('Service worker activate event!');
});

self.addEventListener('fetch', (event) => {
  console.info('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});