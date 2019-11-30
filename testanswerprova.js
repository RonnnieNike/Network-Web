window.onload = function () {
  
  questionGenerator ();
}
function questionGenerator(question, correctAnswer)
  {    var args = makeQuestion.arguments;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.userAnswer = null;
        this.isCorrect = isCorrect;
        this.showForm = showForm;
        this.userChoices = new makeArray(args.length - 2);
               for (var i = 0; i < args.length - 2; i++)
                     { this.userChoices[i] = args[i + 2] }
    }
// Metodo per verificare se la risposta e' corretta
function isCorrect()
   {   if (this.correctAnswer == this.userAnswer) return true;
        else return false;
    }
quiz = new makeArray(4);
 
 function showForm(n)
 {   document.write((n + 1) + '. ' + this.question + '<BLOCKQUOTE><FORM>');
    for (var i = 0; i < this.userChoices.length; i++) {
        
        document.write('<INPUT TYPE = "RADIO" NAME = "q' + n +
                       '" onClick = "quiz[' + n + '].userAnswer = ' + i + ';">');
        document.write(this.userChoices[i] + '<BR>');
    }
    document.write('</FORM></BLOCKQUOTE>');
  }
  
   for (var i = 0; i < quiz.length; i++) {
    quiz[i].showForm(i);
    } 


    quiz = new makeArray(4);
quiz[0] = new makeQuestion("Which of the following best describes the purpose of an array?", // 1st question
                            2,                             // correct answer
                           "to store a piece of information",                // choice 0
                           "to store a list of information",                // choice 1
                           "to organize code in a logical fashion",                    // choice 2
                           "to relate two pieces of information");               // choice 3

quiz[1] = new makeQuestion("What is the difference between a method and a function?",         // 2nd question
                            0,                             // correct answer
                           "a method is tied to an object",    // choice 0
                           "a method\'s name isn't followed by parentheses",        // choice 1
                           "a function doesn't contain any variables", //choice 2
                           "a function must be passed parameters");
quiz[2] = new makeQuestion("Which object does the document object branch off of in the JavaScript tree?",
                            3,
                           "the forms object",
                           "the navigator object",
                           "the window object",
                           "it doesn\'t branch off an object");

quiz[3] = new makeQuestion("Which of the following browsers does not support JavaScript?",
                            3,
                           "Internet Explorer 3.01 for Windows 95",
                           "Navigator 2.0 for UNIX",
                           "Internet Explorer 3.0 for the Mac",
                           "Navigator 2.02 for OS2 Warp");

// Function to create arrays.
function makeArray(len) {
    for (var i = 0; i < len; i++) this[i] = null;
this.length = len;
}

// Function to correct the quiz and display score, correct answers.
function correctQuiz() {
var correct = 0;
correctPage = '<HTML><TITLE>Corrections</TITLE><BODY BGCOLOR = "#FFFFFF">';
    for (var i = 0; i < quiz.length; i++) {
    if (quiz[i].isCorrect()) correct++;
    }
var score = Math.round((correct / quiz.length) * 100);
correctPage += 'Score: <STRONG>' + score + '</STRONG> %';
    if (correct < quiz.length) {
    correctPage += ifWrong;
        for (var i = 0; i < quiz.length; i++) {
            if (!quiz[i].isCorrect()) {
            correctPage += (i + 1) + '. ' +
            quiz[i].userChoices[quiz[i].correctAnswer] + '<BR>';
            }
        }
    }
    else correctPage += ifAced;
correctPage += '</BODY></HTML>';
correctwin = window.open ('', '', 'height=300,width=300,scrollbars=yes');
    if (correctwin.opener == null) correctwin.opener = window;
correctwin.location = 'javascript:opener.correctPage';
}

// Message to display if quiz is aced.
var ifAced = "<P>Well done, you aced it.<P>";
// Message to display if any are wrong.
var ifWrong = "<P>Here are the correct answers to the questions you got wrong:<P>";

    // BUG FIX: In Netscape 3 and greater, forms are not reset on reload.
    // This for loop is used to automatically reset the quiz forms if the
    // user reloads the page. If not for this fix, whenever the quiz is
    // reloaded, the radio button choices on the page stay the same but
    // the user's choices in the memory will be reset. This means
    // the choices on the page are different than the ones in memory!
    if (navigator.appName == "Netscape" &&
        parseInt(navigator.appVersion) >= 3) {
        for (var i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
        }
    }

//-->
</SCRIPT>
<!-- This link (or button) runs the correctQuiz() function when clicked. -->
<A HREF = "javascript:correctQuiz()">Correct Quiz</A>