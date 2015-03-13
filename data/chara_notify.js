console.log("Children of questions: " + $("#questions").children().toString());

var queue_url = window.location.pathname;

$("#new_lab_queue_staff").append("".concat('<a href="/api', queue_url, '" class="btn btn-danger deleteQuestion" style="width: 100%; margin-top: 2px; margin-left:auto; margin-right: auto;" data-confirm="This will delete the queue and any questions still remaining on it." data-method="delete" data-original-title="Click to delete this queue" data-remote="true" data-type="json" rel="nofollow">Delete Queue</a>'))

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
