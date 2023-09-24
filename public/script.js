var quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars"
    }
  ];
  
  var quizContainer = document.getElementById("quiz");
  var submitButton = document.getElementById("submit");
  var resultContainer = document.getElementById("result");
  
  function buildQuiz() {
    var output = "";
    for (var i = 0; i < quizData.length; i++) {
        output += '<div class="question">';
        output += "<h3>Question " + (i + 1) + ":</h3>";
        output += "<p>" + quizData[i].question + "</p>";
        output += "<ul class='options'>";
        for (var j = 0; j < quizData[i].options.length; j++) {
            output += '<li><label><input type="radio" name="question' + i + '" value="' + quizData[i].options[j] + '"> ' + quizData[i].options[j] + '</label></li>';
        }
        output += "</ul>";
        output += "</div>";
    }
    quizContainer.innerHTML = output;
  }
  
  function showResult() {
    var score = 0;
    var userAnswers = [];
    var answerInputs = document.querySelectorAll('input[type="radio"]:checked');
  
    for (var i = 0; i < answerInputs.length; i++) {
        userAnswers.push(answerInputs[i].value);
    }
  
    for (var i = 0; i < quizData.length; i++) {
        if (userAnswers[i] === quizData[i].answer) {
            score++;
        }
    }
  
    resultContainer.innerHTML = "You scored <span class='score'>" + score + "</span> out of <span class='total'>" + quizData.length + "</span> correct!";
  }
  
  buildQuiz();
  
  submitButton.addEventListener("click", showResult);
  