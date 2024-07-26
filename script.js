document.addEventListener("DOMContentLoaded", () => {
  let gameBoard = document.querySelector(".GameBoard");
  let clearbtn = document.querySelector("#clearbtn");
  let currentTurn = "X";
  let tictactoe = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  function UpdateBoard() {
    gameBoard.innerHTML = "";
    tictactoe.forEach((value, index) => {
      let btn = document.createElement("button");
      btn.classList.add("gametile");
      btn.type = "button";
      btn.dataset.index = index; 
      btn.textContent = value;
      gameBoard.appendChild(btn);
    });
    let gametiles = document.querySelectorAll(".gametile");
    gametiles.forEach((tile) => {
      tile.addEventListener("click", (e) => {
        e.preventDefault();
        let index = e.target.dataset.index;
        if (tictactoe[index] === "X" || tictactoe[index] === "O") {
          alert("The tile is already chosen");
        } else {
          tictactoe[index] = currentTurn;
          e.target.textContent = currentTurn;
          currentTurn = currentTurn === "X" ? "O" : "X";
          checkWinner();
        }
      });
    });
  }

  function checkWinner() {
  
    const winningCombos = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]  
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (tictactoe[a] !== " " && tictactoe[a] === tictactoe[b] && tictactoe[a] === tictactoe[c]) {
        alert(`Player ${tictactoe[a]} won!`);
        return;
      }
    }


    if (tictactoe.every(cell => cell === "X" || cell === "O")) {
      alert("It's a draw!");
    }
  }

  clearbtn.addEventListener("click", () => {
    currentTurn = "X";
    tictactoe = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    UpdateBoard(); 
  });

  UpdateBoard(); 
});
