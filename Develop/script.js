// Assignment code here

//Prompts
function prompts(){
  var length=prompt("How many characters do you want?");
  var lowerCase_use=confirm("Do you want to use lowercase characters?");
  var upperCase_use=confirm("Do you want to use lowercase characters?");
  var numbers_use=confirm("Do you want to use numbers?");
  var symbols_use=confrim("Do you want to use symbols?");
}

//Arrays
 var lowerCase_array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 var upperCase_array=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var numbers_array=["0","1","2","3","4","5","6","7","8","9"];
 var symbols_array=["`","~","!","@","#","$","%","^","&","*","()","-","_","=","+","{","[","}",";",":","'","]","<",",",".",">","?"];









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
