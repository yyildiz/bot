var info;
var tinderUrl = "https://tinder.com/";
var alltabs;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

    if (request.action == "openTinder") {
        chrome.tabs.getAllInWindow(undefined, function(tabs) {
            alltabs = tabs;
            for (var i = 0, tab; tab = tabs[i]; i++) {
                if (tab.url && isTinderUrl(tab.url)) {
                    chrome.tabs.update(tab.id, {
                        selected: true
                    });
                    return;
                }
            }
            chrome.tabs.create({
                url: tinderUrl
            });
        });
        info = request;
    }
    if (request.action == "getInformation") {
        sendResponse({
            info: info,
            alltabs: alltabs
        })
    }
});

function isTinderUrl(url) {
    console.log(url)
    return url == tinderUrl;
}
