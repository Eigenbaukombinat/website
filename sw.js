const CACHE_VERSION = 1;

const BASE_CACHE_FILES = [
'/css/katex.min.css',
'/css/mermaid.dark.css',
'/css/bootstrap.min.css',
'/css/syntax.css',
'/css/preloader.gif',
'/css/mermaid.css',
'/css/default-skin.png',
'/css/codeblock.css',
'/css/photoswipe.default-skin.min.css',
'/css/photoswipe.min.css',
'/css/main.css',
'/css/staticman.css',
'/css/fonts/KaTeX_SansSerif-Bold.ttf',
'/css/fonts/KaTeX_SansSerif-Italic.ttf',
'/css/fonts/KaTeX_Size1-Regular.ttf',
'/css/fonts/KaTeX_Math-Italic.ttf',
'/css/fonts/KaTeX_Main-Regular.ttf',
'/css/fonts/KaTeX_Size4-Regular.woff2',
'/css/fonts/KaTeX_Caligraphic-Regular.woff2',
'/css/fonts/KaTeX_Main-Italic.ttf',
'/css/fonts/KaTeX_Caligraphic-Bold.woff',
'/css/fonts/KaTeX_Main-Italic.woff',
'/css/fonts/KaTeX_SansSerif-Italic.woff2',
'/css/fonts/KaTeX_Caligraphic-Bold.ttf',
'/css/fonts/KaTeX_Main-Regular.woff2',
'/css/fonts/KaTeX_Script-Regular.ttf',
'/css/fonts/KaTeX_Main-BoldItalic.ttf',
'/css/fonts/KaTeX_Main-BoldItalic.woff2',
'/css/fonts/KaTeX_Math-BoldItalic.woff2',
'/css/fonts/KaTeX_Fraktur-Bold.woff2',
'/css/fonts/KaTeX_Fraktur-Regular.ttf',
'/css/fonts/KaTeX_Math-Italic.woff',
'/css/fonts/KaTeX_Size3-Regular.ttf',
'/css/fonts/KaTeX_Fraktur-Regular.woff2',
'/css/fonts/KaTeX_Size4-Regular.woff',
'/css/fonts/KaTeX_Math-BoldItalic.ttf',
'/css/fonts/KaTeX_Fraktur-Bold.ttf',
'/css/fonts/KaTeX_Size1-Regular.woff',
'/css/fonts/KaTeX_Main-Bold.ttf',
'/css/fonts/KaTeX_Main-Italic.woff2',
'/css/fonts/KaTeX_Main-Bold.woff2',
'/css/fonts/KaTeX_Size3-Regular.woff2',
'/css/fonts/KaTeX_Typewriter-Regular.woff',
'/css/fonts/KaTeX_Fraktur-Regular.woff',
'/css/fonts/KaTeX_Caligraphic-Regular.woff',
'/css/fonts/KaTeX_Math-BoldItalic.woff',
'/css/fonts/KaTeX_Size2-Regular.woff2',
'/css/fonts/KaTeX_Main-BoldItalic.woff',
'/css/fonts/KaTeX_Script-Regular.woff',
'/css/fonts/KaTeX_SansSerif-Italic.woff',
'/css/fonts/KaTeX_Script-Regular.woff2',
'/css/fonts/KaTeX_SansSerif-Regular.ttf',
'/css/fonts/KaTeX_Main-Regular.woff',
'/css/fonts/KaTeX_Size3-Regular.woff',
'/css/fonts/KaTeX_AMS-Regular.woff',
'/css/fonts/KaTeX_AMS-Regular.ttf',
'/css/fonts/KaTeX_Size1-Regular.woff2',
'/css/fonts/KaTeX_Caligraphic-Bold.woff2',
'/css/fonts/KaTeX_Size4-Regular.ttf',
'/css/fonts/KaTeX_SansSerif-Regular.woff2',
'/css/fonts/KaTeX_AMS-Regular.woff2',
'/css/fonts/KaTeX_Fraktur-Bold.woff',
'/css/fonts/KaTeX_SansSerif-Bold.woff2',
'/css/fonts/KaTeX_SansSerif-Regular.woff',
'/css/fonts/KaTeX_Typewriter-Regular.woff2',
'/css/fonts/KaTeX_Math-Italic.woff2',
'/css/fonts/KaTeX_Typewriter-Regular.ttf',
'/css/fonts/KaTeX_Main-Bold.woff',
'/css/fonts/KaTeX_Caligraphic-Regular.ttf',
'/css/fonts/KaTeX_Size2-Regular.woff',
'/css/fonts/KaTeX_SansSerif-Bold.woff',
'/css/fonts/KaTeX_Size2-Regular.ttf',
'/css/hugo-easy-gallery.css',
'/css/main-minimal.css',
'/css/highlight.min.css',
'/css/fonts.css',
'/img/triangle-thumb.jpg',
'/img/hexagon.jpg',
'/img/slider-11.jpg',
'/img/slider-8.jpg',
'/img/path.jpg',
'/img/triangle.jpg',
'/img/slider-4.jpg',
'/img/slider-5.jpg',
'/img/slider-7.jpg',
'/img/avatar-favicon.png',
'/img/favicon.ico',
'/img/sphere.jpg',
'/img/slider-9.jpg',
'/img/favicon.ico.zip',
'/img/slider-3.jpg',
'/img/sphere-thumb.jpg',
'/img/hexagon-thumb.jpg',
'/img/slider-1.jpg',
'/img/avatar-icon.png',
'/img/slider-10.jpg',
'/img/slider-2.jpg',
'/img/slider-6.jpg',
'/js/highlight.min.js',
'/js/lunr.js',
'/js/photoswipe.min.js',
'/js/recaptcha.js',
'/js/katex.min.js',
'/js/photoswipe-ui-default.min.js',
'/js/main.js',
'/js/staticman.js',
'/js/mermaid.js',
'/js/load-photoswipe.js',
'/js/auto-render.min.js',
'/js/jquery.min.js',
'/js/bootstrap.min.js',
'/search.json',
'/offline.html',
'/manifest.json',
'/index.html',
];

