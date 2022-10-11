// Ask the user his mail
const userMailInput = document.getElementById("email");
const loginBtn = document.getElementById("loginbtn");

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

let mailFound = false;

loginBtn.addEventListener("click", function () {
  const userMail = userMailInput.value;
  console.log(userMail);

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
    alert(`${userMail} your access has been granted`);
  } else {
    alert(`${userMail} your access has been denied`);
  }
});
