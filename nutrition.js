// Serving size input value

const slider = document.getElementById("serving-slider");
const output = document.getElementById("value");

slider.oninput = function () {
  output.textContent = this.value;
};

//Ensuring hour input stays in range on input and blur

const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const meridiemElem = document.getElementById("meridiem");

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

//Initialisation of banana nutrient

const bananaNutrition = {
  carbs: 12,
  protein: 0.6,
  fat: 0.2,
};

// Update the nutrition data

function addNutrition() {
  const servingSizeValue = slider.value;

  return confirm(
    `Are you sure the data is correct for ${servingSizeValue} serving(s)?`
  );
}

const confirmationButton = document.getElementById("confirm-button");

confirmationButton.addEventListener("click", function (event) {
  event.preventDefault();

  const servingSizeValue = slider.value;

  var totalCarbs = servingSizeValue * bananaNutrition.carbs;
  var totalProtein = servingSizeValue * bananaNutrition.protein;
  var totalFat = servingSizeValue * bananaNutrition.fat;

  if (addNutrition()) {
    localStorage.setItem("Little Angelcarbohydrates", totalCarbs);
    localStorage.setItem("Little Angelprotein", totalProtein);
    localStorage.setItem("Little Angelfats", totalFat);

    alert("Thank you! Nutrition Saved.");
    window.location.href = "/home.html";
  }
});
