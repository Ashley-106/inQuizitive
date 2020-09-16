const home = document.getElementById('home');
const gameInfo = document.getElementById('quiz-info')
const quizGame = document.getElementById('quiz-game');
const scoreBoard = document.getElementById('score-board');
const quizName = document.getElementById('quiz-name');
const question = document.getElementById('quizQuestion');
const questionNum = document.getElementById('questionNum');
const inputAnswer = document.getElementById('inputAnswer');
const submitAnswer = document.getElementById('submitAnswer');

const nav = document.querySelectorAll('li');

const number = document.getElementById('number');
const hint = document.getElementById('hintbtn');
const hintCount = document.getElementById('hintCount');
const hintDisplay = document.getElementById('hintDisplay');
const scoreCorrect = document.getElementById('CorrectScore');
const scoreOutput = document.getElementById('score-output');

const generalKnowledgeQuiz = document.getElementById('generalKnowledge');
const historyQuiz = document.getElementById('history');
const geographyQuiz = document.getElementById('geography');
const sportQuiz = document.getElementById('sport');
const politicsQuiz = document.getElementById('politics');
const musicQuiz = document.getElementById('music');
const britishQuiz = document.getElementById('british');
const animalsQuiz = document.getElementById('animals');
const filmQuiz = document.getElementById('film');

home.addEventListener('click', () => {
    gameInfo.style.display = "block";
    quizGame.style.display = "none";
    scoreBoard.style.display = "none";
})

generalKnowledgeQuiz.addEventListener('click', () => {
    chooseQuiz(quiz1);
})

historyQuiz.addEventListener('click', () => {
    chooseQuiz(quiz2);
})

geographyQuiz.addEventListener('click', () => {
    chooseQuiz(quiz3);
})

sportQuiz.addEventListener('click', () => {
    chooseQuiz(quiz4);
})

politicsQuiz.addEventListener('click', () => {
    chooseQuiz(quiz5);
})

musicQuiz.addEventListener('click', () => {
    chooseQuiz(quiz6);
})

britishQuiz.addEventListener('click', () => {
    chooseQuiz(quiz7);
})

animalsQuiz.addEventListener('click', () => {
    chooseQuiz(quiz8);
})

filmQuiz.addEventListener('click', () => {
    chooseQuiz(quiz9);
})

// displays chosen quiz
function chooseQuiz(quiz) {

     // reset counters for new quiz
     let questionCount = 0;
     let hintCounter = 3;
     let correctScore = 0;
     number.innerText = 1;
     let currentQuiz = "";

    scoreBoard.style.display = "none";
    gameInfo.style.display = "none";
    quizGame.style.display = "block";

    if (quiz === quiz1) {
        quizName.innerText = "General Knowledge"; 
        currentQuiz = generalKnowledgeQuiz; 
    } else if (quiz === quiz2) {
        quizName.innerText = "History";
        currentQuiz = historyQuiz;
    } else if (quiz === quiz3) {
        quizName.innerText = "Geography";
        currentQuiz = geographyQuiz;
    } else if (quiz === quiz4) {
        quizName.innerText = "Sport";
        currentQuiz = sportQuiz;
    } else if (quiz === quiz5) {
        quizName.innerText = "Politics";
        currentQuiz = politicsQuiz;
    } else if (quiz === quiz6) {
        quizName.innerText = "Music";
        currentQuiz = musicQuiz;
    } else if (quiz === quiz7) {
        quizName.innerText = "British";
        currentQuiz = britishQuiz;
    } else if (quiz === quiz8) {
        quizName.innerText = "Animals";
        currentQuiz = animalsQuiz;
    } else if (quiz === quiz9) {
        quizName.innerText = "film";
        currentQuiz = filmQuiz;
    }

    //greys out quiz topics once selection has been made
    for (let i = 0; i < nav.length; i ++) {
        if (nav[i] !== currentQuiz && nav[i].style.backgroundColor !== "green") {
            nav[i].style.pointerEvents = "none";
            nav[i].style.backgroundColor = "grey";
        }
    }

    // puts focus on the text input to recieve next answer
    inputAnswer.focus();

    // display first question of selected quiz
    quizQuestion.innerHTML = quiz[0].question;
    hintCount.innerText = hintCounter;
    hintDisplay.innerText = "";

    
submitAnswer.addEventListener('click', () => {


    if (questionCount < 19) {

        inputAnswer.focus();
    
        // cycles through correct answer using question Count
        let correctAnswer = quiz[questionCount].answer;   
    
        //increments the question number inline with each question
        number.innerHTML = questionCount+2;

        // when questionCount is double digits positions them center
        if (questionCount+2 > 9) {
            number.style.position = "absolute";
            number.style.left = "-8px";
        }
       
        questionCount ++;
        quizQuestion.innerHTML = quiz[questionCount].question;

        //checks input value against correct answer
        if (inputAnswer.value.toLowerCase() === correctAnswer) {
            correctScore ++;
        } else {
            // incorrect score maybe?
        }
    
        inputAnswer.value = "";
        hintDisplay.innerText = "";

    } else {

            // clears questionCount ready for next quiz
            questionCount = 0;

            // score board display and results
            quizGame.style.display = "none";
            scoreBoard.style.display = "block";
    
            scoreOutput.innerText = "You scored " + correctScore + "/20";
            
            if (correctScore > 14) {
                if (quiz === quiz1) {
                    generalKnowledgeQuiz.style.backgroundColor = "green";
                } 
                if (quiz === quiz2) {
                    historyQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz3) {
                    geographyQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz4) {
                    sportQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz5) {
                    politicsQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz6) {
                    musicQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz7) {
                    britishQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz8) {
                    animalsQuiz.style.backgroundColor = "green"; 
                }
                if (quiz === quiz9) {
                    filmQuiz.style.backgroundColor = "green"; 
                }
            }  

            // after completeing said quiz navbar is active again ready to select another quiz
            for (let i = 0; i < nav.length; i ++) {
                if (nav[i] !== currentQuiz && nav[i].style.backgroundColor !== "green") {
                    nav[i].style.backgroundColor = "lightGrey";
                    nav[i].style.pointerEvents = "auto";
                }
            }

            //resets position of counter
            number.style.position = "absolute";
            number.style.left = "0px";
}
        
})

// logs hints used
hint.addEventListener('click', () => {

   if (hintCounter !== 0) {
       
       
       hintDisplay.innerText = quiz[questionCount].hint;
       hintCounter --;
       hintCount.innerText = hintCounter;
   }

})

}






    
