if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/25Q3U8xjWgJb9Rulwir-i/_buildManifest.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/25Q3U8xjWgJb9Rulwir-i/_middlewareManifest.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/25Q3U8xjWgJb9Rulwir-i/_ssgManifest.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/273-8dc305e2db9a2f25.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/559-63cc1af29de08d2d.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/585-ee09987a18ebcd73.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/666-ef607f4cd41549ba.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/697-1dcca4c1845d75ee.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/69b2bcf5-9a7661ad4acb5e72.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/851-2058a1224d26d955.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/880-b77ae5829eb05996.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/ae51ba48-efe26e7cd0915dd0.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/d64684d8-feb19f9bb075e149.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/main-4a53e460e4aa18b4.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/_app-72a33786af387d17.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/history-b689827fce4fded8.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/index-1a96338c90858ffb.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/privacy-d3c7fdd8c883e38e.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/rank-788de1174eef13a7.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/setting-75e9568cfae16453.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/pages/terms-1aea11d207ebb1f0.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/_next/static/chunks/webpack-378e68e29c265886.js",revision:"25Q3U8xjWgJb9Rulwir-i"},{url:"/favicon.ico",revision:"30d3c5d305c6ba1dca113165042d0541"},{url:"/manifest.json",revision:"a12f0eab9a0b6e92198417522517ff20"},{url:"/static/icons/android-chrome-192x192.png",revision:"a3a72ff9a310897740b4356c7ab45c86"},{url:"/static/icons/android-chrome-384x384.png",revision:"858e460b9fa2e60a05382c2f7cc87483"},{url:"/static/icons/apple-touch-icon-152x152.png",revision:"38dab76adf099b878ac9a6b2af5ea630"},{url:"/static/icons/apple-touch-icon-180x180.png",revision:"8a7d03abfb19c7e0f164f7faa325a194"},{url:"/static/icons/apple-touch-icon.png",revision:"8a7d03abfb19c7e0f164f7faa325a194"},{url:"/static/icons/icon-512x512.png",revision:"cba36f4016779356f438d8b3685aa1d9"},{url:"/static/images/apple-splash-1125-2436.jpg",revision:"9a672977f32729816a93722d277c0a45"},{url:"/static/images/apple-splash-1242-2208.jpg",revision:"db1a237cd6c668ff8dcb092cc81cecea"},{url:"/static/images/apple-splash-1536-2048.jpg",revision:"6a9394fc0e90eec34c6b608dfe5cb551"},{url:"/static/images/apple-splash-1668-2224.jpg",revision:"9c7484c0c87409f0619a8350981e9653"},{url:"/static/images/apple-splash-2048-2732.jpg",revision:"d146f4250b3107749105cb238de34599"},{url:"/static/images/apple-splash-640-1136.jpg",revision:"37be9482db749ea40681e7ffb898a4db"},{url:"/static/images/apple-splash-750-1334.jpg",revision:"1810442f0d2d31d8a5f2184a8fdf6331"},{url:"/static/images/ogp.jpg",revision:"a29dc8e3a96b98f03bfd44ca5708fa4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
