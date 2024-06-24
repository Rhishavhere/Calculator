const display2 = document.getElementById("display2");
const display1 = document.getElementById("display1");
const status = document.getElementById("status");
const history = document.getElementById("history");

const audio=new Audio();
audio.src="tap.mp3";

function clearHistory(){
  history.innerText="";
}

function toggle(){
  status.innerText="Soon!"
}

function appendToDisplay(input){
  display2.value += input;
  audio.play();
}


function clearDisplay(input){
  display2.value ="";
  display1.value ="";
  audio.play();
  status.innerText="Watching"
}

function backspace(input) {
  display2.value = display2.value.slice(0, -1);
  audio.play();
}

function calculate(){
  audio.play();
  display1.value = display2.value;
  try{
    display2.value = eval(display2.value);
    history.innerText+=display1.value+" = "+display2.value+"\n";
  }
  catch(error){
    display2.value = "Error";
    status.innerText="oops";
  }

  if(display2.value=="80085"){
    status.innerText="boobies?";
  }
  else if(display2.value=="69"){
    status.innerText="you perv!"
  }
  else if(display2.value=="420"){
    status.innerText="bro relax!"
  }
}