const OFFLINE_CACHE_FILES = [
'/css/katex.min.css',
'/css/mermaid.dark.css',
'/css/bootstrap.min.css',
'/css/syntax.css',
'/css/preloader.gif',
'/css/mermaid.css',
'/css/default-skin.png',
'/css/codeblock.css',
'/css/photoswipe.default-skin.min.css',
'/css/photoswipe.min.css',
'/css/main.css',
'/css/staticman.css',
'/css/fonts/KaTeX_SansSerif-Bold.ttf',
'/css/fonts/KaTeX_SansSerif-Italic.ttf',
'/css/fonts/KaTeX_Size1-Regular.ttf',
'/css/fonts/KaTeX_Math-Italic.ttf',
'/css/fonts/KaTeX_Main-Regular.ttf',
'/css/fonts/KaTeX_Size4-Regular.woff2',
'/css/fonts/KaTeX_Caligraphic-Regular.woff2',
'/css/fonts/KaTeX_Main-Italic.ttf',
'/css/fonts/KaTeX_Caligraphic-Bold.woff',
'/css/fonts/KaTeX_Main-Italic.woff',
'/css/fonts/KaTeX_SansSerif-Italic.woff2',
'/css/fonts/KaTeX_Caligraphic-Bold.ttf',
'/css/fonts/KaTeX_Main-Regular.woff2',
'/css/fonts/KaTeX_Script-Regular.ttf',
'/css/fonts/KaTeX_Main-BoldItalic.ttf',
'/css/fonts/KaTeX_Main-BoldItalic.woff2',
'/css/fonts/KaTeX_Math-BoldItalic.woff2',
'/css/fonts/KaTeX_Fraktur-Bold.woff2',
'/css/fonts/KaTeX_Fraktur-Regular.ttf',
'/css/fonts/KaTeX_Math-Italic.woff',
'/css/fonts/KaTeX_Size3-Regular.ttf',
'/css/fonts/KaTeX_Fraktur-Regular.woff2',
'/css/fonts/KaTeX_Size4-Regular.woff',
'/css/fonts/KaTeX_Math-BoldItalic.ttf',
'/css/fonts/KaTeX_Fraktur-Bold.ttf',
'/css/fonts/KaTeX_Size1-Regular.woff',
'/css/fonts/KaTeX_Main-Bold.ttf',
'/css/fonts/KaTeX_Main-Italic.woff2',
'/css/fonts/KaTeX_Main-Bold.woff2',
'/css/fonts/KaTeX_Size3-Regular.woff2',
'/css/fonts/KaTeX_Typewriter-Regular.woff',
'/css/fonts/KaTeX_Fraktur-Regular.woff',
'/css/fonts/KaTeX_Caligraphic-Regular.woff',
'/css/fonts/KaTeX_Math-BoldItalic.woff',
'/css/fonts/KaTeX_Size2-Regular.woff2',
'/css/fonts/KaTeX_Main-BoldItalic.woff',
'/css/fonts/KaTeX_Script-Regular.woff',
'/css/fonts/KaTeX_SansSerif-Italic.woff',
'/css/fonts/KaTeX_Script-Regular.woff2',
'/css/fonts/KaTeX_SansSerif-Regular.ttf',
'/css/fonts/KaTeX_Main-Regular.woff',
'/css/fonts/KaTeX_Size3-Regular.woff',
'/css/fonts/KaTeX_AMS-Regular.woff',
'/css/fonts/KaTeX_AMS-Regular.ttf',
'/css/fonts/KaTeX_Size1-Regular.woff2',
'/css/fonts/KaTeX_Caligraphic-Bold.woff2',
'/css/fonts/KaTeX_Size4-Regular.ttf',
'/css/fonts/KaTeX_SansSerif-Regular.woff2',
'/css/fonts/KaTeX_AMS-Regular.woff2',
'/css/fonts/KaTeX_Fraktur-Bold.woff',
'/css/fonts/KaTeX_SansSerif-Bold.woff2',
'/css/fonts/KaTeX_SansSerif-Regular.woff',
'/css/fonts/KaTeX_Typewriter-Regular.woff2',
'/css/fonts/KaTeX_Math-Italic.woff2',
'/css/fonts/KaTeX_Typewriter-Regular.ttf',
'/css/fonts/KaTeX_Main-Bold.woff',
'/css/fonts/KaTeX_Caligraphic-Regular.ttf',
'/css/fonts/KaTeX_Size2-Regular.woff',
'/css/fonts/KaTeX_SansSerif-Bold.woff',
'/css/fonts/KaTeX_Size2-Regular.ttf',
'/css/hugo-easy-gallery.css',
'/css/main-minimal.css',
'/css/highlight.min.css',
'/css/fonts.css',
'/img/triangle-thumb.jpg',
'/img/hexagon.jpg',
'/img/slider-11.jpg',
'/img/slider-8.jpg',
'/img/path.jpg',
'/img/triangle.jpg',
'/img/slider-4.jpg',
'/img/slider-5.jpg',
'/img/slider-7.jpg',
'/img/avatar-favicon.png',
'/img/favicon.ico',
'/img/sphere.jpg',
'/img/slider-9.jpg',
'/img/favicon.ico.zip',
'/img/slider-3.jpg',
'/img/sphere-thumb.jpg',
'/img/hexagon-thumb.jpg',
'/img/slider-1.jpg',
'/img/avatar-icon.png',
'/img/slider-10.jpg',
'/img/slider-2.jpg',
'/img/slider-6.jpg',
'/js/highlight.min.js',
'/js/lunr.js',
'/js/photoswipe.min.js',
'/js/recaptcha.js',
'/js/katex.min.js',
'/js/photoswipe-ui-default.min.js',
'/js/main.js',
'/js/staticman.js',
'/js/mermaid.js',
'/js/load-photoswipe.js',
'/js/auto-render.min.js',
'/js/jquery.min.js',
'/js/bootstrap.min.js',
'/offline.html',
'/search.json',
'/manifest.json',
'/index.html',
];

