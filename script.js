function firstWord(str) {
  // Check if the input string is empty or does not contain any space
  if (!str || str.trim() === "") {
    return str;
  }

  // Use regular expression to match the first word (characters up to the first space)
  const match = str.match(/^\S+/);

  // Return the matched first word or the entire string if no space is found
  return match ? match[0] : str;
}

// Examples
console.log(firstWord('see and stop'));     // Output: 'see'
console.log(firstWord(' Hello World!'));    // Output: 'Hello'
console.log(firstWord('12345'));             // Output: '12345'
console.log(firstWord(''));                  // Output: ''


// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
