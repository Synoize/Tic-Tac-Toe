let boxes = document.querySelectorAll("#box");
let winMsg = document.querySelector("#winner");
let msgContainer = document.querySelector("#msg-container");
let newBtn = document.querySelector("#msg-container #new-game");
let resetBtn = document.querySelector("#reset");

let turnO = true; //player-X, player-O

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],

];

const newGame = () => {
    enableBoxes();
    msgContainer.style = "display:none"

}


const resetGame = () => {
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) { //player-O
            box.innerText = "O";
            turnO = false;
        } else { //player-X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; //for not change box value

        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);

                showWinner(pos1Val);
            }

        }
    }
}

const showWinner = (winner) => {
    winMsg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.style = "height:100vh; display:flex; flex-direction: column; justify-content:center; align-items: center; "
    disableBoxes();// after winner diside all boxes are disabled
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", newGame);