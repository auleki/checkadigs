const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("questionCounter");
const loader = document.getElementById("loader");
const game = document.getElementById("game");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
// const 



// console.log(choices);





let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
questionCounterText
let questionCounter = 0;
let availableQuestions = [];
let questions = []

// const baseURL = "https://opentdb.com/api.php?amount=3&category=27&difficulty=easy&type=multiple";
// const baseURL = "questions.json";
// const baseURL = "https://raw.githubusercontent.com/auleki/checkadigs/master/questions.json";
// fetch(baseURL)
//   .then(res => res.json())
//   .then(data => {
//     const fetchedData = JSON.stringify(data);
//     console.log(fetchedData);
//   }).catch(e => console.log(e))


fetch('questions.json')
  // .then(res => res)
  // .then(data => console.log(data))
  // .catch(err => console.log(err))

  .then(res => res)
  .then(data => {
    const fetchedQuestions = data.url
    console.log(fetchedQuestions)
    // console.log(fetchedQuestions);
    // questions = fetchedQuestions.map(loadedQuestion => {
    //   const formattedQuestion = {
    //     question: loadedQuestion.question
    //   };

    //   const answerChoices = [...loadedQuestion.incorrect_answers];
    //   formattedQuestion.answer = Math.floor(Math.random() * 3) * 1;
    //   answerChoices.splice(
    //     formattedQuestion.answer - 1, 
    //     0,
    //     loadedQuestion.correct_answer
    //     );
        
    //   answerChoices.forEach((choice, index) => {
    //     formattedQuestion["choice" + (index + 1)] = choice;
    //   });

    //   return formattedQuestion;

    // })
    
    // startGame();
  }).catch(e => console.log(e))


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  // console.log(availableQuestions);
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};



getNewQuestion = () => {
  // if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
  //   localStorage.setItem('mostRecentScore', score);
  //   return window.location.assign("/gameover.html");
  //   return console.log('no questions')
  // }

  if(questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign("/gameover.html");
    // return console.log('no questions')
  }

  questionCounter++;
  progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`
  // console.log((questionCounter / MAX_QUESTIONS) * 100);
  const quizProgress = `${(questionCounter / MAX_QUESTIONS)  * 100 }`
  // console.log(quizProgress);
  progressBarFull.style.width = `${quizProgress}%`

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);  
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;
  

  choices.forEach( choice => {
    const number = choice.dataset['number'];
    choice.innerText = currentQuestion["choice" + number];    
  });
// console.log(availableQuestions);

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
