// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var passwordText = document.querySelector("#password");
  var randomPassword = '';
  var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\u0020\u0021";

  for (i = 0; i < characters.length; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
    passwordText.value = JSON.stringify(randomPassword, "#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);