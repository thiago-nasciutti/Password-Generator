// Assignment code here

//Prompts
function specs(){
  var password_length=prompt("How many characters do you want?");
  var lowerCase_use=confirm("Do you want to use lowercase characters?");
  var upperCase_use=confirm("Do you want to use uppercase characters?");
  var numbers_use=confirm("Do you want to use numbers?");
  var symbols_use=confirm("Do you want to use symbols?");
 

  //Specs arrays
  var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers=["0","1","2","3","4","5","6","7","8","9"];
  var symbols=["`","~","!","@","#","$","%","^","&","*","()","-","_","=","+","{","[","}",";",":","'","]","<",",",".",">","?"];
  


  //Creating random specs arrays
  var random_lowerCase_array=[];
  for(i=0;i<password_length;i++){
    var random_lowerCase=Math.floor(Math.random()*lowerCase.length);
    random_lowerCase_array.push(lowerCase[random_lowerCase]);
  }
  //console.log(random_lowerCase_array);

  var random_upperCase_array=[];
  for(i=0;i<password_length;i++){
    var random_upperCase=Math.floor(Math.random()*upperCase.length);
    random_upperCase_array.push(upperCase[random_upperCase]);
  }
  //console.log(random_upperCase_array);

  var random_numbers_array=[];
  for(i=0;i<password_length;i++){
    var random_numbers=Math.floor(Math.random()*numbers.length);
    random_numbers_array.push(numbers[random_numbers]);
  }
  //console.log(random_numbers_array);

  var random_symbols_array=[]
  for(i=0;i<password_length;i++){
    var random_symbols=Math.floor(Math.random()*symbols.length);
    random_symbols_array.push(symbols[random_symbols]);
  }
  //console.log(random_symbols_array);  



//Conditionals and Arrays Merge

if(lowerCase_use && upperCase_use && numbers_use && symbols_use){

  var arrays_merge = random_lowerCase_array .concat (random_upperCase_array, random_numbers_array, random_symbols_array);

  console.log(arrays_merge);
  
 }

else if(lowerCase_use && upperCase_use && numbers_use){

  var arrays_merge = random_lowerCase_array .concat (random_upperCase_array, random_numbers_array);

  console.log(arrays_merge);

}

else if(lowerCase_use && upperCase_use && symbols_use){
  var arrays_merge = random_lowerCase_array .concat (random_upperCase_array, random_symbols_array);

  console.log(arrays_merge);
}

else if(lowerCase_use && numbers_use && symbols_use){
  var arrays_merge = random_lowerCase_array .concat ( random_numbers_array, random_symbols_array);

  console.log(arrays_merge);
}

else if(upperCase_use && numbers_use && symbols_use){
  var arrays_merge = random_upperCase_array .concat (random_numbers_array, random_symbols_array);

  console.log(arrays_merge);
}

else if(lowerCase_use && upperCase_use){
  var arrays_merge = random_lowerCase_array .concat (random_upperCase_array);

  console.log(arrays_merge);
}

else if(lowerCase_use && numbers_use){
  var arrays_merge = random_lowerCase_array .concat (random_numbers_array);

  console.log(arrays_merge);
}

else if(lowerCase_use && symbols_use){
  var arrays_merge = random_lowerCase_array .concat ( random_symbols_array);

  console.log(arrays_merge);
}


else if(upperCase_use && numbers_use ){
  var arrays_merge = random_upperCase_array .concat (random_numbers_array);

  console.log(arrays_merge);
}

else if(upperCase_use && symbols_use){
  var arrays_merge = random_upperCase_array.concat (random_symbols_array);

  console.log(arrays_merge);
}

else if(numbers_use && symbols_use){
  var arrays_merge = random_numbers_array .concat (random_symbols_array);

  console.log(arrays_merge);
}

else if(upperCase_use && symbols_use){
  var arrays_merge = random_upperCase_array.concat (random_symbols_array);

  console.log(arrays_merge);
}

else if(lowerCase_use){
  var arrays_merge = random_lowerCase_array;

  console.log(arrays_merge);
}

else if(upperCase_use){
  var arrays_merge = random_upperCase_array;

  console.log(arrays_merge);
}

else if(numbers_use){
  var arrays_merge = random_numbers_array;

  console.log(arrays_merge);
}

else if(symbols_use){
  var arrays_merge = random_symbols_array;

  console.log(arrays_merge);
}

else if(password_length==0 || password_length==null){
  console.log("You din't choose the number of characters you want!")
}

else{
  console.log("You didn't choose the characters you want!");
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





















}
















