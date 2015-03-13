MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

console.log("Children of questions: " + $("#questions").children().toString());

$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

console.log("Inserted audio.");

var lastStudentId = ""

var observer = new MutationObserver(function(mutations, observer) {
    if (lastStudentId == "") {
	lastStudentId = $("#questions").children()[$("#questions").length].id || "";
    }
    // fired when a mutation occurs
    console.log("Mutation detected.");
    console.log(mutations, observer);
    
    var questions = $("#questions");
    var newStudentId = questions.children()[$("#questions").length].id || $("#questions").children()[$("#questions").length].id;

    console.log(lastStudentId);
    console.log(newStudentId);
    
    if (lastStudentId != newStudentId) {
	console.log("New question added.");
	lastStudentId = newStudentId;
	$("#sound_notification")[0].play();
    }
    
});

observer.observe(document, {
  subtree: true,
  attributes: true
  //...
});

