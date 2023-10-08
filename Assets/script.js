// Assignment Code
var generateBtn = document.querySelector("#generate");

// generateBtn.addEventListener("click", function() {
//   var upperCaseConfirm = confirm("Do you want upper case letters in your password?");
//   console.log(upperCaseConfirm);
// })
// generateBtn.addEventListener("click", function() {
//   var lowerCase = confirm("Do you want lower case letters in your password?");
//   console.log(lowerCase);
// })
// generateBtn.addEventListener("click", function() {
//   var specialCharacters = confirm("Do you want special characters in your password?");
//   console.log(specialCharacters);
// })
// generateBtn.addEventListener("click", function() {
//   var passwordLength = prompt("How many charcters do you want in your password? Please select a value from 8-128.");
//   if (passwordLength < 8 || passwordLength > 128) {
//     alert("Please enter valid number!");
//     return generatePassword(); // how do I stop the process if they don't enter a valid #?
//   } else {
//     console.log(passwordLength);//placeholder. need to finish conditional statement for input prompt
//   } 
// })


// Write password to the #password input
// function generatePassword () {
//   var passwordText = document.querySelector("#password");
//   var randomPassword = '';
//   var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\u0020\u0021";
//   for (i = 0; i < characters.length; i++) {
//     randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//     passwordText.value = randomPassword;
// }
function generatePassword () {
  var passwordText = document.querySelector("#password");
  var randomPassword = '';
  var upperCaseConfirm = confirm("Do you want upper case letters in your password?");
  var lowerCase = confirm("Do you want lower case letters in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?");
  var passwordLength = prompt("How many charcters do you want in your password? Please select a value from 8-128.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid number!");
      return generatePassword(); // how do I stop the process if they don't enter a valid #?
    } else {
      console.log(passwordLength);//placeholder. need to finish conditional statement for input prompt
    } 
  var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\u0020\u0021";
    for (i = 0; i < passwordLength; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * passwordLength));
   }
    passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);