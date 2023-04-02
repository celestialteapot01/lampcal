let calculateBtn = document.getElementById("calculate");
let clearBtn = document.getElementById("clear");
let fixtureSelect = document.getElementById("fixture");
let hoursInput = document.getElementById("hours");
let resultBox = document.getElementById("result");
let changeLampMessage = document.getElementById("change-lamp-message");

calculateBtn.addEventListener("click", function() {
  let fixture = fixtureSelect.value;
  let hours = hoursInput.value;

  if (fixture === "MegaPointe") {
    let hoursRemaining = 1500 - hours;
    resultBox.textContent = "Actual Lamp Hours: " + hoursRemaining;
    changeLampMessage.textContent = "";
    if (hoursRemaining >= 800) {
      let changeLampBox = document.createElement("div");
      changeLampBox.classList.add("change-lamp-box");
      changeLampBox.textContent = "Change the Lamp";
      changeLampMessage.appendChild(changeLampBox);
    }
  } else if (fixture === "BMFL") {
    let hoursRemaining = 700 - hours;
    resultBox.textContent = "Actual Lamp Hours: " + hoursRemaining;
    changeLampMessage.textContent = "";
    if (hoursRemaining >= 500) {
      let changeLampBox = document.createElement("div");
      changeLampBox.classList.add("change-lamp-box");
      changeLampBox.textContent = "Change the Lamp";
      changeLampMessage.appendChild(changeLampBox);
    }
  } else {
    alert("Invalid fixture selection.");
  }
});

clearBtn.addEventListener("click", function() {
  fixtureSelect.selectedIndex = 0;
  hoursInput.value = "";
  resultBox.textContent = "";
  changeLampMessage.textContent = "";
});