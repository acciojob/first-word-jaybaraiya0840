function firstWord(s) {
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
    // Trim leading and trailing whitespace from the string
    str = str.trim();
    
    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');
    
    // If there is no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }
    
    // Return the substring up to the first space
    return str.substring(0, spaceIndex);
}

// Test cases
console.log(firstWord('see and stop'));  // Output: 'see'
console.log(firstWord(' Hello World!'));  // Output: 'Hello'
console.log(firstWord('12345'));          // Output: '12345'
console.log(firstWord(''));   