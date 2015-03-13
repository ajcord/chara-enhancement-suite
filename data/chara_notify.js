MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("Children of questions: " + $("#questions").children().toString());

$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

console.log("Inserted audio.");

var questions = document.getElementById("questions").rows;
var lastStudentId = "";

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
    
    if (lastStudentId != questions.item(questions.length - 1).id) {
	console.log(lastStudentId);
	console.log(questions.item(questions.length - 1).id);
	console.log("New question added.");
	lastStudentId = questions.item(questions.length - 1).id;
	$("#sound_notification")[0].play();
    }
    
});

observer.observe(document.getElementById("questions"), {
  subtree: true,
  attributes: true
  //...
});

