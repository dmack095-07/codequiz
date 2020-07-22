// Assigning code //
var counter = 75; 
var generateBtn = document.querySelector("#button");
var introduction = document.querySelector(".intro");
var quizContainer = document.querySelector("#quiz-container");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var questionEl = document.querySelector(".question");
var nextBtn = document.querySelector("#nextButton");
var answersButtonsEl = document.querySelector("#answer-buttons");

// Once the start button is clicked the timer will start counting down//
generateBtn.addEventListener("click", function(){
// Using a setInterval function for the timer
  setInterval(function(){
  counter--;
  if (counter >= 0){
    id = document.getElementById("seconds");
    id.innerHTML = counter;
  }
  //When the timer reaches 1 an alert of Game Over will appear//
  if (counter == 0){
    alert("Game Over")
  }
  //Setting the displays
  generateBtn.style.display = "none";
  introduction.style.display = "none";
  nextBtn.style.display ="block";
  quizContainer.style.display ="block";
},1000);
}); 

// Creating a next button//
nextBtn.addEventListener("click", function(){
});
// Creating an Array for the questions //
var questions = [
   {
      question: "What does HTML stand for?",
      choiceA:  "Hypertext Move Language",
      choiceB:  "Hypertext Markup Language",
      choiceC:  "Home tool Markup Language",
      choiceD:  "How to move loose",
      answer: [
        { text: "Hypertext Markup Language", correct: true}, 
        { text: "Hypertext Move Language", correct: false}
      ]},
    {
     question: "What tag is used for a line break?",
      choiceA:  " <div>",
      choiceB:  "<br>",
      choiceC:  "<hr>",
      choiceD:  "<space>",
      answer: choiceB
   },
   {
    question: "Where is Javascript placed in an HTML document?",
    choiceA:  "<link>",
    choiceB:  "<header>",
    choiceC:  "<footer>",
    choiceD:  "<body>",
    answer: choiceC
   },
   {
    question: "Which is the correct way to enclose an array?",
    choiceA:  "[]",
    choiceB:  "{}",
    choiceC:  "()",
    choiceD:  "<>",
    answer:choiceA
   },
   {
    question: "Where are pseudo-classes used?",
    choiceA:  "HTML",
    choiceB:  "CSS",
    choiceC:  "Javascript",
    choiceD:  "HTML and CSS",
    answer: choiceD
   }
 ]
var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var score = 0;
//Adding a function to display question//
function renderQuestion(){
  var q = questions[currentQuestion];

  questionEl.innerHTML =  q.question;
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
  }



renderQuestion();
renderProgress();

// Adding a FOR loop for the questions //
function renderProgress(){
  for (var i=0; i < questions.length - 1; i++) {
    progress.innerHTML += "<div class= 'prog' id =";
  }

//Adding a function to check the answer //
function checkAnswer(answer){
  if (answer == questions[currentQuestion].correct){
    score++;
    answerYes();
  }else{
    answerNo();
  }
}
// Adding color for right and wrong answers //
function answerYes(){
  document.getElementById(currentQuestion).style.backgroundColor= "#0f0";
}

function answerNo(){
  document.getElementById(currentQuestion).style.innerHTML= "#f00";
}






}








