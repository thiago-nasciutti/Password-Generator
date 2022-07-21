// Assignment code here

//Prompts
function prompts(){
  var lenght=prompt("How many characters do you want?");
  var lowerCase=confirm("Do you want to use lowercase characters?");
  var upperCase=confirm("Do you want to use lowercase characters?");
  var numbers=confirm("Do you want to use numbers?");
  var symbols=confrim("Do you want to use symbols?");
}

//Characters
 var lowerCase="abcdefghijklmnopqrstuvwxyz";
 var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numbers="0123456789";
 var symbols="`~!@#$%^&*()-_=+{[}];:'<,.>?";

 










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
