$(document).ready(function() {
    var ref = this;
    $('body').on('click', '#initSwipe', function() {
        chrome.runtime.sendMessage({action: "openTinder", toggle: true});
    });
});
