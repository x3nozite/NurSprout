const slider = document.getElementById("serving-slider");
const output = document.getElementById("value");

slider.oninput = function () {
  output.textContent = this.value;
};
