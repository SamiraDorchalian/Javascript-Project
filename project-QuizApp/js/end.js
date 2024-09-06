const scoreEle = document.querySelector("p");
const buttonEle = document.querySelector("button");
const inputEle = document.querySelector("input");

const score = JSON.parse(localStorage.getItem("score"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

scoreEle.innerText = score;

const saveHandler = () => {
  if (!inputEle.value || !score) {
    alert("Invalid username or score");
  } else {
    const finalScore = { name: inputEle.value, score };
    highScores.push(finalScore);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(10);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    localStorage.removeItem("scores");
    window.location.assign("/");
  }
};

buttonEle.addEventListener("click", saveHandler);
