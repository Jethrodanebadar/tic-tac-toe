document.addEventListener("DOMContentLoaded", () => {
  let gameBoard = document.querySelector(".GameBoard");
  let clearbtn = document.querySelector("#clearbtn");
  let currentTurn = "X";
  let isWinner = false;
  let tictactoe = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  while (isWinner === false) {
    function UpdateBoard() {
      gameBoard.innerHTML = '';
      tictactoe.forEach((tilerow, tileindex) => {
        tilerow.forEach(tile => {
          tile = document.createElement("button");
          tile.classList.add("gametile");
          tile.type = "button";
          gameBoard.appendChild(tile);
        });
      });
      let gametiles = document.querySelectorAll(".gametile");
      gametiles.forEach((tile) => {
        tile.addEventListener("click", (e) => {
          tile.textContent = currentTurn;
          currentTurn = currentTurn == "X" ? "O" : "X";
          checkWinner();
        });
      });
    }

    
  function checkWinner() {
    for (let i = 0; i < 3; i++) {
      if (
        tictactoe[i][0] === "X" &&
        tictactoe[i][1] === "X" &&
        tictactoe[i][2] === "X"
      ) {
        alert("player X won!");
        isWinner = true;
        return;
      } else if (
        tictactoe[0][i] === "X" &&
        tictactoe[1][i] === "X" &&
        tictactoe[2][i] === "X"
      ) {
        alert("player X won!");
        isWinner = true;
        return;
      } else if (
        tictactoe[i][0] === "Y" &&
        tictactoe[i][1] === "Y" &&
        tictactoe[i][2] === "Y"
      ) {
        alert("player Y won!");
        isWinner = true;
        return;
      } else if (
        tictactoe[0][i] === "O" &&
        tictactoe[1][i] === "O" &&
        tictactoe[2][i] === "O"
      ) {
        alert("player O won!");
        isWinner = true;
        return;
      }
    }
  }   
  UpdateBoard(); 
  }
  
  clearbtn.addEventListener("click", ()=>{
    let gametiles = document.querySelectorAll(".gametile");    
    gametiles.forEach((tile) => {
        tile.addEventListener("click", (e) => {
          tile.textContent = '';
        });
      });
  });

});
