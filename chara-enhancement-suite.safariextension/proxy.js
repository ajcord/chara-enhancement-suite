/**
 * Mediates between the content scripts and the extension API.
 */

function handleMessage(messageEvent) {
    if (messageEvent.name == "settings_query") {
        // Retrieve the values of the requested settings keys
        var result = {};
        var keys = messageEvent.message;
        for (var i in keys) {
            var key = keys[i];
            var value = safari.extension.settings.getItem(key);
            result[key] = value;
        }
        messageEvent.target.page.dispatchMessage("settings_response", result);
    }
}

safari.application.addEventListener("message", handleMessage, false);
