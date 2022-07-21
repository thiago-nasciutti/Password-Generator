// Assignment code here

//Prompts
function specs(){
  var password_length=prompt("How many characters do you want?");
  var lowerCase_use=confirm("Do you want to use lowercase characters?");
  var upperCase_use=confirm("Do you want to use lowercase characters?");
  var numbers_use=confirm("Do you want to use numbers?");
  var symbols_use=confirm("Do you want to use symbols?");
 

  //Specs arrays
  var lowerCase_array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase_array=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers_array=["0","1","2","3","4","5","6","7","8","9"];
  var symbols_array=["`","~","!","@","#","$","%","^","&","*","()","-","_","=","+","{","[","}",";",":","'","]","<",",",".",">","?"];
  


  //Creating random specs arrays
  var random_lowerCase_array=[];
  for(i=0;i<password_length;i++){
    var random_lowerCase=Math.floor(Math.random()*lowerCase_array.length);
    random_lowerCase_array.push(random_lowerCase);
  }
  console.log(random_lowerCase_array);

  var random_upperCase_array=[];
  for(i=0;i<password_length;i++){
    var random_upperCase=Math.floor(Math.random()*upperCase_array.length);
    random_upperCase_array.push(random_upperCase);
  }
  console.log(random_upperCase_array);

  var random_numbers_array=[];
  for(i=0;i<password_length;i++){
    var random_numbers=Math.floor(Math.random()*numbers_array.length);
    random_numbers_array.push(random_numbers);
  }
  console.log(random_numbers_array);

  var random_symbols_array=[]
  for(i=0;i<password_length;i++){
    var random_symbols=Math.floor(Math.random()*symbols_array.length);
    random_symbols_array.push(random_symbols);
  }
  console.log(random_symbols_array);  

//Merge arrays

var arrays_merge = random_lowerCase_array .concat (random_upperCase_array, random_numbers_array, random_symbols_array);

console.log(arrays_merge);

// //Conditionals

// if(lowerCase_use && upperCase_use && numbers_use && symbols_use){


  
// }

// else if(lowerCase_use==true && upperCase_use==true && numbers_use==true){

// }

// else if(lowerCase_use==true && upperCase_use==true && symbols_use==true){

// }

// else if(lowerCase_use==true && numbers_use==true && symbols_use==true){

// }

// else if(upperCase_use==true && numbers_use==true && symbols_use==true){

// }

// else if(lowerCase_use==true && upperCase_use==true){

// }

// else if(lowerCase_use==true && numbers_use==true){

// }

// else if(lowerCase_use==true && symbols_use==true){

// }


// else if(upperCase_use==true && numbers_use==true ){

// }

// else if(upperCase_use==true && symbols_use==true){

// }

// else if(numbers_use==true && symbols_use==true){

// }

// else{
//   console.log("Choose the characters");
// }



























}















// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
