let turn = "x";
let squares = [];
let winningMessageTextElement = document.querySelector("[data-winning-message-text]");
let winningMessageElement = document.getElementById("winningMessage");

window.addEventListener("load", (event) => {
  document.getElementById("resetButton").onclick = function () {
    location.reload(true);
  };
});

function finalWinner(num1, num2, num3) {
  winningMessageTextElement.innerText = `${squares[num1]} is the Winner`;
  document.getElementById("item" + num1).style.background = "#e89d93";
  document.getElementById("item" + num2).style.background = "#e89d93";
  document.getElementById("item" + num3).style.background = "#e89d93";
  winningMessageElement.classList.add("show");
}

function isDraw() {
  winningMessageTextElement.innerText = "It's a DRAW!!";
  winningMessageElement.classList.add("show");
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }

  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[3] != ""
  ) {
    finalWinner(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    finalWinner(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    finalWinner(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    finalWinner(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    finalWinner(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    finalWinner(3, 6, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[7] != ""
  ) {
    finalWinner(3, 5, 7);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    finalWinner(1, 5, 9);
  } else if (squares.every((element) => element != "")) {
    isDraw();
  }
}

function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "o";
    title.innerHTML = "O's Turn";
    element.style.cursor = "not-allowed";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "x";
    title.innerHTML = "X's Turn";
    element.style.cursor = "not-allowed";
  }

  winner();
}
