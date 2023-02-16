let leaderboard = document.getElementbyId("#highScore");
let timer = document.getElementById("#timer");
let question = document.querySelector(".question"); // is this the right way to make them an array?
document.querySelector(".question") = [".introduction","1","2","3","4","5"];
let correct = document.querySelector(".correct");
let incorrect = document.querySelector(".incorrect");
let quizbtn = document.querySelector(".quizbtn");
//score= checkAnswer ++
//First things first: page introduction text includes a button
function startQuiz() {
    //set all array items 1-5[0-4](whatever the last number is) to 'hidden'
    // if (question[0] state=visible) {
        //change this state to hidden and the others to visible. maybe make a loop that shows one array item at a time. 
        //also i think set all array items to absolute positioning and put them in the same spot with white backgrounds.
        //if we do this ^^ we may not even need to hide the items, but bring the next one to the front.
        //another option is DOM manipulation??? When triggered the text changes and the classes of 'correct' and 'incorrect' change too.
    // }
}

function checkAnswer() {
    if (correct.target= true) 
    displayMessage("correct!")

    if (incorrect.target= true)
    displayMessage("nope!")
    //if clicked element = correct answer {score=score++} also text shows briefly saying 'correct!'
    //if !clicked element {no points added, brief text shows saying 'incorrect!'}
}
//trigger this function with an event listener (begin.on("click",startTimer))
(function startTimer() {
let timerCount = 75;
    let timeInterval = setInterval(function () {
        timer.textContent = 'Seconds Remaining '+ timerCount;
        if (!quizAnswer) {
            timerCount = timerCount-10000;
        }
        if (quizAnswer === true) {
            timerCount = timerCount;
        }
        if (timercount === 0) {
            clearInterval(timeInterval)
            end.startQuiz;
            displayMessage('You scored ' + score, ' points! Check highscores to see how you fared.');
        }
    }, 1000);
})


function showLeaderboard() {
    //shows a list of the saved data for high scores
};
quizbtn.addEventListener("click",startQuiz());
quizbtn.addEventListener("click",startTimer());
//quizbtn.on("click",startQuiz) quizbtn.addEventListener("click",startTimer)
//add an event listener to check the answers to the quiz. answerbtn.addEventListener("click",checkAnswer) can checkAnswer also trigger the next set of questions?
leaderboard.addEventListener("click", showLeaderboard());