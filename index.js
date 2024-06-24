const display2 = document.getElementById("display2");
const display1 = document.getElementById("display1");
let isClicked=false;

function appendToDisplay(input){
  if(isClicked){
    display2.value=Math.log(display2.value);
  }
  else{
    display2.value += input;
    audio.play();
  }
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

function calculate(input){
  audio.play();
  display1.value = display2.value;
  try{
    display2.value = eval(display2.value);
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

const toggle=()=>{
  let multi =document.getElementById("multi");
  
  if(!isClicked){
    multi.innerText="Ln"
    isClicked=true;
  }
  else{
    multi.innerText="x"
    isClicked=false;
  }
}

const audio=new Audio();
audio.src="tap.mp3";