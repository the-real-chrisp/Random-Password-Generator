// Assignment Code

//Method query selector targeting the generate id on HTML
var generateBtn = document.querySelector("#generate");

//Function to generate password 
function generatePassword() {
  var randomPassword = ''; //Variable for empty string that password will be appended to.
  var numeric = confirm("Do you want numbers in your password?"); //Confirmation message for numbers in user's password
  var upperCase = confirm("Do you want upper case letters in your password?");//Confirmation message for upper case in user's password
  var lowerCase = confirm("Do you want lower case letters in your password?");//Confirmation message for lower case in user's password
  var specialCharacters = confirm("Do you want special characters in your password?");//Confirmation message for special characters in user's password
  var passwordLength = prompt("How many charcters do you want in your password? Please select a value from 8-128."); //Prompt for user to input desired password length
  passwordLength = parseInt(passwordLength); //Converts string into a number 

  //Validates if user's input for password length is a not a number. Prompts alert message and returns error message.
  if (isNaN(passwordLength)) {
    alert("Please enter valid number!");
    return "Password not generated. Please enter a numeric value between 8-128. Please retry by clicking Generate Password again"
  }

  //Validates user's input for desired password length. If below 8 or above 128 prompts alert and error message.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter valid number!");
    return "Password not generated. Please select a password length between 8-128. Please retry by clicking Generate Password again"
  }
  var allowedCharacters = ""; //Empty string to contain allowed characters based on user selections.
  var lower = "abcdefghijklmnopqrstuvwxyz"; //Variable for lower case letters
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Variable for upper case letters
  var numbers = "0123456789"; //Variable for numbers
  var symbols = "!@#$%^&*()"; //Variable for special characters

  //Conditional statements that if are true then are added to the allowed characters variable.
  if (lowerCase) {
    allowedCharacters += lower;
  }

  if (upperCase) {
    allowedCharacters += upper;
  }

  if (numeric) {
    allowedCharacters += numbers;
  }

  if (specialCharacters) {
    allowedCharacters += symbols;
  }

  //Validates whether a character type was selected. If no characters were selected then it sends an alert and error message to retry.
  if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false) {
    alert("You need to select at least one character type for your password");
    return "Password not generated. One character type must be selected. Please retry by clicking Generate Password again"
  }

  //For loop to create random password based on allowed characters. Uses charAt to select the variables contained in allowedCharacters. 
  for (i = 0; i < passwordLength; i++) {
    randomPassword += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length));
  }
  return randomPassword; //Returns the result of the generatePassword function
}

// Writes password to window
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listen methd to generate password on click
generateBtn.addEventListener("click", writePassword);
