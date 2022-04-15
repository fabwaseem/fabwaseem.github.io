const bDay = document.querySelector("#bday");
const tDay = document.querySelector("#tday");
const ageInSeconds = document.getElementById("age-in-seconds");
const ageInMinutes = document.getElementById("age-in-minutes");
const ageInHours = document.getElementById("age-in-hours");
const ageInDays = document.getElementById("age-in-days");
const inam2 = document.getElementById("inam2");

backBtn.addEventListener("click", () => {
  input.classList.toggle("hide");
  output.classList.toggle("show");
});
bday.addEventListener("change", () => {
    inam.style.display = "none";
})
tday.addEventListener("change", () => {
    inam2.style.display = "none";
})
tday.valueAsDate = new Date();

convert.addEventListener("click", () => {
  var foo = bday.value;
  var foo2 = tday.value;
  var year = foo.slice(0, 4);
  var year2 = foo2.slice(0, 4);

if(isNaN(new Date(foo))) {
    inam.style.display = "block";
    
}else if(isNaN(new Date(foo2))){
    inam2.style.display = "block";
}else if(year < 1900 || year > 2021){
        inam.style.display = "block";
}
else if(year2 < 1900 || year2 > 2021){
        inam2.style.display = "block";
}else{
    var seconds = (new Date(tday.value) - new Date(bday.value)) / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    ageInSeconds.innerHTML = parseInt(seconds);
    ageInMinutes.innerHTML = parseInt(minutes);
    ageInHours.innerHTML = parseInt(hours);
    ageInDays.innerHTML = parseInt(days);
    input.classList.toggle("hide");
  output.classList.toggle("show");
      }

});
