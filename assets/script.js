let timer = document.querySelector(".timer");
let timeRemaining = 75;

//trigger this function with an event listener (begin.on("click",startTimer))
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

startTimer();

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
                console.log('correct Answer!')
            }
            else {
                console.log('wrong answer!');
            }
        });
});
}

showQuestion(question);

// let leaderboard = document.getElementById("#highScore");
// let quizbtn = document.querySelector(".quizbtn");
// let score = document.querySelector(".score");
// //score= checkAnswer ++

// function startQuiz() {
//         question[0].addEventListener("click",question[2])//to continue on to question 2. Does this go to the bottom?
//     }
//     function secondQuestion() 
//         if ("click") {//keydown event
//             thirdQuestion; and so on and so forth
//         }
//     }


//     //do i need separate functions for each question?
//     //set all array items 1-5[0-4](whatever the last number is) to 'hidden'
//     // if (question[0] state=visible) {
//     //change this state to hidden and the others to visible. maybe make a loop that shows one array item at a time. 
//     //also i think set all array items to absolute positioning and put them in the same spot with white backgrounds.
//     //if we do this ^^ we may not even need to hide the items, but bring the next one to the front.
//     //another option is DOM manipulation??? When triggered the text changes and the classes of 'correct' and 'incorrect' change too.
//     // }
// }

// function checkAnswer() {
//     if (correct.target = true)
//         displayMessage("correct!")

//     if (incorrect.target = true)
//         displayMessage("nope!")
//     //if clicked element = correct answer {score=score++} also text shows briefly saying 'correct!'
//     //if !clicked element {no points added, brief text shows saying 'incorrect!'}
// }



// function showLeaderboard() {
//     //shows a list of the saved data for high scores
// };
// // quizbtn.addEventListener("click",startQuiz());
// quizbtn.addEventListener("click", startTimer());
// //add an event listener to check the answers to the quiz. answerbtn.addEventListener("click",checkAnswer) can checkAnswer also trigger the next set of questions?
// leaderboard.addEventListener("click", showLeaderboard());