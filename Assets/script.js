// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var passwordText = document.querySelector("#password");
  var randomPassword = '';
  var numeric = confirm("Do you want numbers in your password?")
  var upperCase = confirm("Do you want upper case letters in your password?");
  var lowerCase = confirm("Do you want lower case letters in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?");
  var passwordLength = prompt("How many charcters do you want in your password? Please select a value from 8-128.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid number!");
      return generatePassword(); // how do I stop the process if they don't enter a valid #?
    }
  var charactersAll = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var allowedCharacters = "";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*()";

  if (lowerCase) {
    allowedCharacters += lower;
  }

  console.log("allowedCharacters = ", allowedCharacters);
  
  if (upperCase) {
    allowedCharacters += upper;
  }

  console.log("allowedCharacters = ", allowedCharacters);
  
  if (numeric) {
    allowedCharacters += numbers;
  }

  console.log("allowedCharacters = ", allowedCharacters);
  
  if (specialCharacters) {
    allowedCharacters += symbols;
  }

  console.log("allowedCharacters = ", allowedCharacters);
  
    // if (numeric === true && upperCase === true && lowerCase === true && specialCharacters === true) {
      
    // }
  
  for (i = 0; i < passwordLength; i++) {
    randomPassword += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
   } 
    return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
