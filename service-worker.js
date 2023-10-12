
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Gebruik `workbox.routing.registerRoute()`... test

workbox-routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.NetworkFirst({
    cacheName:'CACHEKEY'
  });
