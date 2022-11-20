'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "d1a4998ab5797bc8fab252a95056d706",
"version.json": "9692e6a2dac4ad01af0fd4a3db0756bd",
"assets/environments/dev.env": "ea7a33286c38ecd6ec65d37a15caaefc",
"assets/environments/prod.env": "bd8e391f5dde29d1257db60bc3536d52",
"assets/environments/stg.env": "ea7a33286c38ecd6ec65d37a15caaefc",
"assets/assets/images/bdapp_logo.png": "528d65bf7a1e4a0de8a7bb03b56a5ba1",
"assets/assets/images/zzzleep.png": "731d29f9049b6d54ac09d8ada4f34b8b",
"assets/assets/images/pricalice.png": "f4d5c3685e121a938d1a1cd4e201b77c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "a615d3c27d0aa467342dea27401089f8",
"assets/AssetManifest.json": "818634520d07db3a2f0127e2b817063f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "011db9d3d4dcfcce2eb8947cb69e8e2c",
"favicon.png": "528d65bf7a1e4a0de8a7bb03b56a5ba1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2000f3abf7e1327c3ee73d77b2f678fb",
"/": "2000f3abf7e1327c3ee73d77b2f678fb",
"manifest.json": "fc5d443fd684bfffa40c4ffcd6b53f88",
"splash/img/light-1x.png": "aab6cb46671bd11ee6b7044ba250244d",
"splash/img/light-2x.png": "cc3be73e199ae8e61bc09f2bd81c6b29",
"splash/img/light-3x.png": "c64f50a2f498e17d2891b1209ccdc6ac",
"splash/img/light-4x.png": "0206fc41de2a4dc180525aac5fa0f306",
"splash/img/dark-1x.png": "aab6cb46671bd11ee6b7044ba250244d",
"splash/img/dark-2x.png": "cc3be73e199ae8e61bc09f2bd81c6b29",
"splash/img/dark-3x.png": "c64f50a2f498e17d2891b1209ccdc6ac",
"splash/img/dark-4x.png": "0206fc41de2a4dc180525aac5fa0f306",
"splash/style.css": "b95bbab0f5ad2bbf89c83b71a5eab36a",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "eaac805f73cc6e41e33cda25f56d0fdc",
".git/refs/remotes/origin/main": "eaac805f73cc6e41e33cda25f56d0fdc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/d5/bfe4505953e4e158343cb1c4f77f368f8f0774": "e789f1f6cf015ab90e04a1c37c71a138",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/59/beccc61f7c906989916f96978a96ce488ca33c": "d337cdfd770719a619230f94ef584dec",
".git/objects/59/0bef72da0b69ee605c587879eed2f0f139e5c5": "d30333723ed055bae36b8162c93dd097",
".git/objects/c7/e461d34ebe6c8d036c117a0907e84b7bdb429b": "8a323dd7f49ef7ad604580865234274b",
".git/objects/1e/ecf17e544c6c198ea89fcd9fb0068fe19989ac": "09f121d626ae05b637d0f0f787774785",
".git/objects/c6/cef599f106a7a650b55482bdf57e474f173c11": "62f1ba3f66d8a1e962063fcc77f7dd24",
".git/objects/47/3c5a4f49c4e30c67b7b8941e376411db01769a": "be8ed869d573582df7a119683cc2f748",
".git/objects/c3/19241c91e4422953fd0d3bcd8c4b43f2f729e7": "977a38fdf6b7e568b8cfc66c8d29d3c6",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/dd/2535bd119912bcc49eb7720de3fdd40fd234f4": "f31f51f9793a28cbb28a469fffb08074",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/8193f6238a5b905c7700d855c5936eb9ec29d3": "796adb8e827ffb9cba4353a29df2d1ab",
".git/objects/69/19964b301c091a1495d60a320968b558d6962a": "aa1ff5c8db15c18994d7b33354815a16",
".git/objects/e3/aad6315aca579db8838cfeab38503364e73bb4": "682cf8935a48d74dc4d7078f6965a76b",
".git/objects/13/66a9515a55bf57bf1de87dccda35fbe583c6ef": "2c162f0b1fdb3896e3c704a60c4d4304",
".git/objects/57/0db7238f2fe972227bb8fabe330231894e09ca": "a01be7687f810120a27f14df1da3d5f7",
".git/objects/cf/0d94e5933374cfe837b8fe3892f85e38f73b75": "9a66acbdf4f29499ecc5d7192d673a3c",
".git/objects/ad/c6bcee5e3e60890920bab89e13c741cbb78a13": "859eb889a8e01807b352eebac1ab7adc",
".git/objects/76/866605d0ad860eebc0cbcdcc9eac8cd11bd0a1": "57d1153873c2c6409c22681e281c2bc0",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/f8/de2c5379444cf744f7425eb4bf1c3a264f0fc3": "71918f6a24d24b5c2c508cf58c26fccb",
".git/objects/d4/1af937b78918839d9a8a31cd00c359fea6679e": "06a7d5b8ca1891e7465ab86cde91fe8d",
".git/objects/45/296685e55e25571c2ba48ef88704fc0d1052ca": "5c7992c2bcae99f21dd8fb4024f91128",
".git/objects/2f/12ffa46934f0926dbfe277ffa7555212caa5e4": "0a72147bf8f860d742b635ee72ed4218",
".git/objects/f9/2a83a41d04f21b5f0412c59c458a949f34ff46": "8570f029007cb52387b74d9fc0c486ac",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/22/da3a0067df3267b3402308dc0dc6776daee1df": "4baf8d6a33283689f6b31a12fe1e4734",
".git/objects/9c/e2852f6e2e4792a0f1f7b5d6e8726cc2dd3e8e": "04c8575d5a2a3d51d0963510488ece75",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/08/d9d7058ed847c0f3a798ea3b5293dc6932d81b": "5b9eae7159f3fb981e74291c448d1073",
".git/objects/43/2b09d41dc651719e9433e341ecb04cfe08f273": "de977c1fbf9ea7ed98c2354ff0e96c3f",
".git/objects/28/2e2c4538bae70519fab99cdf0e7a9bfa25942a": "0d931a8981682ed1f4f36b8459b0217f",
".git/config": "b567fc58cd8c4142343e896dabde72cc",
".git/index": "0e59353b7aaa6c9c8971eb534f75086e",
".git/COMMIT_EDITMSG": "e9064e5ad9f240eccb18aa886a4d7e2b",
".git/logs/HEAD": "3263501a30bbd6d033773a13d35d0be4",
".git/logs/refs/heads/main": "9bd17f1a95416883f93f612ba5698a3f",
".git/logs/refs/remotes/origin/main": "b45156891aefcd621d328727e59ea9d9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
