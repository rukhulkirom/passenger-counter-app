const countEL = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
let count = 0;

incrementBtn.addEventListener("click", function () {
  count += 1;
  countEL.textContent = count;
});

saveBtn.addEventListener("click", function () {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  countEL.textContent = 0;
  count = 0;
});
