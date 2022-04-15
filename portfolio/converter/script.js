
const inam = document.getElementById("inam");
const convert = document.getElementById("convert");
const input = document.querySelector(".input");
const output = document.querySelector(".output");
const backBtn = document.querySelector(".back-btn");
const hamBtn = document.getElementById("ham-btn");
const navbar = document.querySelector(".navbar ul");





hamBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
})