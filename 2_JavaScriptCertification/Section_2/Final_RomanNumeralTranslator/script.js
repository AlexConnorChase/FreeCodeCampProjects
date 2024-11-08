const inputField = document.getElementById("number");
const cnvrtBtn = document.getElementById("convert-btn");
const outputField = document.getElementById("output");

const numeralArray = ["I","V","X","L","C","D","M"];


function checkValid(num){
  if(num < 0){
    outputField.innerText = "Please enter a number greater than or equal to 1"
    return false;
  }
  else if(num > 3999){
    outputField.innerText = "Please enter a number less than or equal to 3999"
    return false;
  }
  return true;
}

function translateNumerals(numStr){
  let strOut = ""
  for(let i = 0; i < numStr.length; i++){
    let ind = (2*(numStr.length - i))-2;
    console.log("Index of " + i + " is " + ind);
    let charNum = parseInt(numStr[i]);
    if(charNum === 9){
      strOut += numeralArray[ind] + numeralArray[ind+2];
    }
    else if (charNum >= 5){
      let y = charNum-5;
      strOut+=numeralArray[ind+1];
      while(y > 0){
        strOut+=numeralArray[ind];
        y--;
      }
    }
    else if (charNum === 4){
      strOut += numeralArray[ind] + numeralArray[ind+1];
    }
    else if (charNum >= 1){
      let y = charNum;
      while(y > 0){
        strOut+=numeralArray[ind];
        y--;
      }
    }
  }
  outputField.innerText = strOut;
}

function cnvrtClicked(){
  let numStr = inputField.value;
  if(!numStr){
    outputField.innerText =
"Please enter a valid number";  }
  else{
    let num = parseInt(numStr);
  if(checkValid(num)){
    /* Do Translation Here*/
    translateNumerals(numStr);
  }
  }
}

cnvrtBtn.addEventListener("click", cnvrtClicked);
