const highScoreList = document.getElementById("highScoreList");
const highScores = JSON.parse(localStorage.getItem("highScore")) || [];

// console.log(highScores)
highScoreList.innerHTML =  highScores.map(score => {
  return `<li class="high-score"><span>${score.name}</span> | <span class="score">${score.score}</span></li>`
}).join("")
