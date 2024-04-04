const display = document.getElementById("display");

function clicktodisplay(input){
  display.value += input;
}

function clicktoclear(input){
  display.value = "";
}

function calculate(input){
try{
  display.value = eval(display.value);
} 
catch(error){
  display.value = 'Error'
}
  if(display.value=='4004' || eval(display.value)=='4004'){
    display.value = "haha nice try XD"
  }
}
