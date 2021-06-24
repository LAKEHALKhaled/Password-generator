//basic starting arrays

// Assignment Code
var character = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
// Array of numeric characters to be included in password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// Array of uppercase characters to be included in password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// concatination/ combining arrays

var characterNumber = character.concat(number)//.sort(() => Math.random() - 0.5)
var characterLower = character.concat(lowerCase)
var characterUpper = character.concat(upperCase)
var numberLower = number.concat(lowerCase)
var numberUpper = number.concat(upperCase)
var lowerUpper = lowerCase.concat(upperCase)
var characterNumberLower = characterNumber.concat(lowerCase)
var characterNumberUpper = characterNumber.concat(upperCase)
var characterLowerUpper = characterLower.concat(upperCase)
var numberLowerUpper = numberLower.concat(upperCase)
var characterNumberLowerUpper = characterNumber.concat(lowerUpper)

//empty array to push values inside
var password = []


//Main function for validation and generating password

function passwordValidation() {

  var passwordLength = prompt("Ener a password length between 8-128 :");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("password must be 8 to 128 character try again")
  }

  else {
    // validations that return true/false
  var isCharacter = confirm("Include special Character?");
  var isNumber = confirm("Include number?");
  var isLowerCase = confirm("Include lowercase?");
  var isUpperCase = confirm("Include Uppercase?");

    // logic of going through the 16 diffrent probabilities, 4*4 = 16 diffrent possibilities.
    if (isCharacter && isNumber && isLowerCase && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = characterNumberLowerUpper[Math.floor(Math.random() * characterNumberLowerUpper.length)]
        password.push(random)

      }
    }
    else if (isCharacter && isNumber && isLowerCase) {
      for (i = 0; i < passwordLength; i++) {
        random = characterNumberLower[Math.floor(Math.random() * characterNumberLower.length)]
        password.push(random)

      }
    }
    else if (isCharacter && isNumber && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = characterNumberUpper[Math.floor(Math.random() * characterNumberUpper.length)]
        password.push(random)

      }
    }
    else if (isCharacter && isLowerCase && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = characterLowerUpper[Math.floor(Math.random() * characterLowerUpper.length)]
        password.push(random)

      }
    }
    else if (isNumber && isLowerCase && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = numberLowerUpper[Math.floor(Math.random() * numberLowerUpper.length)]
        password.push(random)

      }
    }
    else if (isCharacter && isNumber) {
      for (i = 0; i < passwordLength; i++) {
        random = characterNumber[Math.floor(Math.random() * characterNumber.length)]
        password.push(random)

      }
    }
    else if (isCharacter && isLowerCase) {
      for (i = 0; i < passwordLength; i++) {
        random = characterLower[Math.floor(Math.random() * characterLower.length)]
        password.push(random)

      }
    }
    else if (isCharacter && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = characterUpper[Math.floor(Math.random() * characterUpper.length)]
        password.push(random)

      }
    }
    else if (isNumber && isLowerCase) {
      for (i = 0; i < passwordLength; i++) {
        random = numberLower[Math.floor(Math.random() * numberLower.length)]
        password.push(random)

      }
    }
    else if (isNumber && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = numberUpper[Math.floor(Math.random() * numberUpper.length)]
        password.push(random)

      }
    }
    else if (isLowerCase && isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = lowerUpper[Math.floor(Math.random() * lowerUpper.length)]
        password.push(random)

      }
    }
    else if (isCharacter) {
      for (i = 0; i < passwordLength; i++) {
        random = character[Math.floor(Math.random() * (character.length))]
        password.push(random)

      }
    }
    else if (isNumber) {
      for (i = 0; i < passwordLength; i++) {
        random = number[Math.floor(Math.random() * number.length)]
        password.push(random)
      }
    }
    else if (isLowerCase) {
      for (i = 0; i < passwordLength; i++) {
        random = lowerCase[Math.floor(Math.random() * lowerCase.length)]
        password.push(random)
      }
    }
    else if (isUpperCase) {
      for (i = 0; i < passwordLength; i++) {
        random = upperCase[Math.floor(Math.random() * upperCase.length)]
        password.push(random)
      }
    }
    else {
      alert("minimum of 1 criteria is required to generate a password, try again.")
    }

    // swtch the array into a string with no comma between
    password = password.join('');
  }
  return
}




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = []; //reset the password to empty, so we can use it again
  passwordValidation() //call back the main function 

  var passwordText = document.querySelector("#password");
// pass the password into text area
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
