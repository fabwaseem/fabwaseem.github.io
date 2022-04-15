const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const unit = document.getElementById("unit");
const result = document.getElementById("result");
const inputAmount = document.getElementById("input-amount");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const fas = document.querySelectorAll(".fa-angle-down");
const fromImage = document.getElementById("from-img");

let area = ['Square Kilometer', 'Square Meter', 'Square Mile', 'Square Yard', 'Square Foot', 'Square Inch', 'Hectare', 'Acre'];
let length = ['Kilometer', 'Meter', 'Centimeter', 'Milimeter', 'Nanometer', 'Mile', 'Yard', 'Foot','Inch'];
let temperature = ['Square Kilometer', 'Square Meter', 'Square Mile', 'Square Yard', 'Square Foot', 'Square Inch', 'Hectare', 'Acre'];
let volume = ['Square Kilometer', 'Square Meter', 'Square Mile', 'Square Yard', 'Square Foot', 'Square Inch', 'Hectare', 'Acre'];
let weight = ['Square Kilometer', 'Square Meter', 'Square Mile', 'Square Yard', 'Square Foot', 'Square Inch', 'Hectare', 'Acre'];
let time = ['Square Kilometer', 'Square Meter', 'Square Mile', 'Square Yard', 'Square Foot', 'Square Inch', 'Hectare', 'Acre'];

unit.addEventListener("click", () => {
  fas[0].classList.toggle("rotate");
  let html = "";
  if (unit.value == "area") {
    for (let i = 0; i <area.length; i++) {
      html += `<option value="${area[i]}">${area[i]}</option>`;
      from.innerHTML = html;
      to.innerHTML = html;
    }
  }
  else if (unit.value == "temperature") {
    for (let i = 0; i <temperature.length; i++) {
      html += `<option value="${temperature[i]}">${temperature[i]}</option>`;
      from.innerHTML = html;
      to.innerHTML = html;
    }
  }
  else if(unit.value == "volume") {
    for (let i = 0; i <area.length; i++) {
      html += `<option value="${area[i]}">${area[i]}</option>`;
      from.innerHTML = html;
      to.innerHTML = html;
    }
  }
  else if (unit.value == "weight") {
    for (let i = 0; i <area.length; i++) {
      html += `<option value="${area[i]}">${area[i]}</option>`;
      from.innerHTML = html;
      to.innerHTML = html;
    }
  }
  else if (unit.value == "time") {
    for (let i = 0; i <area.length; i++) {
      html += `<option value="${area[i]}">${area[i]}</option>`;
      from.innerHTML = html;
      to.innerHTML = html;
    }
  }
  else  {
    for (let i = 0; i <length.length; i++) {
      html += `<option value="${area[i]}">${area[i]}</option>`;
      from.innerHTML = html;
      to.innerHTML = html;
    }
  }
});
from.addEventListener("click", () => {
  fas[1].classList.toggle("rotate");
});
to.addEventListener("click", () => {
  fas[2].classList.toggle("rotate");
});

document.addEventListener("click", function (event) {
  var isClickInsideElement = to.contains(event.target);
  if (!isClickInsideElement) {
    fas[1].classList.remove("rotate");
  }
  var isClickInsideElement = from.contains(event.target);
  if (!isClickInsideElement) {
    fas[0].classList.remove("rotate");
  }
});
