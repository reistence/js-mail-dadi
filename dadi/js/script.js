// rnd nr for user
const userHand = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(userHand);
// user hand printed in index
const playerUser = document.getElementById("user-hand");
playerUser.innerHTML = userHand;

// rnd nr for cpu
const cpuHand = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(cpuHand);
// print cpu hand in index
const playerCpu = document.getElementById("cpu-hand");
playerCpu.innerHTML = cpuHand;

//grab where the winner will be displayed
const winner = document.getElementById("winner");

//initialise what will be displayed
let result = "";

//declare the winner and print it in winner
if (userHand > cpuHand) {
  result = "User won!";
  winner.innerHTML = result;
  winner.classList.add("green");
} else if (userHand < cpuHand) {
  result = "CPU won!";
  winner.innerHTML = result;
  winner.classList.add("red");
} else {
  result = "It's a tie!";
  winner.innerHTML = result;
  winner.classList.add("grey");
}
