let timer = document.querySelector(".timer");
let timeRemaining = 75;
let leaderboard = document.getElementById("highScore");
let prompts = document.querySelector(".prompts");
let quizbtn = document.querySelector(".quizbtn");
let score = document.querySelector(".score");
let scoreBoard = document.getElementById("scoreBoard");
let q1 = document.getElementById("q1")//getElementById does not work with '#' because it is implied.
score.textContent = 0;
let finalScorePage = document.getElementById("scorePage");
let scoreCard = document.querySelector(".card");
let confirm = document.getElementById("confirmName");
let msgDiv = document.getElementById("msg");
var choicesEl = document.getElementById("choices");
const questions = [
    {
        question: "Where do you link a script.js file?",
        choices: ["The bottom of the 'body' element", "In the head element", "Anywhere in the HTML file", "You don't have to if it is in the same folder as the index.html file"],
        answer: "The bottom of the 'body' element"
    },
    {
        question: "If you want rounded edges on an element, you apply:",
        choices: ["border-radius:0px", "border-radius:50px", "border-smooth:50%", "edges:curve"],
        answer: "border-radius:50px"
    }
]
let currentQuestionIndex = 0;
//are we doing createelement with the dom and adding the array items to make them show up
const quiz = document.createElement('div');
const title = document.createElement('h3');
const options = document.createElement('ul');
const optA = document.createElement('li');
const optB = document.createElement('li');
const optC = document.createElement('li');
const optD = document.createElement('li');

for (var i = 0; i < questions.length; i++) {
    //append to document
    options.appendChild(optA)
    options.appendChild(optB)
    options.appendChild(optC)
    options.appendChild(optD)

    quiz.appendChild(title);
    quiz.appendChild(options);

    //add content
    title.textContent = questions[i].question;
    optA.textContent = questions[i].choices[0];//optionA = item one from the choices index under the question object  
    optB.textContent = questions[i].choices[1];
    optC.textContent = questions[i].choices[2];
    optD.textContent = questions[i].choices[3];
    if (this.target == questions[i].answer) {
        score++;
        alert("correct!");
    } else {
        alert("incorrect!");
    }
}
alert("you got " + score + "/")//this is from a youtube video. will likely be deleted I am thinking

quizbtn.addEventListener("click", startQuiz); //when adding an EventListener no parenthesis after the function.

function startQuiz() {//trigger this function with an event listener quizbtn.addEventListener("click", startQuiz)
    console.log("start quiz works!");
    startTimer();
    if (choicesEl.style.visibility === 'hidden') {
        choicesEl.style.visibility = 'visible';

    }
    getQuestions();
}

function getQuestions() {// get the choices array from the question at the current question index
    let currentQuestion = questions[currentQuestionIndex];
    currentQuestion.choices.forEach((question, index) => { console.log(question) });
    let choices = questions[currentQuestionIndex].choices;
    for (let i = 0; i < choices.length; i++) {
        // this creates a new button element for each choice
        let choice = currentQuestion.choices[i];
        let choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;
        // display on the page by attaching the node we created above to the choicesE1 div.
        choicesEl.appendChild(choiceNode);
    }

}

//the choiceClick() function listens to the "choices" div for a button click inside it. This function adds or subtracts game time, dissappears the buttons after the question has been answered, updates the score, iterates the currentQuestionIndex and then calls getQuestions() to put the next question on the screen. It does this until currentQuestionIndex === questions.length
//you'll also need an endQuiz() function that resets the pages contents and resets your currentQuestionIndex 

function endQuiz() {
    //reset page and currentQuestionIndex
    window.location.reload();
    currentQuestionIndex=0;
}

function startTimer() {
    let timerInterval = setInterval(function () {
        timeRemaining--;
        timer.textContent = "Seconds Remaining " + timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            inputUsername();
        }

    }, 1000);
}

// function showQuestion(q) {//the parameter 'q' is the question we will pass through the function
//     //select dom element in a variable
//     let titleH3 = document.getElementById('title');
//     //modify it
//     titleH3.textContent = q.title; //q.title replaces question.title
//     let alts = document.querySelectorAll('.alternative')
//     console.log(alts); //this is to see if the right elements have been selected.
//     alts.forEach(function (element, index) {//the parameters are element and index
//         element.textContent = q.alternatives[index];//element is q, textcontent is the alternatives index. Still dont understand how q is now read as question.

//         element.addEventListener('click', function () {
//             //check correct answer
//             if (q.correctAnswer == index) {
//                 console.log('correct Answer!');
//                 displayMessage('You got it!');
//                 score.visibility = 'visible';
//                 score = 'score: ', score.textContent++;
//             }
//             else {
//                 console.log('wrong answer!');
//                 displayMessage('Nope!');
//                 score = 'score: ', score.textContent;
//                 timeRemaining = timeRemaining - 5;
//             }
//         });
//     });
//     showQuestion(q2);
// }
//trying to append elements
// showQuestion(question);

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function inputUsername(event) {//displays a screen for the user to input a username and save their highscore
    if (scoreBoard.style.visibility == 'hidden') {
        scoreBoard.style.visibility = 'visible';
        console.log('high scores here!');
    }
    if (prompts.style.visibility == 'visible') {
        prompts.style.visibility = 'hidden';
    }
    event.preventDefault;
}
//i need to preventDefault somewhere. the page keeps refreshing when i submit the username in the inputLeaderboard function
function showLeaderboard() {//shows saved data *allegedly*
    let name = localStorage.getItem("username");

    if (name == "");
    displayMessage("A username must contain text!");

    if (scoreCard.style.visibility == 'hidden') {
        scoreCard.style.visibility = 'visible';
    }

    scorePage.textContent = email;
    console.log("showLeaderboard works");
}

//triggers inputLeaderboard function, then when the button is clicked, showLeaderboard function should fire
leaderboard.addEventListener("click", showLeaderboard);//no quotes after function when calling it in an event listener
confirm.addEventListener("click", showLeaderboard);//How to prevent Default?
//event listener to target ID confirm name button
//amend elemtents to have locally saved username and score