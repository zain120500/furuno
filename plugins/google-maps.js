// plugins/google-maps.js
export default defineNuxtPlugin(() => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Ganti dengan API Key Anda
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  });
  