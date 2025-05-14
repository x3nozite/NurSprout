const slider = document.getElementById("serving-slider");
const output = document.getElementById("value");

slider.oninput = function () {
  output.textContent = this.value;
};

const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const meridiemElem = document.getElementById("meridiem");

//Ensuring hour input stays in range on input and blur
function validateHour() {
  let val = parseInt(hourInput.value, 10);
  if (isNaN(val) || val < 1) val = 1;
  if (val > 12) val = 12;
  hourInput.value = val.toString().padStart(2, "0");
}

hourInput.addEventListener("change", validateHour);
hourInput.addEventListener("blur", validateHour);

//Ensuring minute input stays in range on input and blur
function validateMinute() {
  let val = parseInt(minuteInput.value, 10);
  if (isNaN(val) || val < 0) val = 0;
  if (val > 59) val = 59;
  minuteInput.value = val.toString().padStart(2, "0");
}

minuteInput.addEventListener("change", validateMinute);
minuteInput.addEventListener("blur", validateMinute);

// Toggle AM/PM on click or keyboard
function toggleMeridiem() {
  const current = meridiemElem.textContent;
  if (current === "AM") {
    meridiemElem.textContent = "PM";
    meridiemElem.setAttribute("aria-pressed", "true");
  } else {
    meridiemElem.textContent = "AM";
    meridiemElem.setAttribute("aria-pressed", "false");
  }
}

meridiemElem.addEventListener("click", toggleMeridiem);
meridiemElem.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMeridiem();
  }
});

// Initialize padding for inputs on page load
window.addEventListener("load", () => {
  validateHour();
  validateMinute();
});

// Handle Confirm Button

const confirmationButton = document.getElementById("confirm-button");

function linkToHome() {
  window.location.href = "home.html";
}

confirmationButton.addEventListener("click", linkToHome);
