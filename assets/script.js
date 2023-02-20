let timer = document.querySelector(".timer");
let timeRemaining = 75;
let leaderboard = document.getElementById("highScore");
let prompts = document.querySelector(".prompts");
let quizbtn = document.querySelector(".quizbtn");
let score = document.querySelector(".score");
let scoreBoard = document.getElementById("scoreBoard");
let q1 = document.getElementById("q1")//getElementById does not work with '#' because it is implied.
score.textContent = 0;

quizbtn.addEventListener("click",startQuiz); //when adding an EventListener no parenthesis after the function.

function startQuiz() {//trigger this function with an event listener quizbtn.addEventListener("click", startQuiz)
 console.log("here");
 startTimer();
    if (q1.style.visibility =='hidden') {  
    q1.style.visibility = 'visible';
     
 }
}

function startTimer() {
    let timerInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = "Seconds Remaining " + timeRemaining;
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
        }
        // if (!quizAnswer) {
        //     timerCount = timerCount - 10000;
        // }
        // if (quizAnswer === true) {
        //     timerCount = timerCount;
        // }
        // if (timercount === 0) {
        //     clearInterval(timeInterval)
        //     end.startQuiz;
        //     displayMessage('You scored ' + score, ' points! Check highscores to see how you fared.');
        // }
    }, 1000);
}

let question = {
    title: 'Question',
    alternatives: ['a', 'b', 'c', 'd'],
    correctAnswer: 1 //whichever one is actually correct. could also store the word as the right answer
};

function showQuestion(q) {//the parameter 'q' is the question we will pass through the function
    //select dom element in a variable
    let titleH3 = document.getElementById('title');
    //modify it
    titleH3.textContent = q.title; //q.title replaces question.title
    let alts = document.querySelectorAll('.alternative')
    console.log(alts); //this is to see if the right elements have been selected.
    alts.forEach(function(element,index){//the parameters are element and index
element.textContent=q.alternatives[index];//element is q, textcontent is the alternatives index. Still dont understand how q is now read as question.
   
        element.addEventListener('click', function() {
            //check correct answer
            if(q.correctAnswer == index){
                console.log('correct Answer!');
                // displayMessage('You got it!');
                score.visibility = 'visible';
                score = 'score: '+score.textContent++;
            }
            else {
                console.log('wrong answer!');
                // displayMessage('Nope!');
                score = 'score: '+score.textContent;
            }
        });
});
}

showQuestion(question);//shows a list of the saved data for high scores
function showLeaderboard() {
    if (scoreBoard.style.visibility == 'hidden') {
        scoreBoard.style.visibility = 'visible';
        console.log('high scores here!');
    }
    if (prompts.style.visibility == 'visible'){
        prompts.style.visibility = 'hidden';
    }
   
} 
    //triggers showLeaderboard function (above)
leaderboard.addEventListener("click", showLeaderboard);
//event listener to target ID confirm name button
//amend elemtents to have locally saved username and score