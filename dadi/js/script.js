const userHand = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(userHand);

const cpuHand = Math.floor(Math.random() * (6 - 1 + 1) + 1);
console.log(cpuHand);
if (userHand > cpuHand) {
  alert("User won");
} else if (userHand < cpuHand) {
  alert("CPU won");
} else {
  alert("It's a tie");
}

//  prompt(`User has ${userHand} while cpu has ${cpuHand}, `);
