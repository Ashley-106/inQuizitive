
let questionCount = 0;
const question = document.querySelector('p');
const submitAnswer = document.getElementById('submitAnswer');
question.innerHTML = quiz[0].question;

let questionCountPlus = function() {
    questionCount += 1;
}

submitAnswer.addEventListener("click", questionCountPlus);
 
if (questionCount > 1) {
    console.log("good");
}

console.log(questionCount);