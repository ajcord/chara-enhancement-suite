MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("Children of questions: " + $("#questions").children().toString());

$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

console.log("Inserted audio.");

var questions = document.getElementById("questions").childNodes;
var lastLength = questions.length;

var observer = new MutationObserver(function(mutations, observer) {
    // fired when a mutation occurs
    // if (lastStudentId == null) {
    // 	lastStudentId = questions.item(questions.length - 1).id;
    // }
    
    console.log("Mutation detected.");
    console.log(mutations, observer);
    
    // var newStudentId = questions.item(questions.length - 1).id;

    // console.log(lastStudentId);
    // console.log(newStudentId);
    
    if (lastLength < questions.length) {
	console.log("Previous length: " + lastLength);
	console.log("Current length: " + questions.length);
	console.log("New question added.");
	lastLength = questions.length;
	document.getElementById("sound_notification").play();
    }
    
    lastLength = questions.length;
    console.log("Previous length: " + lastLength);
});

observer.observe(document.getElementById("questionList"), {
  subtree: true,
  attributes: true
  //...
});

