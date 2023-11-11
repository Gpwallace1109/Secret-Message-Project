let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove last string of array 
secretMessage.pop(); 

// Add words to the end of array
secretMessage.push('to', 'Program'); 

// Change word "easily" to "right"
secretMessage[7] = 'right'

// Remove first string of array 
secretMessage.shift(); 

// Add "Programming" to beginning of array 
secretMessage.unshift('Programming'); 

// Remove some strings
secretMessage.splice(6, 5, 'know');

console.log(secretMessage.join(' ')); 
