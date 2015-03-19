chrome.storage.sync.get({
    faviconEnabled: true
}, function(items) {
    if (items.faviconEnabled) {
        var favicon = document.createElement("link");
        favicon.rel = "icon";
        favicon.type = "image/png";
        favicon.href = "https://raw.githubusercontent.com/ajcord/chara-enhancement-suite/master/favicon.png";
        document.childNodes[1].appendChild(favicon);
        document.title = document.title.replace("---", " - ");
    }
});
