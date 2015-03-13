$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

function getCharaQueueLength() {
    return document.getElementsByTagName("tr").length;
}

var lastLength = getCharaQueueLength();

var baseTitle = document.title;

function refresh() {

    if (lastLength < getCharaQueueLength()) {
	lastLength = getCharaQueueLength();
	document.getElementById("sound_notification").play();
    }
    
    lastLength = getCharaQueueLength();
    document.title = lastLength > 1 ? "".concat("(", (lastLength - 1).toString(), ") ", baseTitle) : baseTitle;

    setTimeout(refresh, 1000);
}

setTimeout(refresh, 1000);
