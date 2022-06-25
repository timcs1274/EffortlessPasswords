//Links the button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//variables for all the possible characters
var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z"];

var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z"];

var speicalChars = ["!","@","#","$","%","&","*"];

var numberChars = ["0","1","2","3","4","5","6","7","8","9"];

//Main function
function generatePassword() {
  //User inputs desired password length between 8 and 128 also must be a number
  var userLengthAnswer =  window.prompt("How many characters would you like your password to be?");

  while (userLengthAnswer < 8 || userLengthAnswer > 128 || isNaN(userLengthAnswer) ) {

    alert ("Your password must be a valid number between 8 and 128 characters.")

      var userLengthAnswer =  window.prompt("How many characters would you like your password to be?");
    }
  
  
  //variables for when user confirms which characters to include
  var upperConfirm = confirm("Would you like to include uppercase characters?");

  var lowerConfirm = confirm("Would you like to include lowercase characters?");

  var specialConfirm = confirm("Would you like to include special characters?");

  var numberConfirm = confirm("Would you like to include numbers?");

  var charSelector = []

  var finalPassword = ""

//If the user confirms, concat the variables
if (upperConfirm) {
  charSelector = charSelector.concat(upperChars)
}

if (lowerConfirm) {
  charSelector = charSelector.concat(lowerChars)
}

if (specialConfirm) {
  charSelector = charSelector.concat(speicalChars)
}

if (numberConfirm) {
  charSelector = charSelector.concat(numberChars)
}

//if no characters categories are selected, user is prompted to start over
if (charSelector == 0){  
  alert ("You must confirm at least 1 category of characters.");
  generatePassword();
} else { 
  //add the randomly selected character from the concatenated var to the finalPassword var 
  for (var index = 0; index < userLengthAnswer; index++) {
   
    finalPassword += charSelector[Math.floor(Math.random() * charSelector.length)];
  } 
//Display the randomly generated password
  return finalPassword
}}


  