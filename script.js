'use strict'

const output = document.querySelector("#output");
const winState = document.querySelector("#winState");
const pageTitle = document.querySelector("title");
const body = document.querySelector("body");
const container = document.querySelector("#container");
const rockBtn = document.querySelector("#button0");
const paperBtn = document.querySelector("#button1");
const scissorsBtn = document.querySelector("#button2");


const score0 = document.querySelector("#score0");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

const count0 = document.querySelector("#count0");
const count1 = document.querySelector("#count1");
const count2 = document.querySelector("#count2");

let playerScore = 0
let tieScore = 0
let compScore = 0

let rockCount = 0
let paperCount = 0
let scissorsCount = 0

//for agnostic choosing from 3 items
function chooseThree(arg1, arg2, arg3) {
let num = Math.floor(Math.random() * 3);
if (num === 0) {
  return arg1;
} else if (num === 1) {
  return arg2;
} else {
  return arg3;
};
};

function setBgImage() {
  body.style.backgroundImage = chooseThree('url("scissors.jpg")', 'url("paper.png")', 'url("rock.jpg")');
}
function setPageTitle() {
  pageTitle.textContent = chooseThree("rock", "paper", "scissors");
}

function btnReorder() {
  let order = chooseThree(0, 1, 2);
  if (order === 0) {
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);
  } else if (order === 1) {
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);
    container.appendChild(rockBtn);
  } else {
    container.appendChild(scissorsBtn);
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
  };
};

function playGame(playerMove) {
  winState.className = '';
  output.className = '';
  btnReorder();
  setBgImage();
  setPageTitle();
  
  let whoWins = chooseThree(0, 1, 2)
  if (whoWins === 0) {
    winState.textContent = "you win";
    score0.textContent = (playerScore += 1)
    if (playerMove === "r") {
      output.textContent = "rock beats scissors";
      count0.textContent = (rockCount += 1)
      count2.textContent = (scissorsCount += 1)
    } else if (playerMove === "p") {
      output.textContent = "paper beats rock";
      count0.textContent = (rockCount += 1)
      count1.textContent = (paperCount += 1)
    } else {
      output.textContent = "scissors beats paper";
      count1.textContent = (paperCount += 1)
      count2.textContent = (scissorsCount += 1)
    };
  } else if (whoWins === 1) {
    winState.textContent = "you lose";
    score2.textContent = (compScore += 1)
    if (playerMove === "r") {
      output.textContent = "paper beats rock";
      count0.textContent = (rockCount += 1)
      count1.textContent = (paperCount += 1)
    } else if (playerMove === "p") {
      output.textContent = "scissors beats paper";
      count1.textContent = (paperCount += 1)
      count2.textContent = (scissorsCount += 1)
    } else {
      output.textContent = "rock beats scissors";
      count0.textContent = (rockCount += 1)
      count2.textContent = (scissorsCount += 1)
    };
  } else {
    winState.textContent = "you tie";
    score1.textContent = (tieScore += 1)
    if (playerMove === "r") {
      output.textContent = "rock ties with rock";
      count0.textContent = (rockCount += 2)
    } else if (playerMove === "p") {
      output.textContent = "paper ties with paper";
      count1.textContent = (paperCount += 2)
    } else {
      output.textContent = "scissors ties with scissors";
      count2.textContent = (scissorsCount += 2)
    };
  };
};

  //initialize before play
btnReorder();
setBgImage();
setPageTitle();

rockBtn.addEventListener('click', () => {playGame("r")});
paperBtn.addEventListener('click', () => {playGame("p")});
scissorsBtn.addEventListener('click', () => {playGame("s")});
