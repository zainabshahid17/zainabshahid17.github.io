'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "15c07f2755c79b7d6b82f0349c914386",
"assets/AssetManifest.bin.json": "29c92b6d50fed439fef8ef8cbd8f73d5",
"assets/AssetManifest.json": "546f167d6fa8f886cece7d9d671df45e",
"assets/assets/ABLDR_2.JPG": "5672f4aab00c8564bc7fbea618243e1e",
"assets/assets/ABLDR_2CIRCLE.png": "c9ef5e42cacf573469f2f6e353105759",
"assets/assets/ABLDR_2IND.JPG": "51f4ff57d1020098e339c0db52f81fc1",
"assets/assets/ABSAR_C.JPG": "e72a564d40b0e93dc7b84e4f9baa09b6",
"assets/assets/ABSAR_CIND.JPG": "8beea2da06d17c8bd8529b32e4c597df",
"assets/assets/ABSAR_D.JPG": "80e384dc2edbdf46a9baec42ac70f1c1",
"assets/assets/ABSAR_DIND.JPG": "276250ce1294d501ecf84f3cfe94de8d",
"assets/assets/ABTIQ_640.JPG": "37a6d5b0fc65f88d0fe4c23170c96731",
"assets/assets/ABTIQ_640IND.JPG": "b3933ec13e56921ead8579a69675d9de",
"assets/assets/ABTIQ_640_2.JPG": "277fb9ce162d10991ddc6641655e29c9",
"assets/assets/ABTIQ_640_2_IND.JPG": "617c418b8ffdad85acc4d27d859b4c55",
"assets/assets/ALHARIS_75.JPG": "f10df6dc23365f3d54d93dea463cdabd",
"assets/assets/ALHARIS_75IND.JPG": "238facf124aefef3908925e2e7db2687",
"assets/assets/ALHARIS_75IND_2.JPG": "5f6998137e1e87b462430a4f4143ad4b",
"assets/assets/ALHARIS_75_2.JPG": "27a727140564955f334e1022728a9491",
"assets/assets/ALHARIS_75_3.JPG": "66813612fdc2a74a1f7525c99faef369",
"assets/assets/AR_3.JPG": "61bdd734de2ba8ffd6f5f7fd30e41136",
"assets/assets/AR_3IND.JPG": "76389653dd8dd6959d7a5833a0b1214b",
"assets/assets/crystal-growth-modified.png": "c64e99d3834fc0157946563677b1f010",
"assets/assets/data.txt": "7787b5fbbb20173a9cce836536147c54",
"assets/assets/dielectric_mirrors-modified.png": "c2a3b4280247997b315c351ac68bd9ac",
"assets/assets/DSC00013.jpg": "9b58d440b700543f471cfcc3a9f40896",
"assets/assets/DSC00177.JPG": "69afc417d6c99a121e0c141f84382809",
"assets/assets/Environmental-testing-modified.png": "8c4425e440d8d8e9ed6d914131484916",
"assets/assets/FAOD.jpg": "5324b6ed8d0458ad5157938891074499",
"assets/assets/FAODIND.JPG": "2f25fb9ac96aa08196373da68194d122",
"assets/assets/FAODIND_2.JPG": "dc51ddd86afb3278e2bbb1084ee1db6e",
"assets/assets/FAOD_2.JPG": "b8297d12ac86c824e799ac35bca172eb",
"assets/assets/FAOD_3.JPG": "3eeeb16036b03e2528471e74f72c3061",
"assets/assets/FAOD_4.JPG": "ed0b20287b1e2cfb0eb22ecb8e7e6be1",
"assets/assets/Header-home.png": "fe8f43e30e69d9349294fe7ad049d087",
"assets/assets/images/about/deliver.png": "3a76b1d04ca25b9a7a495d08fd134f14",
"assets/assets/images/about/leos1.png": "79d437e5d1e40d22a60c32dd3931ed0e",
"assets/assets/images/about/leos3.png": "87f04b27295525b71180ed68c976dac9",
"assets/assets/images/customer_support/webinars/elec.jpg": "673076121a301cd160c20fe7ef16e967",
"assets/assets/images/customer_support/webinars/webinar.png": "16b780fdc5572d08961ac3f525b7a94f",
"assets/assets/images/homepage/photg.jpg": "78db083627d45b1143a29538737f6fbc",
"assets/assets/images/homepage/photo-1.jpg": "1196cdb9ca575a3ceda530b66314997e",
"assets/assets/images/homepage/photo-3a.jpg": "3bbd95a6a1ed3062cc3c68c6164efdce",
"assets/assets/images/LEOS-Original-Logo-1.png": "e5cbcd09cf6b0d626311f53a77ccca4d",
"assets/assets/images/news_events_media/independence_Day/indepday.jpg": "29b820b6fd0760cf866949ecd46b66cf",
"assets/assets/images/news_events_media/interns/abd-1.jpg": "c7cdad925c39371a7b9a06fb266929e7",
"assets/assets/images/news_events_media/workshop_1/wa-1.jpg": "1ab7e7f2811d770db7fd8d9e60582766",
"assets/assets/images/news_events_media/workshop_1/wa-2.jpg": "865f02fea071db0d4fbec42faec631e9",
"assets/assets/images/news_events_media/workshop_1/wa-3.jpg": "8fddba5aa97b0dbd300acb942b0c6464",
"assets/assets/images/news_events_media/workshop_1/wa-4.jpg": "c95d2021606ea48f1dbc47126fc9699d",
"assets/assets/images/news_events_media/workshop_1/wa-5.jpg": "eabaa76a83cdb01ac054273cb118182d",
"assets/assets/images/news_events_media/workshop_1/wa-6.jpg": "ba1c9faf8b10319da168278dc4b93164",
"assets/assets/images/news_events_media/workshop_1/wa-7.jpg": "83e9c5ccc7dfbb317787581cc6bd9507",
"assets/assets/images/news_events_media/workshop_1/wa-8.jpg": "597302f996213a8996daf9b58668dac6",
"assets/assets/images/news_events_media/workshop_1/wa-9.jpg": "fd441c4fa96267602b51ae2c08faa63d",
"assets/assets/lrf_banner.png": "f15ebbf1df350ab44eb1e42a69fc6076",
"assets/assets/mechanical-modified.png": "62e065c81b204a7bc26f3cbb5e01d29e",
"assets/assets/mechanical_home.png": "b70998edbad2a2382dbbb3fa8134dcaf",
"assets/assets/optical_component_circle.png": "a1c6683a8bf5aefe12c16213c63572a1",
"assets/assets/Products_banner.png": "70e8195f25131fc68015ac9c8e9ac74d",
"assets/assets/service.jpg": "ed562ee41826c3a15dbf7a242ac98910",
"assets/assets/services_banner.png": "c4706558f3c0e22dfa5a0d2dae551cb8",
"assets/assets/slideshow_lrf_home.png": "0ba4e25a51f408ebec5a51d158fbb15d",
"assets/assets/slideshow_surv_home.png": "24478e2f073b15e24cedfc0ae476ea69",
"assets/assets/slideshow_tank_home.png": "1de5180d77d3e434cc6edbc8cc5e2ac5",
"assets/assets/slideshow_weap_home.png": "9f46574d507131cb62562d9ff0ed10ae",
"assets/assets/Surface-mount-modified.png": "3f92ed28616cf30f2903cc55015237fe",
"assets/assets/surveillance-product.JPG": "e5e3d3182cf2f9ecf7c9824d7d2a5b26",
"assets/assets/surveillance_banner.png": "d5be7f1c32c29eca20077386b0ca489c",
"assets/assets/tank_apc_banner.png": "62da2a1a1289b4edc2c7baf9d1a683a3",
"assets/assets/TI786_3IND.JPG": "91983d926cad9fab3a2ed3d4de803ccf",
"assets/assets/TIB786_1.jpg": "ba3094578c7a91149bf0c47e00daf9e9",
"assets/assets/TIB786_1IND.JPG": "405c61732e83c211b65ff6f1d302920d",
"assets/assets/TIB786_3.jpg": "841e93c4e7775c7485cb1ec6ea5a05d4",
"assets/assets/TISA_506B.jpg": "87a3d5efca0aaebdbd4b319efa7e9cae",
"assets/assets/TISA_506BIND.JPG": "89b7fd4bcf2a35cf542ef43bc135f7b1",
"assets/assets/videos/internship/image.png": "69e6ea34bf05d0d644b71a7a3076e730",
"assets/assets/vision_home.jpg": "d940a294b7701c1bc62408e0f128a6d8",
"assets/assets/weapon_sights_banner.png": "ebcdb6ed37797f5fcab07dfc9c187a45",
"assets/assets/Wire-Harness-modified.png": "0145dc1bc260e5b5065169d62dce7aba",
"assets/FontManifest.json": "defb54322856d1a7e469c64cec6cac4b",
"assets/fonts/Lato/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/fonts/MaterialIcons-Regular.otf": "38ea64395f352e88fa0e3a10f6adab8e",
"assets/fonts/Montserrat.ttf": "e6cb49ef6502d09136c7302d56f4197b",
"assets/fonts/Playfair/PlayfairBold.ttf": "9b38798112efb7cf6eca1de031cec4ca",
"assets/fonts/Playfair/PlayfairRegular.ttf": "1a28efdbd2876d90e554a67faabad24b",
"assets/fonts/Playfair/PlayfairSemiBold.ttf": "54a87ef71bd558e23e1bdc47b4496bc1",
"assets/NOTICES": "7d8e83f741188de57d01fc0e5163e044",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "2043d925ba4dffcd5a63884a9ab6980a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b275eefe54ea86afa8fab4b784d6fff5",
"/": "b275eefe54ea86afa8fab4b784d6fff5",
"main.dart.js": "00573cc0fa11b45914958e874b1c0fbc",
"manifest.json": "bf24c84c3bf99672a631c4f84464e793",
"version.json": "15235b5108d6a877ef74fe3317a96bf7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
