chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true } }, { urls: blockUrls }, ["blocking"]
)


blockUrls = [
    "*://*.googlesyndication.com/*",
    "*://*.adservice.google.co.in/*",
    "*://*.adservice.google.com/*",
    "*://*.adservice.google.com.ua/*",
    "*://*.googleusercontent.com/*",
    "*://*.feedburner.google.com/*",
    "*://*.googleads2.g.doubleclick.net/*",
    "*://*.googleads4.g.doubleclick.net/*",
    "*://*.googleadservices.com/*",
    "*://*.googleads.g.doubleclick.net/*",
    "*://*.google-analytics.com/*",
    "*://*.googleplaysetvices.com/*",
    "*://*.googletagmanager.com/*",
    "*://*.googletagservices.com/*",
    "*://*.google.unbounce.com/*"


]
