const list = document.querySelector("ol");

const highScores = JSON.parse(localStorage.getItem("highScores") || []);

const content = highScores.map((score, index) => {
  return `
        <li>
            <span>${index + 1}</span>
            <p>${score.name}</p>
            <span>${score.score}</span>

        </l>
    `;
});
console.log(content);

list.innerHTML = content.join("");
