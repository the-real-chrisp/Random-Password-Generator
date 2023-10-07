// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  var upperCase = confirm("Do you want upper case letters in your password?");
  console.log(upperCase);
})
generateBtn.addEventListener("click", function() {
  var lowerCase = confirm("Do you want lower case letters in your password?");
  console.log(lowerCase);
})
generateBtn.addEventListener("click", function() {
  var specialCharacters = confirm("Do you want special characters in your password?");
  console.log(specialCharacters);
})
generateBtn.addEventListener("click", function() {
  var passwordLength = prompt("How many charcters do you want in your password? Please select a value from 8-128.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    alert("Please enter valid number!"); //placeholder. need to finish conditional statement for input prompt
  } 
  
})

generateBtn.addEventListener("click", function() {
  var userInputData = {
    passwordLength: 8,
    passwordUpperCase: true,
    passwordLowerCase: true,
    passwordSpecialCharacters: true
  };
  var userInput = prompt("Please select criteria for your password: ", JSON.stringify(userInputData))
})

// Write password to the #password input
function generatePassword () {
  var passwordText = document.querySelector("#password");
  var randomPassword = '';
  var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\u0020\u0021";

  for (i = 0; i < characters.length; i++) {
    randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
    passwordText.value = randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);