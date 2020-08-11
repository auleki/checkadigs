const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");


// console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;questionCounterText
let questionCounter = 0;
let availableQuestions = [];


let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  },
  {
    question: "What function do you convert a letter to lowercase with",
    choice1: "string.().lowercase",
    choice2: "string.lowerCase()",
    choice3: "string = lowerCase()",
    choice4: "string.upperCase();",
    answer: 2
  },
  {
    question: "Which language is used for automation mostly?",
    choice1: "Python",
    choice2: "Java",
    choice3: "Javascript",
    choice4: "Elm",
    answer: 1
  },
  {
    question: "Use a spread operator push the new data to the end",
    choice1: "[{...data}, user]",
    choice2: "[{..data}, user];",
    choice3: "{user, ...data},",
    choice4: "const {index, i} = data",
    answer: 3
  }

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 6;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {

  if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign("/gameover.html");
  }

  questionCounter++;
  progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`
  // console.log((questionCounter / MAX_QUESTIONS) * 100);
  const quizProgress = `${(questionCounter / MAX_QUESTIONS)  * 100 }`
  console.log(quizProgress);
  progressBarFull.style.width = `${quizProgress}%`

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);  
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  

  choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion["choice" + number];    
  });
  console.log(availableQuestions);

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;  
};

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const isCorrect = selectedAnswer == currentQuestion.answer;

    const classToApply = isCorrect ? 'correct' : 'incorrect';
    console.log(classToApply.toString());

    if(classToApply === 'correct') {
      incrementScore(CORRECT_BONUS);
    } else {
      decrementScore(CORRECT_BONUS);
    }
    
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);

  });
});

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
}

decrementScore = num => {
  score-= num;
  scoreText.innerText = score;
}

startGame();
