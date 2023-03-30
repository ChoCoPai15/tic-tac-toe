const mainBox = document.querySelector(".page");
const boxes = document.querySelectorAll(".box");
const button = document.querySelector(".button");
const main = document.querySelector(".page");
const activePlayer = document.querySelector(".active_player");
const winnerAlert = document.querySelector(".winner_alert");
let active = "cross";

const stopGame = function () {
  for (let box of boxes) {
    box.removeEventListener("click", myEventListener);
  }
};

const endGame = function () {
  winnerAlert.classList.remove("hidden");
  button.classList.remove("hidden");
  button.innerHTML = "ПОЧАТИ ЗАНОВО";
  main.classList.add("blur");
  main.classList.add("blur-in");
  crossWin.splice(0, crossWin.length);
  circleWin.splice(0, circleWin.length);
};
let crossWin = [];
let circleWin = [];
let checkWinner = function (arr) {
  let way1 = arr.includes("1") && arr.includes("2") && arr.includes("3");
  let way2 = arr.includes("4") && arr.includes("5") && arr.includes("6");
  let way3 = arr.includes("7") && arr.includes("8") && arr.includes("9");
  let way4 = arr.includes("1") && arr.includes("4") && arr.includes("7");
  let way5 = arr.includes("2") && arr.includes("5") && arr.includes("8");
  let way6 = arr.includes("3") && arr.includes("6") && arr.includes("9");
  let way7 = arr.includes("1") && arr.includes("5") && arr.includes("9");
  let way8 = arr.includes("3") && arr.includes("5") && arr.includes("7");
  if (way1 || way2 || way3 || way4 || way5 || way6 || way7 || way8) {
    return true;
  }
};
const myEventListener = function (e) {
  if (e.target.matches(".box")) {
    const box = e.target;
    box.removeEventListener("click", myEventListener);
    let numberItem =
      e.target.classList.item(0)[e.target.classList.item(0).length - 1];
    box.classList.add(active);
    if (active === "cross") {
      activePlayer.innerHTML = "ХІД ГРАВЦЯ 2";
      console.log("it's cross");
      active = "circle";
      console.log(numberItem);

      crossWin.push(numberItem);
      if (checkWinner(crossWin)) {
        console.log("Гравець 1 виграв!!!");
        activePlayer.classList.add("hidden");
        winnerAlert.innerHTML = "ГРАВЕЦЬ 1 ВИГРАВ!";
        stopGame();
        endGame();
      }
    } else {
      activePlayer.innerHTML = "ХІД ГРАВЦЯ 1";
      console.log("it's circle");
      active = "cross";
      console.log(numberItem);

      circleWin.push(numberItem);
      if (checkWinner(circleWin)) {
        console.log("Гравець 2 виграв!!!");
        activePlayer.classList.add("hidden");
        winnerAlert.innerHTML = "ГРАВЕЦЬ 2 ВИГРАВ!";
        stopGame();
        endGame();
      }
    }
    console.log(crossWin);
    box.removeEventListener("click", myEventListener);
  }
};

button.addEventListener("click", function (e) {
  active = "cross";

  main.classList.remove("blur");
  main.classList.add("blur-out");
  button.classList.add("hidden");
  activePlayer.classList.remove("hidden");
  for (let box of boxes) {
    box.classList.remove("cross");
    box.classList.remove("circle");
  }
  winnerAlert.classList.add("hidden");
  boxes.forEach((box) => box.addEventListener("click", myEventListener));
});
