let display = document.getElementById("inp");
let buttons = document.querySelectorAll(".buttons button")

let firstNum = "";
let operator = "";
let secondNum  = "";

buttons.forEach(button =>{
  button.addEventListener("click" , () =>{
    let value = button.innerText;

      if(value==="clear"){
        firstNum="";
        operator ="";
        secondNum = "";
        display.value = "";
      }
      else if(value==="del"){
        display.value = display.value.slice(0,-1);
      }
      else if(value==="+" ||value==="-" ||value==="*" ||value==="/" ||value==="%"){
        operator = value;
        firstNum = display.value;
        display.value = "";
      }
      else if(value==="="){
        secondNum = display.value;

        let num1 = Number(firstNum);
        let num2 = Number(secondNum);
        let result;

        if(operator ==="+") result = num1+num2;
        if(operator ==="-") result = num1-num2;
        if(operator ==="*") result = num1*num2;
        if(operator ==="/") result = num1/num2;
        if(operator ==="%") result = (num1/100)*num2;

        display.value = result;
      }
      else{
        display.value+=value;
      }

  });
});