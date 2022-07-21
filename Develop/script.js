// Assignment code here

//Prompts
function prompts(){
  var lowerCase=prompt("Do you want to use lowercase characters? (yes or no)");
  var upperCase=prompt("Do you want to use lowercase characters? (yes or no)");
  var numbers=prompt("Do you want to use numbers? (yes or no)");
  var symbols=prompt("Do you want to use symbols? (yes or no)");
  var lenght=prompt("How many characters do you want?");
}










// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
