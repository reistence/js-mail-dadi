// Ask the user his mail
const userMailInput = document.getElementById("email");
const loginBtn = document.getElementById("loginbtn");
// create emails array
const verifiedMails = [
  "foo@gmail.com",
  "bar@gmail.com",
  "baz@gmail.com",
  "fizz@gmail.com",
  "buzz@gmail.com",
  "johnsmith@yahoo.com",
  "bob@outlook.com",
];
console.log(verifiedMails);

const access = document.getElementById("access");

let mailFound = false;
// on click
loginBtn.addEventListener("click", function () {
  const userMail = userMailInput.value;
  console.log(userMail);
  // iterate each mail and see if there's some match
  for (let i = 0; i < verifiedMails.length; i++) {
    // Check if their address can be granted the access
    const currentMail = verifiedMails[i];
    if (userMail === currentMail) {
      mailFound = true;
    }
    console.log(userMail, currentMail, mailFound);
  }
  // print whether or not they can access
  if (mailFound === true) {
    access.innerHTML = `Congrats ${userMail} your access has been granted.`;
    // add status color class and remove the other if present
    access.classList.add("green");
    access.classList.remove("red");
  } else {
    access.innerHTML = `${userMail} your access has been denied. Only authorised personnel can access this page.`;
    // add status color class and remove the other if present
    access.classList.remove("green");
    access.classList.add("red");
  }
  mailFound = false;
});
