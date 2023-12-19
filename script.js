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
    testPassword = "012%P5678u"
    //testPassword = "Myname88"

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
    console.log(testPassword);
  } else {
    console.log("Try again");
  }
  
}


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

  getPasswordOptions ();
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