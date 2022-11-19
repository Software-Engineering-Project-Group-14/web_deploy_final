'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-maskable-512.png": "7f15ca3cba0ba7f6980113aa541b5baa",
"icons/Icon-512.png": "7f15ca3cba0ba7f6980113aa541b5baa",
"icons/Icon-192.png": "4bd88787770838e59d8e4a150268632d",
"icons/Icon-maskable-192.png": "4bd88787770838e59d8e4a150268632d",
"assets/NOTICES": "1a61eb82c834b8d9d133196487d71746",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/timezone/data/latest_all.tzf": "016df80452fa51f0f61403cd259f2366",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.json": "424205f76d80db0cefe2368458d6446c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/meals/Low%2520carb.png": "85d56c1265a903aec94c6ea921d24396",
"assets/assets/images/meals/Energetic.png": "c6db79b8202d205ca8e6d6156aab4276",
"assets/assets/images/meals/Vegetarian.png": "5dbf22d8a91c71ed8b4eff9f7bdc14f7",
"assets/assets/images/diet_plan/Low%2520carb.png": "edd88220013793edbe884ed3d8531f52",
"assets/assets/images/diet_plan/Energetic.png": "35c657bba007d02af8b0076ba4909e23",
"assets/assets/images/diet_plan/Vegetarian.png": "25a652bdb350688ef3972f3eab74b3d3",
"assets/assets/images/dishes/Vegetarian/Dinner/Burnt%2520aubergine%2520veggie%2520chilli.png": "19fef94f4f7fa7cfb65f95cdf5367b4d",
"assets/assets/images/dishes/Vegetarian/Dinner/Roasted%2520Cauliflower%2520Pasta%2520with%2520Toasted%2520Walnuts,%2520Parsley,%2520Garlic%2520and%2520Lemon%2520Zest.png": "7ccc2b3b0e1593110471fd54221cd7ae",
"assets/assets/images/dishes/Vegetarian/Dinner/Golden%2520Cauliflower%2520Dal%2520with%2520Spinach,%2520Red%2520Lentils%2520and%2520Coconut.png": "eff1cc2dec6d83a870e4291180b4e99e",
"assets/assets/images/dishes/Vegetarian/Dinner/Sweet%2520potato%2520&%2520peanut%2520curry.png": "842291e3e9c35184079a9204ebb63e40",
"assets/assets/images/dishes/Vegetarian/Dinner/Indian%2520Fried%2520Rice.png": "abc404e758c99a3cacdc6e33e76d399d",
"assets/assets/images/dishes/Vegetarian/Dinner/Lentil%2520Dal%2520with%2520Spinach%2520Sauce.png": "7d3b626dd1d53302fe240cdb562016c5",
"assets/assets/images/dishes/Vegetarian/Lunch/Veggie-loaded%2520flatbread.png": "b000cdf00375d358f9f20d1ef7ae72f4",
"assets/assets/images/dishes/Vegetarian/Lunch/Sweet%2520potato%2520&%2520lentil%2520soup.png": "5dbf22d8a91c71ed8b4eff9f7bdc14f7",
"assets/assets/images/dishes/Vegetarian/Lunch/Chickpea%2520Spinach%2520Salad.png": "cbcfadfd2a900ec765403d1006742e29",
"assets/assets/images/dishes/Vegetarian/Lunch/Pineapple%2520fried%2520rice.png": "e793acda445df24d66405866bd3a2828",
"assets/assets/images/dishes/Vegetarian/Lunch/Lentil%2520Quinoa%2520Salad.png": "c9dd7b5e4c3c0a6187c1881bc89d8de5",
"assets/assets/images/dishes/Vegetarian/Lunch/Spicy%2520cauliflower%2520&%2520halloumi%2520rice.png": "2857e708499d8e98f070be0e272b5630",
"assets/assets/images/dishes/Vegetarian/Breakfast/Blueberry%2520Smoothie.png": "c428e9b3d70f2c3225cb0150c7af7ad0",
"assets/assets/images/dishes/Vegetarian/Breakfast/Cinnamon%2520Apples.png": "62f27af365e48e22c5c389e3e603373c",
"assets/assets/images/dishes/Vegetarian/Breakfast/Blueberry%2520Pancakes.png": "51e94289fe4fbfbd2eb9ac5f43d2c547",
"assets/assets/images/dishes/Vegetarian/Breakfast/Overnight%2520Oats.png": "a34199ea34827ad46aea9b1d16ddb311",
"assets/assets/images/dishes/Vegetarian/Breakfast/Easy%2520French%2520Toast.png": "74bed632583069df87da9b67449dc7c3",
"assets/assets/images/dishes/Vegetarian/Breakfast/Oatmeal%2520pancakes.png": "0bf4e6a919ecc1d03ae56641551caa75",
"assets/assets/images/dishes/Energetic/Dinner/broccoli%2520and%2520peanut%2520soba%2520noodles.png": "1b4f91665129c0df3761c4e3affbe5c1",
"assets/assets/images/dishes/Energetic/Dinner/Spiced%2520squash,%2520spinach%2520and%2520lentil%2520soup.png": "ff095db0ed401039e2e191783d9b5226",
"assets/assets/images/dishes/Energetic/Dinner/Berry%2520and%2520nut%2520butter%2520porridge.png": "f42cab9d2f9cfaf413381bd80af7fd73",
"assets/assets/images/dishes/Energetic/Dinner/sweet%2520potato%2520and%2520lentil%2520curry.png": "06a9beb7792ba538c8a549a393b24e43",
"assets/assets/images/dishes/Energetic/Dinner/Vibrant%2520curried%2520salmon%2520dish.png": "03787b3b88967b1a5557cb0fa1ac4f52",
"assets/assets/images/dishes/Energetic/Dinner/Hoisin-glazed%2520tofu%2520with%2520stir-fried%2520brown%2520rice.png": "2e4071250772b4cbd8c8c20b5259d125",
"assets/assets/images/dishes/Energetic/Lunch/Turkey%2520&%2520clementine%2520lunch%2520bowl.png": "f25a86b3e2ca35ce6dadeb99d37b298b",
"assets/assets/images/dishes/Energetic/Lunch/Tomato,%2520pepper%2520&%2520bean%2520one-pot.png": "c6db606dfe1c6ca00760dc92411a4f4a",
"assets/assets/images/dishes/Energetic/Lunch/Smoked%2520salmon,%2520quinoa%2520&%2520dill%2520lunch%2520pot.png": "417e49214dcee57e297fe55981bb4c77",
"assets/assets/images/dishes/Energetic/Lunch/Stir-fry%2520chilli%2520beef%2520with%2520sweet%2520potato%2520jackets.png": "6328ccdc5501e3b3fe4df8ef94cf0029",
"assets/assets/images/dishes/Energetic/Lunch/Broccoli%2520pasta%2520salad%2520with%2520eggs%2520&%2520sunflower%2520seeds.png": "e1f93a0095e306ef01dcccfd780ca3fe",
"assets/assets/images/dishes/Energetic/Breakfast/Breakfast%2520super-shake.png": "d2c4e0ba2fc06eb1247f4fe660cc4929",
"assets/assets/images/dishes/Energetic/Breakfast/Fruit%2520&%2520nut%2520breakfast%2520bowl.png": "ea1a835f3d6b410b50fd29896433beff",
"assets/assets/images/dishes/Energetic/Breakfast/Vanilla%2520&%2520cinnamon%2520breakfast%2520rice.png": "8fe5f246bddae9c21b1c8e3f362ba259",
"assets/assets/images/dishes/Energetic/Breakfast/Cinnamon%2520Apples.png": "dd80812ef7436ea64997bc0ab88661a8",
"assets/assets/images/dishes/Energetic/Breakfast/High%2520protein%2520breakfast.png": "c6db79b8202d205ca8e6d6156aab4276",
"assets/assets/images/dishes/Energetic/Breakfast/Chia%2520&%2520oat%2520breakfast%2520scones%2520with%2520yogurt%2520and%2520berries.png": "02d511db7688306333e93da9b4f57722",
"assets/assets/images/dishes/smoothie01.jpg": "2a55f0cb192c3fe37624bd1bbeee94ab",
"assets/assets/images/dishes/Low%2520carb/Dinner/Lentil%2520soup.png": "308946c3d6a68e7b3d3c890d79f59227",
"assets/assets/images/dishes/Low%2520carb/Dinner/Spiced%2520carrot%2520&%2520lentil%2520soup.png": "1b184f8b900d23b71fc1a9ff2271ae50",
"assets/assets/images/dishes/Low%2520carb/Dinner/Summer%2520fish%2520stew.png": "b04a9cf21c1e29a163f0abefd8171e69",
"assets/assets/images/dishes/Low%2520carb/Dinner/Grilled%2520napa%2520cabbage.png": "a7a14134352fa275e6b96b33dce1900b",
"assets/assets/images/dishes/Low%2520carb/Dinner/Chicken,%2520sweet%2520potato%2520&%2520coconut%2520curry.png": "a8f7fc3f70ab6d1f82bb5fe9d19fa30c",
"assets/assets/images/dishes/Low%2520carb/Dinner/Chicken%2520bake%2520with%2520garlic%2520croutons.png": "8d60fc5b058174085bdd7bdc4df3ed20",
"assets/assets/images/dishes/Low%2520carb/Dinner/Fragrant%2520carrot,%2520coconut%2520&%2520lentil%2520soup.png": "fe44c350fb91a0e7612a11292560efbf",
"assets/assets/images/dishes/Low%2520carb/Lunch/Tuna%2520Salad%2520with%2520Egg.png": "e7b80dc49b101cf342d4ffde9aeb010e",
"assets/assets/images/dishes/Low%2520carb/Lunch/Cauliflower%2520Broccoli%2520Ham%2520Salad.png": "037996ebc9657e86739f37bf4887ce9d",
"assets/assets/images/dishes/Low%2520carb/Lunch/Cajun%2520Shrimp%2520and%2520Sausage%2520Vegetable%2520Skillet.png": "80273836511b8b5755137898accc6c63",
"assets/assets/images/dishes/Low%2520carb/Lunch/Chopped%2520Power%2520Salad%2520with%2520Chicken.png": "38bb59a847f38d1dce38750b0d66f6c4",
"assets/assets/images/dishes/Low%2520carb/Lunch/Cucumber,%2520Tomato,%2520and%2520Avocado%2520Salad.png": "dd64f763f86e225499a2e82e70799a51",
"assets/assets/images/dishes/Low%2520carb/Lunch/Green%2520Goddess%2520Salad%2520with%2520Chicken.png": "ca3e62d74e9fbd0440e60821345fae70",
"assets/assets/images/dishes/Low%2520carb/Lunch/Loaded%2520Broccoli%2520Salad.png": "407ba05d3ac9ec0f87b23c03fa5d7e5c",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Mushroom%2520omelet.png": "d0b33c47e6845549c6c076b6ec563650",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Low%2520carb%2520ricotta%2520and%2520lemon%2520pancakes.png": "85d56c1265a903aec94c6ea921d24396",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Fried%2520Eggs%2520and%2520Veggies.png": "7b6aba0402d013b7ce7fdd0bb89d791b",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Crispy%2520egg-free%2520low%2520carb%2520almond%2520pancakes.png": "40e7af8cae10a0b12a99bad02cd04627",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Scrambled%2520Eggs.png": "a266a352d9796c52df4a611d4e61895c",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Egg%2520butter%2520with%2520smoked%2520salmon%2520and%2520avocado.png": "0cbe95719485552abb85dc37d96b10db",
"assets/assets/images/dishes/Low%2520carb/Breakfast/Avocado%2520Eggs%2520with%2520Bacon%2520Sails.png": "01e7d5b9a991505d7474d3a66563752a",
"assets/assets/images/wallpapers/wallpaper-03.jpg": "2320eb577adff8a28ee7d76b8578a97e",
"assets/assets/images/wallpapers/wallpaper-01.jpg": "7739117d3f9bb52e1d0fd1cf840cde49",
"assets/assets/images/wallpapers/wallpaper-02.jpg": "fff04effedbe38658343278ddfe8dd2f",
"assets/assets/images/dashboard/rate.png": "12ff7440b02aaa87a8ffc7aeff09d30a",
"assets/assets/images/dashboard/record-progress.png": "6926d9675051662268d6cde1ec274ec0",
"assets/assets/images/dashboard/BMI.png": "6fd35607ad6c7ef30f7182603059bf5f",
"assets/assets/images/dashboard/update-profile.png": "974366a67f102a2bd24eccfd19ad6441",
"assets/assets/images/dashboard/dash1.png": "d76d91b1214048eec568820b552fc1fa",
"assets/assets/images/dashboard/change-diet.png": "9e25f92e8820d26f497eb77bc9c206ae",
"assets/assets/images/dashboard/view-diet.png": "51cc20ed0f02444b2d23c388009ced05",
"assets/assets/images/user%2520details/user.png": "9da85e847e7de81a3859d2dbc8d92a57",
"assets/assets/images/user%2520details/join-us.png": "bdb9c71f572ba9b0458faf0639cfbae0",
"version.json": "72822911f1a3bdbf2b7f77ad973e59c5",
"manifest.json": "a43fae4b7720bf006698b36cb6557f5c",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"main.dart.js": "57c2a3228d64a1148dd59c9e288c8634",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"index.html": "f78337a98bfeee5662ded52dba9fecae",
"/": "f78337a98bfeee5662ded52dba9fecae",
"favicon.png": "d47dc148abe8ea707549d9c6eefcc1bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
