let s1firstName = document.getElementById("s1-first");
let s1lastName = document.getElementById("s1-last");
let s1codemail = document.getElementById("s1-code");
let s1personmail = document.getElementById("s1-pers");
let resetBTN = document.getElementById("reset-BTN");
let history = [];

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

      const nameEntry = `${randomnames1.firstName} ${randomnames1.lastName}`;
      history.unshift(nameEntry);
      if (history.length > 5) {
        history.pop(); 
      }
      updateHistoryList();
    });
    function updateHistoryList() {
      let pastnames = document.getElementById("past-names");
      pastnames.innerHTML = "";
      history.forEach((name) => {
        const listItem = document.createElement("li");
        listItem.innerText = name;
        pastnames.appendChild(listItem);
      });
    
    }
  });
