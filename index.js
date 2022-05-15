let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));
let clearAfterEqual = true;

let controlOperator = true;
let controlDot = true;

buttons.map( button => {
  button.addEventListener("click",(e) => {
    switch(e.target.innerText){
      case "C":
        display.innerText = "0";
        break;
      case "←":
        if(display.innerText){
          if(display.innerText === "Error!" || display.innerText.length === 1){
            display.innerText = "0"
            break
          }
          display.innerText = display.innerText.slice(0,-1);
        }
        break;
      case "+":
        controlDot = true;
        if (controlOperator){
          if(display.innerText[display.innerText.length-1] === "." ){
            display.innerText += "0";
            display.innerText += e.target.innerText;
            controlOperator = false;
            break;
          }
          else if (display.innerText[0] === e.target.innerText || display.innerText[0] === "0" && display.innerText.indexOf(".") === -1){
            display.innerText = "0";
            break;
          }
          else {
            display.innerText += e.target.innerText;
            controlOperator = false;
            break;
        }
        }
        else{
          return
        }
      case "-":
        controlDot = true;
        if (controlOperator){
          if(display.innerText[display.innerText.length-1] === "."){
            display.innerText += "0";
            display.innerText += e.target.innerText;
            controlOperator = false;
          }
          else if (display.innerText[0] === e.target.innerText || display.innerText[0] === "0"){
            display.innerText = "0";
            break;
          }
          else {
            display.innerText += e.target.innerText;
            controlOperator = false;
        }
        }
        else{
          return
        }
      case "*":
        controlDot = true;
        if (controlOperator){
          if(display.innerText[display.innerText.length-1] === "."){
            display.innerText += "0";
            display.innerText += e.target.innerText;
            controlOperator = false;
          }
          
          else if (display.innerText[0] === e.target.innerText || display.innerText[0] === "0"){
            display.innerText = "0";
            break;
          }
          else {
            display.innerText += e.target.innerText;
            controlOperator = false;
          }
        }
        else{
          return
        }
      case "/":
        controlDot = true;
        if (controlOperator){
          if(display.innerText[display.innerText.length-1] === "." ){
            display.innerText += "0";
            display.innerText += e.target.innerText;
            controlOperator = false;
          }
          else if (display.innerText[0] === e.target.innerText || display.innerText[0] === "0"){
            display.innerText = "0";
            break;
          }
          else {
            display.innerText += e.target.innerText;
            controlOperator = false;
            break;
          }
        }
        else{
          return
        }  

      case ".":
        if (controlDot){
          if (display.innerText[display.innerText.length-1] === "+"){
            display.innerText += "0";
            display.innerText += e.target.innerText;
            controlOperator = false;
            break;
          }
          
          else if (display.innerText[0] === e.target.innerText ){
            display.innerText = "0";
            break;
          }
          
          else {
            display.innerText += e.target.innerText;
            controlDot = false;
            break;
          }
        }

        else{
          return
        }
        
      case "0":
        if (!clearAfterEqual ){
          display.innerText = "";
          display.innerText += e.target.innerText;
          clearAfterEqual = true;
        }
        else if (display.innerText === "0"){
          return
        }
        else{
          display.innerText += e.target.innerText;
          clearAfterEqual=true;
        }
        break;
      case "=":
        clearAfterEqual = false;
        controlOperator = false;
        try{
          display.innerText =eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      default:
        if (!clearAfterEqual ){
          display.innerText = "";
          display.innerText += e.target.innerText;
          clearAfterEqual = true;
          controlOperator = true;
        }
        
        else{
          console.log(display.innerText)
          if (display.innerText === '0' || display.innerText === ""){
            display.innerText = "";
          }
          display.innerText += e.target.innerText;
          controlOperator = true;
          clearAfterEqual = true;
        }
          
        }
        
    }
  );
});