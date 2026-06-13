self.addEventListener('install', () => {
  console.log('ADHEPLAST PWA instalada');
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
