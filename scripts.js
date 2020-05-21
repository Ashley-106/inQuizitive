

let questionCount = 0;
// let correctAnswer = quiz[questionCount].answer;

//correct - incorrect answer count
let correctAnswerCount = 0;
let incorrectAnswer = 0;

const question = document.querySelector('p');
const inputAnswer = document.getElementById('inputAnswer');
const submitAnswer = document.getElementById('submitAnswer');


// changes questions displayed on page
question.innerHTML = quiz[0].question;


// function called from event
let questionCountPlus = function() {

    //cycles through correct answer 
    let correctAnswer = quiz[questionCount].answer;

    //display scores to page ---this needs work.
    document.querySelector('h3.scores').innerText = `Your score was ${correctAnswerCount}`


    if (inputAnswer.value === correctAnswer) {
        // is correct

        correctAnswerCount += 1;
        console.log("that was correct");

        //clears the input for next question
        inputAnswer.value = "";

    } else {
        //is incorrect

        incorrectAnswer += 1;
        console.log("that was incorrect");

        //clears the input for next question
        inputAnswer.value = "";
    }

    

    questionCount += 1;
    document.querySelector(`div.question-card h3.question`).innerText = `Question ${quiz[questionCount].number}`;
    document.querySelector(`div.question-card p`).innerText = quiz[questionCount].question;
}

// event "click"ing submitAnswer button
submitAnswer.addEventListener("click", questionCountPlus,);
 


