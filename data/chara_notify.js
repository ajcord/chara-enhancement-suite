console.log("Children of questions: " + $("#questions").children().toString());

$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

console.log("Inserted audio.");

function getCharaQueueLength() {
    return document.getElementsByTagName("tr").length;
}

var lastLength = getCharaQueueLength();

var baseTitle = document.title;

function refresh() {

    console.log("Mutation detected.");
    
    if (lastLength < getCharaQueueLength()) {
	console.log("Previous length: " + lastLength);
	console.log("Current length: " + getCharaQueueLength());
	console.log("New question added.");
	lastLength = getCharaQueueLength();
	document.getElementById("sound_notification").play();
    }
    
    lastLength = getCharaQueueLength();
    document.title = "".concat("(", (lastLength - 1).toString(), ") ", baseTitle);
    console.log("Previous length: " + lastLength);

    setTimeout(refresh, 1000);
}

setTimeout(refresh, 1000);
