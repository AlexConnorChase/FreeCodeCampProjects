const textField = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultField = document.getElementById("result");
///let textStack= "";
var regx = /[\W_]/g; //Regular expression to exclude non-word characters

function checkPalindrome(text){
  // Credit to freeCodeCamp's tutorial on effecient palindrome checking, 
  //which reduced my original plan of using a stack-like array with a simple
  //reversal and comparison
  let newText=text.toLowerCase().replace(regx, "");
  let reverseText = newText.split('').reverse().join('');
  return newText === reverseText;
}

function checkClicked(){
  if(checkPalindrome(textField.value)){
    resultField.innerText = textField.value + " is a palindrome"
  }
  else{
    resultField.innerText = textField.value + " is not a palindrome"
  }
}

function popUpAlertCheck(){
  if(textField.value === ""){
    alert("Please input a value");
  }
  else{
    checkClicked();
  }
}

checkButton.addEventListener("click", popUpAlertCheck);
