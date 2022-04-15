const display = document.querySelector("#calc-display");
const keys = document.querySelectorAll(".calculator .btn");
var amt = display.value;
var mouseIsDown = false;
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", (e) => {
    var key = e.target.innerText;
    if (e.target.value == "remove" && amt != 0) {
        amt = amt.slice(0, -1);
        display.value = amt;
      if (amt == "") {
        amt = 0;
        display.value = amt;
      }
    }else if(key == "C" || key == "CE"){
        amt = 0;
        display.value = amt;
    }else if(key == "="){
        amt = eval(amt);
        amt = amt.toString();
        display.value = amt; 
    }else if(e.target.value == "pow"){
       amt = Math.pow(amt,2);
       amt = amt.toString();
       display.value = amt; 
    }
     else {
      if (amt == 0) {
        amt = "";
      }if(e.target.value != "remove" && amt.length <= 29){
      amt += key;
      display.value = amt;
      }
    }
  });
}

