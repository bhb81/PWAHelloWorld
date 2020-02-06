const staticAssets = [
    './',
    './css/bootstrap4.min.css',
    './css/styles.css',
    './app.js'
];

self.addEventListener('install', async event => {
    const cache = await caches.open('static-PWAHelloWorld');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    //caching for offline viewing
    const {request} = event;
    const url = new URL(request.url);
    if(url.origin === location.origin) {
        event.respondWith(cacheData(request));
        var content = document.createTextNode("<br/>This text was added by the fetchHome function: Hello World!");
        theDiv.appendChild(content);
    } else {
        event.respondWith(networkFirst(request));
    }

});

async function cacheData(request) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || fetch(request);
}

async function networkFirst(request) {
    const cache = await caches.open('dynamic-PWAHelloWorld');

    try {
        const response = await fetch(request);
        cache.put(request, response.clone());
        return response;
    } catch (error){
        return await cache.match(request);

    }

}