const NOT_FOUND_CACHE_FILES = [
    '/404.html',
];

const OFFLINE_PAGE = '/index.html';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};

// Define MAX_TTL's in SECONDS for specific file extensions
const MAX_TTL = {
    './': 3600,
    html: 3600,
    json: 3600,
    js: 86400,
    css: 86400,
    png: 86400,
    gif: 86400,
    woff:  86400,
    woff2: 86400,
    ttf: 86400,
};

const CACHE_BLACKLIST = [
    (str) => {
        return !str.startsWith('http://localhost') && !str.startsWith('https://gohugohq.com');
    },
];

const SUPPORTED_METHODS = [
    'GET',
];

/**
 * isBlackListed
 * @param {string} url
 * @returns {boolean}
 */
function isBlacklisted(url) {
    return (CACHE_BLACKLIST.length > 0) ? !CACHE_BLACKLIST.filter((rule) => {
        if(typeof rule === 'function') {
            return !rule(url);
        } else {
            return false;
        }
    }).length : false
}

/**
 * getFileExtension
 * @param {string} url
 * @returns {string}
 */
function getFileExtension(url) {
    let extension = url.split('.').reverse()[0].split('?')[0];
    return (extension.endsWith('/')) ? '/' : extension;
}

/**
 * getTTL
 * @param {string} url
 */
