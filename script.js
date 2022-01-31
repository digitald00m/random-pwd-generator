// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var pwdTrue;
var pwdArry;
var pwd;
var charSet= {
  pwdLower: "abcdefghijklmnopqrstuvwxyz",
  pwdUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  pwdNumbers: "0123456789",
  pwdSpecial: "!@#&()–[{}]:;',?/*~$^+=<>"
};

// Write password to the #password input
function writePassword() {

  var password = questions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var questions = function () {
  alert("A typical password contains 8 or more characters, at least one upper case letter (A,B,C,D) one lower case letter (a,b,c,d) one special case letter (@,#,$,&) and one number (1,2,3,4)");
  var pwdConfirm = confirm ("By pressing OK you would like a random password generated for you?");
  var charBank = "";
  if (pwdConfirm){
    charBank += charSet.pwdUpper;
  };
  if (pwdConfirm){
    charBank += charSet.pwdLower;
  };
  if (pwdConfirm){
    charBank += charSet.pwdNumbers
  }
  if (pwdConfirm) {
    charBank += charSet.pwdSpecial
  }
  

    var lengthPrompt = prompt("How long would you like your password to be? (Between 8-128)");
    while(lengthPrompt <= 7 || lengthPrompt >=129){
      alert("Incorrect number value.");
      lengthPrompt = prompt("Can only be a number between 8-128.")
    };

  pwdArry = "";
  pwdTrue = "";

//randomizer
for(i=0;i<lengthPrompt; i++) {
  pwdArry = charBank[Math.floor(Math.random()*charBank.length)]
  pwdTrue += pwdArry;
}
return pwdTrue;
};

