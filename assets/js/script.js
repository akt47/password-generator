// Assignment code here
//variables of characters to select from
var passSelect = "";
var speChar = " !@#$%^&*+',-./:;<=>?~\|";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower= "abcdefghijklmnopqrstuvwxyz";
var num= "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// critieria prompts
function generatePassword() {

  //uppercase
  var up = window.prompt ("Do you want UPPERCASE?");
  if (up === true) { passSelect = passSelect + uppercase;
  }
  else{
    passSelect=passSelect;
  }
  console.log(up)
    
  //lowercase
  var low = window.prompt ("Do you want lowercase?");
  if (low === true) {
    passSelect = passSelect + lowercase;
  }
  else {
    passSelect=passSelect
  }
  console.log(low)

  //num
  var num = window.prompt ("Do you want a number?");
  if (num === true) {
    passSelect = passSelect + number;
  }
  else {
    passSelect=passSelect
  }
  console.log(num)

  //special Character
  var speChar = window.prompt ("Do you want special characters");
  if (speChar === true) {
    passSelect = passSelect + speChar
  }
else {
  passSelect = passSelect
}
console.log(speChar)

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
