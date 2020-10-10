// Array of password criteria (lower case, uppercase, numbers, symbols)
var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var symbolCharacters = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
];

//User Selections

function userPasswordOptions() {
  var length = parseInt(
    prompt("Choose Password Length (Must be between 8-128 characters")
  );

  var includesLowercase = confirm("Includes Lowercase Letters?");

  var includesUppercase = confirm("Includes Uppercase Letters?");

  var includesNumbers = confirm("Includes Numbers?");

  var includesSymbols = confirm("Includes Symbols?");

  //if statement ot ensure usr has selected one option
  if (
    includesLowercase === false &&
    includesUppercase === false &&
    includesSymbols === false &&
    includesNumbers === false
  ) {
    alert("Please Select at least one character type....C'mon Man!");
    return;
  }

  // Object to store user selections for password requirements

  var inPassword = {
    length: length,
    includesLowercase: includesLowercase,
    includesUppercase: includesUppercase,
    includesNumbers: includesNumbers,
    includesSymbols: includesSymbols,
  };

  return inPassword;
}

//Function to select random index from array

function selectRandom(arg) {
  var randomIndexNumber = Math.floor(Math.random() * arg.length);
  var randomIndex = arg[randomIndexNumber];

  return randomIndex;
}

// Function that generates the password based on user inputs & variables to store types chosen, minimum of one of each character, the password

function generatePassword() {
  var userSelections = userPasswordOptions();

  var selectedCharacterTypes = [];

  var mustUse = [];

  var randomResults = [];

  //if statements to add selected character arrays

  if (userSelections.includesLowercase) {
    selectedCharacterTypes = selectedCharacterTypes.concat(lowercaseLetters);
    mustUse.push(selectRandom(lowercaseLetters));
  }

  if (userSelections.includesUppercase) {
    selectedCharacterTypes = selectedCharacterTypes.concat(uppercaseLetters);
    mustUse.push(selectRandom(uppercaseLetters));
  }

  if (userSelections.includesNumbers) {
    selectedCharacterTypes = selectedCharacterTypes.concat(numberCharacters);
    mustUse.push(selectRandom(numberCharacters));
  }

  if (userSelections.includesSymbols) {
    selectedCharacterTypes = selectedCharacterTypes.concat(symbolCharacters);
    mustUse.push(selectRandom(symbolCharacters));
  }

  //For loop based on length property that will select random characters from the array of available characters
  for (var i = 0; i < userSelections.length; i++) {
    var character = selectRandom(selectedCharacterTypes);
    randomResults.push(character);
  }

  //For loop to selct minimum 1 of each character type selected
  for (var i = 0; i < mustUse.length; i++) {
    randomResults[i] = mustUse[i];
  }

  return randomResults.join("");
}

// Assignment Code//
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
