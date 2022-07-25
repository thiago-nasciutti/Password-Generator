
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
  }

  else if(useLower && useUpper && useNumbers){
    var arrays_merge = lowerCase .concat (upperCase, numbers);
  }

  else if(useLower && useUpper && useSymbols){
    var arrays_merge = lowerCase .concat (upperCase, symbols);
  }

  else if(useLower && useNumbers && useSymbols){
    var arrays_merge = lowerCase .concat ( numbers, symbols);
  }

  else if(useUpper && useNumbers && useSymbols){
    var arrays_merge = upperCase .concat (numbers, symbols);
  }

  else if(useLower && useUpper){
    var arrays_merge = lowerCase .concat (upperCase);
  }

  else if(useLower && useNumbers){
   var arrays_merge = lowerCase .concat (numbers);
  }

  else if(useLower && useSymbols){
    var arrays_merge = lowerCase .concat ( symbols);
  }

  else if(useUpper && useNumbers ){
    var arrays_merge = upperCase .concat (numbers);
  }

  else if(useUpper && useSymbols){
    var arrays_merge = upperCase.concat (symbols);
  } 

  else if(useNumbers && useSymbols){
    var arrays_merge = numbers .concat (symbols);
  }

  else if(useUpper && useSymbols){
    var arrays_merge = upperCase.concat (symbols);
  }

  else if(useLower){
     var arrays_merge = lowerCase;
  }

  else if(useUpper){
      var arrays_merge = upperCase;
  }

  else if(useNumbers){
     var arrays_merge = numbers;
  }

  else if(useSymbols){
     var arrays_merge = symbols;
  }

  else{
    var arrays_merge = "Please answer the questions before procedure";
  }

  //Creating the password Array
  var passwordArray=[];
  for(i=0;i<passwordLength;i++){
    var randomX=Math.floor(Math.random()*arrays_merge.length);
    passwordArray.push(arrays_merge[randomX]);
    }
    
  console.log(passwordArray);

  //convert array to spring
 
  var text = passwordArray.toString();
  document.getElementById("password").innerHTML = text;

}



















