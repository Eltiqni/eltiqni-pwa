
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker مسجل:', reg))
      .catch(err => console.error('فشل التسجيل:', err));
  });
}
