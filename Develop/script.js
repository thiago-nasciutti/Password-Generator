// Assignment code here

//Prompts
function specs(){
  var passwordLength=prompt("How many characters do you want?");
  var useLower=confirm("Do you want to use lowercase characters?");
  var useUpper=confirm("Do you want to use uppercase characters?");
  var useNumbers=confirm("Do you want to use numbers?");
  var useSymbols=confirm("Do you want to use symbols?");
 

  //Specs arrays
  var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numbers=["0","1","2","3","4","5","6","7","8","9"];
  var symbols=["`","~","!","@","#","$","%","^","&","*","()","-","_","=","+","{","[","}",";",":","'","]","<",",",".",">","?"];
  

  //Conditionals and Arrays Merge

  if(useLower && useUpper && useNumbers && useSymbols){

    var arrays_merge = lowerCase .concat (upperCase, numbers, symbols);

   // console.log(arrays_merge);
  
  }

  else if(useLower && useUpper && useNumbers){

    var arrays_merge = lowerCase .concat (upperCase, numbers);

   // console.log(arrays_merge);

  }

  else if(useLower && useUpper && useSymbols){
    var arrays_merge = lowerCase .concat (upperCase, symbols);

   // console.log(arrays_merge);
  }

  else if(useLower && useNumbers && useSymbols){
    var arrays_merge = lowerCase .concat ( numbers, symbols);

   // console.log(arrays_merge);
  }

  else if(useUpper && useNumbers && useSymbols){
    var arrays_merge = upperCase .concat (numbers, symbols);

   // console.log(arrays_merge);
  }

  else if(useLower && useUpper){
    var arrays_merge = lowerCase .concat (upperCase);

   // console.log(arrays_merge);
  }

  else if(useLower && useNumbers){
   var arrays_merge = lowerCase .concat (numbers);

   // console.log(arrays_merge);
  }

  else if(useLower && useSymbols){
    var arrays_merge = lowerCase .concat ( symbols);

    //console.log(arrays_merge);
  }

  else if(useUpper && useNumbers ){
    var arrays_merge = upperCase .concat (numbers);

    //console.log(arrays_merge);
  }

  else if(useUpper && useSymbols){
    var arrays_merge = upperCase.concat (symbols);

    //console.log(arrays_merge);
  } 

  else if(useNumbers && useSymbols){
    var arrays_merge = numbers .concat (symbols);

    //console.log(arrays_merge);
  }

  else if(useUpper && useSymbols){
    var arrays_merge = upperCase.concat (symbols);

    // console.log(arrays_merge);
  }

  else if(useLower){
     var arrays_merge = lowerCase;

    //console.log(arrays_merge);
  }

  else if(useUpper){
      var arrays_merge = upperCase;

     //console.log(arrays_merge);
  }

  else if(useNumbers){
     var arrays_merge = numbers;

    //console.log(arrays_merge);
  }

  else if(useSymbols){
     var arrays_merge = symbols;

    //console.log(arrays_merge);
  }

  else{
    //console.log("Please answer the questions before procedure");
  }




  //Creating the password Array
  var passwordArray=[];
  for(i=0;i<passwordLength;i++){
    var randomArray=Math.floor(Math.random()*arrays_merge.passworLength);
    passwordArray.push(arrays_merge[randomArray]);
  }
  console.log(passwordArray);
  





















// // // Get references to the #generate element
// // var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);





















}
















