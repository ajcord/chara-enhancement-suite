/**
 * Injects content scripts selectively using the Chrome manifest format.
 */

var content_scripts = [
    {
      "matches": ["https://chara.cs.illinois.edu/*"],
      "js": ["data/insert_favicon.js"]
    },
    {
      "matches": ["https://chara.cs.illinois.edu/lab_queue/*"],
      "js": ["data/jquery-1.11.2.min.js",
             "data/bootstrap.modal.min.js",
             "data/chara_notify.js"]
    },
    {
      "matches": ["https://chara.cs.illinois.edu/login"],
      "js": ["data/jquery-1.11.2.min.js",
             "data/chara_login_fix.js"]
    }
];

// Parse the content script block and add the rules
for (var i in content_scripts) {

    var group = content_scripts[i];

    var js = [];
    if (typeof group.js != "undefined") {
        js = group.js;
    }

    for (var j in js) {

        var script_path = js[j];

        var matches = [];
        if (typeof group.matches != "undefined") {
            matches = group.matches;
        }

        var exclude_matches = [];
        if (typeof group.exclude_matches != "undefined") {
            exclude_matches = group.exclude_matches;
        }

        var run_at_end = true;
        if (typeof group.run_at != "undefined" &&
            group.run_at == "document_start") {

            run_at_end = false;
        }

        safari.extension.addContentScriptFromURL(
            safari.extension.baseURI + script_path,
            matches,
            exclude_matches,
            run_at_end
        );
    }
}