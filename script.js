const quesitons = [
    {
        quesiton:"Who is the father of Computers?",
        answers:[
            {text:"James Gosling", correct: false},
            {text:"Charles Babbage", correct: true},
            {text:" Dennis Ritchie" , correct: false},
            {text:"Bjarne Stroustrup", correct:false},
        ]
    },
    {
        quesiton:"What is the full form of CPU? ",
        answers:[
            {text:" Computer Processing Unit", correct: false},
            {text:"Computer Principle Unit", correct: false},
            {text:"Central Processing Unit" , correct: true},
            {text:"Control Processing Unit", correct:false}
        ]
    },
    {
        quesiton:"Which of the following language does the computer understand?",
        answers:[
            {text:"Computer understands only C Language", correct: false},
            {text:" Computer understands only Assembly Language", correct: false},
            {text:"Computer understands only Binary Language" , correct: true},
            {text:"Computer understands only BASIC", correct:false}
        ]
    },
    {
        quesiton:"Which of the following computer language is written in binary codes only?",
        answers:[
            {text:"pascal", correct: false},
            {text:"machine language", correct: true},
            {text:" C" , correct: false},
            {text:"C#", correct:false}
        ]
    },
    {
        quesiton:"Which of the following is the brain of the computer?",
        answers:[
            {text:" Central Processing Unit", correct: true},
            {text:"Memory", correct: false},
            {text:"Arithmetic and Logic unit" , correct: false},
            {text:"Control unit", correct:false}
        ]
    },
    {
        quesiton:" Which of the following is not a characteristic of a computer?",
        answers:[
            {text:"Versatility", correct: false},
            {text:"Accuracy", correct: false},
            {text:"Diligence" , correct: false},
            {text:"I.Q.", correct:true}
        ]
    },
    {
        quesiton:"Which of the following is the smallest unit of data in a computer? ",
        answers:[
            {text:" Bit", correct: true},
            {text:"KB", correct: false},
            {text:"Nibble" , correct: false},
            {text:" Byte", correct:false}
        ]
    },
    {
        quesiton:"Which of the following is not a type of computer code?",
        answers:[
            {text:"EDIC", correct: true},
            {text:" ASCII", correct: false},
            {text:"BCD" , correct: false},
            {text:" EBCDIC", correct:false}
        ]
    },
    {
        quesiton:". Which of the following is used in EBCDIC?",
        answers:[
            {text:" Super Computers", correct: false},
            {text:"Mainframes", correct: true},
            {text:"Machine Codes" , correct: false},
            {text:" Programming", correct:false}
        ]
    },
    {
        quesiton:" Which of the following are physical devices of a computer?",
        answers:[
            {text:" Hardware", correct: true},
            {text:"Software", correct: false},
            {text:"System Software" , correct: false},
            {text:" Package ", correct:false}
        ]
    },
];



const quesitonElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = quesitons[currentQuestionIndex];
    let quesitonNo = currentQuestionIndex + 1;
    quesitonElement.innerHTML = quesitonNo + ". " + currentQuestion.quesiton;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score ++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.display = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    quesitonElement.innerHTML = `You Scored ${score} out of ${quesitons.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < quesitons.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < quesitons.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

