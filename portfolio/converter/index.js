const api =
  "https://v6.exchangerate-api.com/v6/9f30fe54851971c47d15a2e4/latest/USD";

const amount = document.getElementById("amount");
const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const inputAmount = document.getElementById("input-amount");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const fas = document.querySelectorAll(".fa-angle-down");
const fromImage = document.getElementById("from-img");
const toImage = document.getElementById("to-img");
async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  const rates = data.conversion_rates;
  if (response) {
    let html = "";
    const arrKeys = Object.keys(rates);
    arrKeys.map((item) => {
      return (html += `<option value="${item}">${item}</option>`);
    });
    from.innerHTML = html;
    to.innerHTML = html;
    function update() {
      if (isNaN(amount.value)) {
        inam.style.display = "block";
      } else if (amount.value == "") {
        inam.style.display = "block";
      } else {
        inam.style.display = "none";
        inputAmount.innerHTML = amount.value;
        result.innerHTML =
          Math.round(
            ((amount.value * rates[to.value]) / rates[from.value]) * 100
          ) / 100;
        fromUnit.innerText = from.value;
        toUnit.innerText = to.value;
        input.classList.toggle("hide");
        output.classList.toggle("show");
      }
    }
    convert.addEventListener("click", update);

    from.addEventListener("change", () => {
      var str = from.value;
      str = str.slice(0, 2);
      fromImage.src = `https://www.countryflags.io/${str}/flat/64.png`;
    });
    to.addEventListener("change", () => {
      var str2 = to.value;
      str2 = str2.slice(0, 2);
      toImage.src = `https://www.countryflags.io/${str2}/flat/64.png`;
    });
    backBtn.addEventListener("click", () => {
      input.classList.toggle("hide");
      output.classList.toggle("show");
    });
    amount.addEventListener("keyup", () => {
      if (isNaN(amount.value)) {
        inam.style.display = "block";
      } else {
        inam.style.display = "none";
      }
    });
  }
}
getapi(api);

from.addEventListener("click", () => {
  fas[0].classList.toggle("rotate");
});
to.addEventListener("click", () => {
  fas[1].classList.toggle("rotate");
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
