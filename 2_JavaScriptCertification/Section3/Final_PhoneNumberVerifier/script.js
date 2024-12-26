const userIn = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const phoneNum= /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s,\-]?([0-9]{3})[\s,\-]?([0-9]{4})$/i;


const checkClicked = () => {
  if(!userIn.value || userIn.value.length === 0 ){
    alert("Please provide a phone number");
  }
  else{
    resultsDiv.textContent = phoneNum.test(userIn.value)? "Valid US number: "+userIn.value  : "Invalid US number: "+userIn.value
  }
}

const clearClicked = () =>{
  resultsDiv.textContent = "";
}

checkBtn.addEventListener("click",checkClicked);
clearBtn.addEventListener("click",clearClicked);
