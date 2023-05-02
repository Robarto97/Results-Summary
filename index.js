const pointsSect = document.querySelector(".points");
let totalPoints = 0;

async function getData() {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}

async function renderData() {
  const data = await getData();
  data.map(createElement);

  const avg = Math.floor(totalPoints / data.length);

  document.querySelector(".circle > span").textContent = avg;
}

function createElement(data) {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${data.icon}" alt="" />
    <span>${data.category}</span>
    <p>
    <span>${data.score}</span> / 100
    </p>`;

  pointsSect.appendChild(div);
  totalPoints += Number(data.score);
}

renderData();
