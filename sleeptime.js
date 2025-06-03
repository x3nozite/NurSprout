//slider
const slider = document.querySelector("#slider");

let first = 21;
let second = 30;

// Restore saved value
const savedValues = JSON.parse(localStorage.getItem("sleepSchedule"));
if (savedValues && Array.isArray(savedValues)) 
{
  first = parseInt(savedValues[0]);
  second = parseInt(savedValues[1]);
}

noUiSlider.create(slider, 
{
  start: [first, second],
  connect: true,
  range: {
    min: 17,
    max: 34,
  },
  step: 1,
  tooltips: [true, true],
  format: 
  {
    to: value => 
    {
      const hour = Math.floor(value % 24);
      const ampm = hour >= 12 ? 'pm' : 'am';
      const hour12 = hour % 12 === 0 ? 12 : hour % 12;
      return `${hour12}${ampm}`;
    },
    from: value => parseInt(value)
  }
});


const confirm = document.querySelector("#confirm-button");
const back = document.querySelector("#back-button");

confirm.addEventListener("click", () => 
{
  const sliderValue = slider.noUiSlider.get(true);
  localStorage.setItem("sleepSchedule", JSON.stringify(sliderValue));

  alert("Sleep Schedule updated");
  window.location.href = "home.html";
});

back.addEventListener("click", () => 
{ 
  window.location.href = "home.html "
});