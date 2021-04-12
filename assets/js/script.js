// elements
    var start = document.getElementById("start");
    var quiz = document.getElementById("quiz");
    var question = document.getElementById("question");
    var A = document.getElementById("A");
    var B = document.getElementById("B");
    var C = document.getElementById("C");
    var D = document.getElementById("D");
    var progress = document.getElementById("progress");
    var timer = document.getElementById("timer");
    var score = document.getElementById("score");
    var viewScores = document.getElementById("view-scores");
    var highScores = document.getElementById("high-scores");
// questions
    var questions = [
        {
            question : "What does HTML stand for?",
            A : "Correct",
            B : "Wrong",
            C : "Wrong",
            D : "Wrong",
            correct : "A"
        },{
            question : "What does CSS stand for?",
            A : "Wrong",
            B : "Correct",
            C : "Wrong",
            D : "Wrong",
            correct : "B"
        },{
            question : "What does JS stand for?",
            A : "Wrong",
            B : "Wrong",
            C : "Correct",
            D : "Wrong",
            correct : "C"
        }
    ];
// variables
    var lastQuestion = questions.length - 1;
    var runningQuestion = 0;
    score = 0;
// log score
    function logScore() {
        
    }
//run questions
    function runQuestions() {
            var q = questions[runningQuestion];
    
            question.textContent = q.question;
            A.textContent = q.A;
            B.textContent = q.B;
            C.textContent = q.C;
            D.textContent = q.D;
        }
// check answer
    function checkAnswer(answer){
        if( answer == questions[runningQuestion].correct){
            // answer is correct
            score++;
        }else{
            // answer is wrong
            time++;
        }
        count = 0;
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        } else{
            // end of quiz
            logScore();
        }
    }
// start time
    function startTime() {
        var timeInterval = setInterval(function() {
            // As long as the `timeLeft` is greater than 1
            if (timeLeft > 1) {
              // Set the `textContent` of `timerEl` to show the remaining seconds
              timer.textContent = timeLeft + ' seconds remaining';
              // Decrement `timeLeft` by 1
              timeLeft--;
            } else if (timeLeft === 1) {
              // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
              timer.textContent = timeLeft + ' second remaining';
              timeLeft--;
            } else {
              // Once `timeLeft` gets to 0, set `timerEl` to an empty string
              timer.textContent = '';
              clearInterval(timeInterval);
              logScore();
            }
          }, 1000);
        }
// start quiz
    function startQuiz(){
        start.style.display = "none";
        quiz.style.display = "flex";
        runQuestions();
        startTime();
    }
    start.addEventListener("click",startQuiz);

