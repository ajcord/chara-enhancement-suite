function handleResponse(messageEvent) {
    if (messageEvent.name == "settings_response") {
        if (messageEvent.message["faviconEnabled"] == true) {
            var favicon = document.createElement("link");
            favicon.rel = "icon";
            favicon.type = "image/png";
            favicon.href = safari.extension.baseURI + "favicon.png";
            document.childNodes[1].appendChild(favicon);
            document.title = document.title.replace("---", " - ");
        }
    }
}

safari.self.addEventListener("message", handleResponse, false);
safari.self.tab.dispatchMessage("settings_query", ["faviconEnabled"]);

