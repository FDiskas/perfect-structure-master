/* eslint-disable no-restricted-globals */
/* global self, workbox, precacheManifest */
importScripts('workbox-v3.4.1/workbox-sw.js');

self.addEventListener('message', ({ data }) => {
  if (data === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.workbox.setConfig({ debug: false });

self.workbox.precaching.precacheAndRoute([]);
