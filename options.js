// Saves options to chrome.storage
function save_options() {
  var sound = document.getElementById("sound").checked;
  var cats = document.getElementById("cats").checked;
  var favicon = document.getElementById("favicon").checked;
  chrome.storage.sync.set({
    soundEnabled: sound,
    catsEnabled: cats,
    faviconEnabled: favicon
  });
}

// Restores checkbox state using the preferences stored in chrome.storage.
function restore_options() {
  // Use default checked for all options
  chrome.storage.sync.get({
    soundEnabled: true,
    catsEnabled: true,
    faviconEnabled: true
  }, function(items) {
    document.getElementById("sound").checked = items.soundEnabled;
    document.getElementById("cats").checked = items.catsEnabled;
    document.getElementById("favicon").checked = items.faviconEnabled;
  });

  //Set up the checkbox event listeners
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("click", save_options);
  }
}

document.addEventListener("DOMContentLoaded", restore_options);
