
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  // generate 
  var password =  ""; 
  
  var possibleChars = [];

  // length
  var length =prompt("What length would you like? Choose a length between 8-128 characters")
  var passNum = parseInt(length); // making password a number that can be used mathematically 
  console.log(passNum)
  // validate length if or while 
    //let count = 0;
    //while (passNum >= 8 & passNum <= 128) {
    //  count++;
    // console.log('The current size of the password is ' + count);
    // }

  var lowerCase = confirm("Do you want lowercase letters?")
  console.log(lowerCase)

  var upperCase = confirm("Do you want uppercase letters?")
  console.log(upperCase)

  var numbers = confirm("Do you want numbers?")
  console.log(numbers)

  var specialChars = confirm("Do you want special characters")
  console.log(specialChars)
  // validate that they choose at least one confirm, if or while stmt 

  // lowerCase?
  if(lowerCase){
    possibleChars.push("a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
  }

  // upperCase
  if(upperCase){
    possibleChars.push("A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
  }

  //  numbers?
  if(numbers){
    possibleChars.push("1","2", "3","4","5", "6","7","8", "9","10","0")
  }

  // specialChars ? 
  if(specialChars){
    possibleChars.push("!",".", "-", "_","#","$","&")
  }


  // possible chars has all the characters the user wants in password
  // Build a password by adding a random element from possible chars to password "passLength" times 
    for (var  i=0 ;i< length; i++) {
      // get a random elmt from possible chars
      var randomNum = Math.floor(Math.random() * possibleChars.length);
      var randomChar = possibleChars[randomNum]
        // add string to that random string , could also use password += randomChar 
        password = password.concat(randomChar);
        console.log(password)
    }
    
  // use the user inputs to create a password 
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
