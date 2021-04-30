// variables start
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
        var scoreCounter = document.getElementById("score");
        var loggingScore = document.getElementById("log-score");
        var submit = document.getElementById("submit");
        var initials = document.getElementById("initials");
        var viewScores = document.getElementById("view-scores");
        var highScores = document.getElementById("high-scores");
    // questions
        var questions = [
            {
                question : "Inside which HTML element do we put the JavaScript?",
                A : "<script>",
                B : "<js>",
                C : "<javascript",
                D : "<scripting",
                correct : "A"
            },{
                question : "How to write an IF statement in JavaScript?",
                A : "if i == 5 then",
                B : "if (i == 5)",
                C : "if i = 5 then",
                D : "if i = 5",
                correct : "B"
            },{
                question : "How do you create a function in JavaScript?",
                A : "function = myFunction()",
                B : "var function myFunction()",
                C : "function myFunction()",
                D : "function:myFunction()",
                correct : "C"
            },{
                question : "How do you call a function named myFunction ?",
                A : "run myFunction()",
                B : "call function myFunction()",
                C : "call myFunction()",
                D : "myFunction()",
                correct : "D"
            },{
                question : "How to write an IF statement for executing some code if i is NOT equal to 5?",
                A : "if i <> 5",
                B : "if (i != 5)",
                C : "if i =! 5 than",
                D : "if (i <> 5)",
                correct : "B"
            }
        ];
    // function variables
        var lastQuestion = questions.length - 1;
        var currentQuestion = 0;
        var score = 0;
        var timeLeft = 60;
// variables end



// quiz functions start
    // start quiz
        function startQuiz() {
            start.style.display = "none";
            loggingScore.style.display = "none";
            quiz.style.display = "flex";
            scoreCounter.textContent = "0";
            progress.textContent = "0";
            runQuestions();
            startTime();
        }

    // start time
        function startTime() {
            var timeInterval = setInterval(function() {

                if (timeLeft > 1) {
                timer.textContent = timeLeft + ' seconds';
                timeLeft--;

                } else if (timeLeft === 1) {
                timer.textContent = timeLeft + ' seconds';
                timeLeft--;

                } else {
                timer.textContent = '';
                clearInterval(timeInterval);
                endQuiz();
                }
            }, 1000);
        }
    //run questions
        function runQuestions() {
                var q = questions[currentQuestion];

                progress.textContent = currentQuestion + 1;
        
                question.textContent = q.question;
                A.textContent = q.A;
                B.textContent = q.B;
                C.textContent = q.C;
                D.textContent = q.D;
        }
    // check answer
        function checkAnswer(answer){
            if( answer == questions[currentQuestion].correct) {
                // answer is correct
                score++;
                scoreCounter.textContent = score;

            }else {
                // answer is wrong
                timeLeft -= 5;
            }
            count = 0;
            if(currentQuestion < lastQuestion) {
                currentQuestion++;

                runQuestions();

            } else {
                // end of quiz
                endQuiz();
            }
        }
// quiz functions end



// score functions start
    // loads log initials page
        function endQuiz() {
            quiz.style.display = "none";
            viewScores.style.display = "none";
            loggingScore.style.display = "flex";
        }
    // logs initials and score
        loggingScore.addEventListener('submit',function(event){
            event.preventDefault();

            var initialsInput = initials.value;
      
            highScores.innerHTML += '<li>' + initialsInput + ' - ' + score + '</li>';
            store();

            loadScoreboard();
        })

        function store() {
            localStorage.myitems = highScores.innerHTML;
        }

    // loads high scores page
        function loadScoreboard() {
            localStorage.myitems = highScores.innerHTML;

            quiz.style.display = "none";
            loggingScore.style.display = "none";
            viewScores.style.display = "block";
        }

        function pullScores() {
            var storedValues = localStorage.myitems;
            if(!storedValues) {
                highScores.innerHTML = '<li>KB - 100</li>';
            }
            else {
                highScores.innerHTML = storedValues;
            }
        }
// score functions end



// run functions
start.addEventListener("click",startQuiz);
pullScores();