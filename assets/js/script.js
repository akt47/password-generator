// Assignment code here
//variables of characters to select from
var passSelect = "";
var character = " !@#$%^&*+',-./:;<=>?~\|";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower= "abcdefghijklmnopqrstuvwxyz";
var number= "0123456789";

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
  var up = window.confirm ("Do you want UPPERCASE?");
  if (up === true) { passSelect = passSelect + upper;
  }
  else{
    passSelect=passSelect;
  }

    
  //lowercase
  var low = window.confirm ("Do you want lowercase?");
  if (low === true) {
    passSelect = passSelect + lower;
  }
  else {
    passSelect=passSelect
  }
 

  //num
  var num = window.confirm ("Do you want numbers?");
  if (num === true) {
    //pulls from num
    passSelect = passSelect + number;
  }
  else {
    passSelect=passSelect
  }


  //special Character
  var speChar = window.confirm ("Do you want special characters");
  if (speChar === true) {
    //pulls from speChar
    passSelect = passSelect + character
  }
else {
  passSelect = passSelect
}
console.log(speChar)

  var passLength = parseInt (window.prompt("Choose length of password. Needs to be between 8-128."))
   //allow input between 8 and 128
  if (passLength >=8 && passLength <=128) {
   // blank to add random characters
    var Password = ""
          // runs the loop for the selected number of times
    for (var i=0; i< passLength; i++) {
      //charAt pulls from the entire string, Math.floor Math.random makes the selection random
      var passwordText = passSelect.charAt(Math.floor(Math.random()* passSelect.length));
      //adds to blank password 
      Password = Password.concat(passwordText)
    }
    return Password;
  }
  else {
    alert("Please choose between 8 and 128")
    //stops loop if outside parameters
    return;
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
