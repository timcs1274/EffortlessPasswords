//Links the button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}





function generatePassword() {

  //variables for all the possible characters
  
    var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
    "X","Y","Z"];

    var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "x","y","z"];

    var speicalChars = ["!","@","#","$","%","&","*"];

    var numberChars = ["0","1","2","3","4","5","6","7","8","9"];
  
  
  //User inputs desired password length between 8 and 128
  var userLengthAnswer =  window.prompt("How many characters would you like your password to be?");

  while (userLengthAnswer < 8 || userLengthAnswer > 128 ) {

    alert ("Your password must be between 8 and 128 characters.")

      var userLengthAnswer =  window.prompt("How many characters would you like your password to be?");
    }
  
  
  //variables for when user confirms 
  var upperConfirm = ("Would you like to include uppercase characters?");

  var lowerConfirm = ("Would you like to include lowercase characters?");

  var specialConfirm = ("Would you like to include special characters?");

  var numberConfirm = ("Would you like to include numbers?");

  var charSelector = []


if (upperConfirm) {
  charSelector - charSelector.concat(upperConfirm)
}

if (lowerConfirm) {
  charSelector - charSelector.concat(lowerConfirm)
}

if (specialConfirm) {
  charSelector - charSelector.concat(specialConfirm)
}

if (numberConfirm) {
  charSelector - charSelector.concat(numberConfirm)
}


}


  