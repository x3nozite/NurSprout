const slider = document.querySelector("#slider");

noUiSlider.create(slider, {
  start: [21, 30], // 5PM to 10AM next day
  connect: true,
  range: {
    min: 17,
    max: 34,
  },
  step: 1,
  tooltips: [true, true],
  format: {
    to: value => {
      const hour = Math.floor(value % 24);
      const ampm = hour >= 12 ? 'pm' : 'am';
      const hour12 = hour % 12 === 0 ? 12 : hour % 12;
      return `${hour12}${ampm}`;
    },
    from: value => parseInt(value)
  }
});
