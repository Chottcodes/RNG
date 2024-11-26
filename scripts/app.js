let s1firstName = document.getElementById("s1-first");
let s1lastName = document.getElementById("s1-last");
let s1codemail = document.getElementById("s1-code");
let s1personmail = document.getElementById("s1-pers");
let s2first = document.getElementById("s2-first");
let s2last = document.getElementById("s2-last");
let s2cm = document.getElementById("s2-code");
let s2pm = document.getElementById("s2-pers");
let s3first = document.getElementById("s3-first");
let s3last = document.getElementById("s3-last");
let s3cm = document.getElementById("s3-code");
let s3pm = document.getElementById("s3-pers");
let s4first = document.getElementById("s4-first");
let s4last = document.getElementById("s4-last");
let s4cm = document.getElementById("s4-code");
let s4pm = document.getElementById("s4-pers");
let s5first=document.getElementById("s5-first");
let s5last=document.getElementById("s5-last");
let s5cm=document.getElementById("s5-code");
let s5pm=document.getElementById("s5-pers")
let resetBTN = document.getElementById("reset-BTN");

let genBTN = document.getElementById("gen-BTN");

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {

    function randomNames() {
      let classname = data.names;
      const randomNameIndex = Math.floor(Math.random() * classname.length);
      return classname[randomNameIndex];
    }


    genBTN.addEventListener("click", function () {
      let randomnames1 = randomNames();
      s1firstName.innerText = `${randomnames1.firstName}`;
      s1lastName.innerText = `${randomnames1.lastName}`;
      s1codemail.innerText = `${randomnames1.codestackEmail}`;
      s1personmail.innerText = `${randomnames1.personalEmail}`;

      let randomnames2 = randomNames();
      s2first.innerText=`${randomnames2.firstName}`;
      s2last.innerText=`${randomnames2.lastName}`;
      s2cm.innerText=`${randomnames2.codestackEmail}`;
      s2pm.innerText=`${randomnames2.personalEmail}`;

      let randomnames3 = randomNames();
      s3first.innerText=`${randomnames3.firstName}`;
      s3last.innerText=`${randomnames3.lastName}`;
      s3cm.innerText=`${randomnames3.codestackEmail}`;
      s3pm.innerText=`${randomnames3.personalEmail}`;

      let randomnames4 = randomNames();
      s4first.innerText=`${randomnames4.firstName}`;
      s4last.innerText=`${randomnames4.lastName}`;
      s4cm.innerText=`${randomnames4.codestackEmail}`;
      s4pm.innerText=`${randomnames4.personalEmail}`;

      let randomnames5 =randomNames();
      s5first.innerText=`${randomnames5.firstName}`;
      s5first.innerText=`${randomnames5.lastName}`;
      s5cm.innerText=`${randomnames5.codestackEmail}`;
      s5pm.innerText=`${randomnames5.personalEmail}`;
    });
  });
