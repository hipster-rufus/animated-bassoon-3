var generateBtn = document.querySelector("#generate");

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var num = ["0123456789"];
var specialChar = ["!#$%&*?@"];
var finalPass = "";

function generatePassword() {
  var lengthEl = prompt("What is the length of your password?");
  if (lengthEl < 8 || lengthEl > 128) {
    alert("Please enter a numeric value between 8 and 128");
  } else {
    var lowerPass = confirm("Click 'OK' for yes, 'Cancel' for no: Would you like to include lowercase letters?");
    if (lowerPass) {
      finalPass += lowerCase
    };
    var upperPass = confirm("Would you like to include uppercase letters?");
    if (upperPass) {
      finalPass += upperCase
    };
    var numPass = confirm("Would you like to include numbers?");
    if (numPass) {
      finalPass += num
    };
    var specialPass = confirm("Would you like to include special characters?");
    if (specialPass) {
      finalPass += specialChar
    };
  }; 
  var pass = "";
  for (i = 0; i < lengthEl; i++) {
    pass += finalPass.charAt(Math.floor(Math.random() * finalPass.length))
  };
  return pass;
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);