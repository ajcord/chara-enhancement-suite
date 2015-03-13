console.log("Children of questions: " + $("#questions").children().toString());

$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

console.log("Inserted audio.");

function getCharaQueueLength() {
    return document.getElementsByTagName("tr").length;
}

var lastLength = getCharaQueueLength();

function refresh() {

    // fired when a mutation occurs
    // if (lastStudentId == null) {
    // 	lastStudentId = questions.item(questions.length - 1).id;
    // }
    
    console.log("Mutation detected.");

    // var newStudentId = questions.item(questions.length - 1).id;

    // console.log(lastStudentId);
    // console.log(newStudentId);
    
    if (lastLength < getCharaQueueLength()) {
	console.log("Previous length: " + lastLength);
	console.log("Current length: " + getCharaQueueLength());
	console.log("New question added.");
	lastLength = getCharaQueueLength();
	document.getElementById("sound_notification").play();
    }
    
    lastLength = getCharaQueueLength();
    console.log("Previous length: " + lastLength);

    // make Ajax call here, inside the callback call:
    setTimeout(refresh, 1000);
    // ...
}

setTimeout(refresh, 1000);
