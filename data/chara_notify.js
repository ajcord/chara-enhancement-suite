var queue_url = window.location.pathname;

function createDeleteButton() {
    var delete_button = document.createElement("a");
    delete_button.href = "".concat("/api", queue_url);
    delete_button.className = "btn btn-danger deleteQuestion";
    delete_button.style="width: 100%; margin-top: 2px; margin-left:auto; margin-right: auto;";
    delete_button.setAttribute("data-confirm", "This will delete the queue and any questions still remaining on it.");
    delete_button.setAttribute("data-method", "delete");
    delete_button.setAttribute("data-original-title", "Click to delete this queue");
    delete_button.setAttribute("data-remote", "true");
    delete_button.setAttribute("data-type", "json");
    delete_button.rel="nofollow";
    delete_button.textContent = "Delete Queue";
    delete_button.id = "delete_queue_button";
    return delete_button;
}

$("#new_lab_queue_staff")[0].appendChild(createDeleteButton());

$("#sidebar").append('<audio id="sound_notification"> <source src="https://dl.dropboxusercontent.com/u/2758934/wilhelm.ogg" type="audio/ogg"> </audio>');

$("#sidebar h3").prepend("<h1 id=course_title></h1>");

$("#course_title").load("".concat(document.referrer, " .col-md-12 h1"));

$("#Queue_NewQuestionForm").attr({
    class: "modal fade",
    tabindex: -1,
    role: "dialog",
    "aria-labelledby": "Queue_NewQuestionModalTitle"
});

$("#Queue_NewQuestionForm").html(`
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" id="new_question_close" aria-label="Close"><span aria-hidden="true">&times;</span></button>    
      <h4 class="modal-title" id="Queue_NewQuestionModalTitle">New Question</h4>
    </div>
    <div class="modal-body">
      <div class="form-group hide-inline">
        <label for="Queue_Pseudonym">Name</label>
        <input class="form-control" id="Queue_Pseudonym" maxlength="50" name="pseudonym" placeholder="Enter a name..." type="text">
        <p class="help-block">Using a pseudonym (nickname) is fine</p>
      </div>
      <div class="form-group hide-inline">
        <label for="Queue_Topic">Topic</label>
        <input id="Queue_Topic" class="form-control" name="topic_text" placeholder="Enter a brief topic for your question..." maxlength="140" type="text">
      </div>
      <div class="form-group hide-inline">
        <label for="Queue_Location">Location</label>
        <input id="Queue_Location" class="form-control" name="location_text" placeholder="Enter the room number you are located in..." maxlength="140" type="text">
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" id="new_question_close_button">Cancel</button>
      <button type="submit" id="question_submit_button" class="btn btn-primary">Add to queue</button>
    </div>
  </div>
</div>`);

$("#questionList").after('<div align="center"><button id="open_new_question" class="btn btn-primary">Add to queue</button></div>');

function getCourseName() {
    return $("#course_title").text().split(" ").slice(0, 2).join(" ");
}

function hideQuestionModal(e) {
    $("#Queue_NewQuestionForm").modal("hide");
}

function showQuestionModal(e) {
    $("#Queue_NewQuestionForm").modal("show");
}

$("#new_question_close").click(hideQuestionModal);
$("#new_question_close_button").click(hideQuestionModal);
$("#open_new_question").click(showQuestionModal);
$("#question_submit_button").click(hideQuestionModal);

function getCharaQueueLength() {
    return document.getElementsByTagName("tr").length;
}

var lastLength = getCharaQueueLength();

var baseTitle = document.title;

function replaceGravatars() {
    var gravatars = document.getElementsByTagName("img");

    for (ii = 0; ii < gravatars.length; ii++) {
	var gravatar = $(gravatars[ii]);
	
	if (gravatar.attr("alt") == "gravatar") {
	    gravatar.attr({
		alt: "not gravatar",
		src: "https://thecatapi.com/api/images/get?format=src&size=small&" + new Date().getTime(),
		width: "30"
	    });
	}
    }
}

function returnToQueueList() {
    if (document.referrer.indexOf("chara") != -1) {
	setTimeout(function () {window.location.href = document.referrer}, 1000);
	return;
    }
    window.location.href = "/courses";
}

function unlinkConfirmationDialog() {
    $($("#confirmationDialog .btn")[0]).off("click", returnToQueueList);
    $($("#confirmationDialog .btn")[1]).off("click", unlinkConfirmationDialog);
}

function linkConfirmationDialog {
    var confirmationButtons = $("#confirmationDialog .btn");

    $(confirmationButtons[0]).on("click", returnToQueueList);
    $(confirmationButtons[1]).on("click", unlinkConfirmationDialog);
}

function refresh() {
    
    if ($("#course_title").text()) {
	baseTitle = "".concat(getCourseName(), " Queue");
    }

    if (lastLength < getCharaQueueLength()) {
	
	lastLength = getCharaQueueLength();
	
	if (self.options.soundEnabled) {
	    document.getElementById("sound_notification").play();
	}
	if (self.options.catsEnabled) {
	    replaceGravatars();
	}
    }
    
    lastLength = getCharaQueueLength();
    document.title = lastLength > 1 ? "".concat("(", (lastLength - 1).toString(), ") ", baseTitle) : baseTitle;

    setTimeout(refresh, 1000);
}

setTimeout(refresh, 1000);