function getTTL(url) {
    if (typeof url === 'string') {
        let extension = getFileExtension(url);
        if (typeof MAX_TTL[extension] === 'number') {
            return MAX_TTL[extension];
        } else {
            return null;
        }
    } else {
        return null;
    }
}

/**
 * installServiceWorker
 * @returns {Promise}
 */
function installServiceWorker() {
    return Promise.all(
        [
            caches.open(CACHE_VERSIONS.assets)
                .then(
                    (cache) => {
                        return cache.addAll(BASE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.offline)
                .then(
                    (cache) => {
                        return cache.addAll(OFFLINE_CACHE_FILES);
                    }
                ),
            caches.open(CACHE_VERSIONS.notFound)
                .then(
                    (cache) => {
                        return cache.addAll(NOT_FOUND_CACHE_FILES);
                    }
                )
        ]
    )
        .then(() => {
            return self.skipWaiting();
        });
}

/**
 * cleanupLegacyCache
 * @returns {Promise}
 */
function cleanupLegacyCache() {

    let currentCaches = Object.keys(CACHE_VERSIONS)
        .map(
            (key) => {
                return CACHE_VERSIONS[key];
            }
        );

    return new Promise(
        (resolve, reject) => {

            caches.keys()
                .then(
                    (keys) => {
                        return legacyKeys = keys.filter(
                            (key) => {
                                return !~currentCaches.indexOf(key);
                            }
                        );
                    }
                )
                .then(
                    (legacy) => {
                        if (legacy.length) {
                            Promise.all(
                                legacy.map(
                                    (legacyKey) => {
                                        return caches.delete(legacyKey)
                                    }
                                )
                            )
                                .then(
                                    () => {
                                        resolve()
                                    }
                                )
                                .catch(
                                    (err) => {
                                        reject(err);
                                    }
                                );
                        } else {
                            resolve();
                        }
                    }
                )
                .catch(
                    () => {
                        reject();
                    }
                );

        }
    );
}

function precacheUrl(url) {
    if(!isBlacklisted(url)) {
        caches.open(CACHE_VERSIONS.content)
            .then((cache) => {
                cache.match(url)
                    .then((response) => {
                        if(!response) {
                            return fetch(url)
                        } else {
                            // already in cache, nothing to do.
                            return null
                        }
                    })
                    .then((response) => {
                        if(response) {
                            return cache.put(url, response.clone());
                        } else {
                            return null;
                        }
                    });
            })
    }
}



self.addEventListener(
    'install', event => {
        event.waitUntil(
            Promise.all([
                installServiceWorker(),
                self.skipWaiting(),
            ])
        );
    }
);

// The activate handler takes care of cleaning up old caches.
self.addEventListener(
    'activate', event => {
        event.waitUntil(
            Promise.all(
                [
                    cleanupLegacyCache(),
                    self.clients.claim(),
                    self.skipWaiting(),
                ]
            )
                .catch(
                    (err) => {
                        event.skipWaiting();
                    }
                )
        );
    }
);

self.addEventListener(
    'fetch', event => {

        event.respondWith(
            caches.open(CACHE_VERSIONS.content)
                .then(
                    (cache) => {

                        return cache.match(event.request)
                            .then(
                                (response) => {

                                    if (response) {

                                        let headers = response.headers.entries();
                                        let date = null;

                                        for (let pair of headers) {
                                            if (pair[0] === 'date') {
                                                date = new Date(pair[1]);
                                            }
                                        }

                                        if (date) {
                                            let age = parseInt((new Date().getTime() - date.getTime()) / 1000);
                                            let ttl = getTTL(event.request.url);

                                            if (ttl && age > ttl) {

                                                return new Promise(
                                                    (resolve) => {

                                                        return fetch(event.request.clone())
                                                            .then(
                                                                (updatedResponse) => {
                                                                    if (updatedResponse) {
                                                                        cache.put(event.request, updatedResponse.clone());
                                                                        resolve(updatedResponse);
                                                                    } else {
                                                                        resolve(response)
                                                                    }
                                                                }
                                                            )
                                                            .catch(
                                                                () => {
                                                                    resolve(response);
                                                                }
                                                            );

                                                    }
                                                )
                                                    .catch(
                                                        (err) => {
                                                            return response;
                                                        }
                                                    );
                                            } else {
                                                return response;
                                            }

                                        } else {
                                            return response;
                                        }

                                    } else {
                                        return null;
                                    }
                                }
                            )
                            .then(
                                (response) => {
                                    if (response) {
                                        return response;
                                    } else {
                                        return fetch(event.request.clone())
                                            .then(
                                                (response) => {

                                                    if(response.status < 400) {
                                                        if (~SUPPORTED_METHODS.indexOf(event.request.method) && !isBlacklisted(event.request.url)) {
                                                            cache.put(event.request, response.clone());
                                                        }
                                                        return response;
                                                    } else {
                                                        return caches.open(CACHE_VERSIONS.notFound).then((cache) => {
                                                            return cache.match(NOT_FOUND_PAGE);
                                                        })
                                                    }
                                                }
                                            )
                                            .then((response) => {
                                                if(response) {
                                                    return response;
                                                }
                                            })
                                            .catch(
                                                () => {

                                                    return caches.open(CACHE_VERSIONS.offline)
                                                        .then(
                                                            (offlineCache) => {
                                                                return offlineCache.match(OFFLINE_PAGE)
                                                            }
                                                        )

                                                }
                                            );
                                    }
                                }
                            )
                            .catch(
                                (error) => {
                                    console.error('  Error in fetch handler:', error);
                                    throw error;
                                }
                            );
                    }
                )
        );

    }
);


self.addEventListener('message', (event) => {

    if(
        typeof event.data === 'object' &&
        typeof event.data.action === 'string'
    ) {
        switch(event.data.action) {
            case 'cache' :
                precacheUrl(event.data.url);
                break;
            default :
                console.log('Unknown action: ' + event.data.action);
                break;
        }
    }

});
