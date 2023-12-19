// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var testPassword = "";
var isValid = false;

// Function to prompt user for password options
function getPasswordOptions() {

  // This condition will valid the leght of password (At least 8 characters but no more than 128)
  var isEnough = false;
  if (testPassword.length > 8 && testPassword.length < 128) { 
    isEnough = true;
  }

  // This Boolean condition will valid if password contain Lowercase
  var isLower = false;
  lowerCasedCharacters.forEach(element => {
    if (testPassword.includes(element)) {
        isLower = true;
    }
  });
  
  // This Boolean condition will valid if password contain any Uppercase
  var isUpper = false;
  upperCasedCharacters.forEach(element => {
    if (testPassword.includes(element)) {
        isUpper = true;
    }
  });

  // This Boolean condition will valid if password contain a numeric digit
  var isNumeric = false;
  numericCharacters.forEach(element => {
    if (testPassword.includes(element)) {
      isNumeric = true;
    }
  });
 
  // This Boolean condition will valid if password contain a Special characters
  var isSpecial = false;
  specialCharacters.forEach(element => {
    if (testPassword.includes(element)) {
      isSpecial = true;
    }
  });

  // To validate all the criteria above
  if (isEnough && isLower && isUpper && isNumeric && isSpecial) {
    isValid = true;
  } else {
    isValid = false;
  }
}


// Function for getting a random element from an array
function getRandom(arr) {

  // Pick a random Upper Character and save it to testPassword
  let upperRandom = Math.floor((Math.random() * upperCasedCharacters.length));
  testPassword = testPassword + upperCasedCharacters[upperRandom];

  // Pick a random lower Character and save it to testPassword
  let lowerRandom = Math.floor((Math.random() * lowerCasedCharacters.length));
  testPassword = testPassword + lowerCasedCharacters[lowerRandom];

  // Pick a random number and save it to testPassword
  let numberRandom = Math.floor((Math.random() * numericCharacters.length));
  testPassword = testPassword + numericCharacters[numberRandom];

  //Pick a random Special Character and save it to testPassword
  let specialRandom = Math.floor((Math.random() * specialCharacters.length));
  testPassword = testPassword + specialCharacters[specialRandom];
}


// Function to generate password with user input

function generatePassword() {

  testPassword = ""; 
  isValid = false;
  
  do {
    getRandom ();
    getPasswordOptions ();
  } while (isValid == false);
  return testPassword;

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);