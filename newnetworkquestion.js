
var q = 0;

var questions =  [ "question1", "question2" , "question3"];

var answers = [1,0,1];




function questionGenerator () {

	document.getElementById ("question").innerText = questions[q];

console.log(q);

}

var UserAnswer = [];

function nextQuestion () {

	if (q < questions.length -1) {

		var input = document.getElementsByTagName("input");
	
		for (i=0; i < input.length; i++) {

			if (input[i].type == "radio" && input[i].name == "answer" && input[i].checked == true) {  /*select the choosed one from users*/

				UserAnswer.push(input[i].value);
				q++;
				document.getElementById ("t").checked = false;

				document.getElementById ("f").checked = false;
				/*remove the selected one*/
				questionGenerator();

				alert(answers[0]);
			}
	    }		
	} else {

		showResult();

	}
}

function showResult() {

	var correctAnswer = 0;

	for (i = 0 ; i < UserAnswer.length ; i++) {
		var td=
	}

}