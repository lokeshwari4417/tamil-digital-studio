export function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol === 'https:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Tamil Studio PWA ServiceWorker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.log('Tamil Studio PWA ServiceWorker registration failed:', error);
        });
    });
  }
}
