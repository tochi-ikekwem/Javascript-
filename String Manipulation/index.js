// Reverse a String: Write a function that reverses a given string.

function reverseStringIteratively(s) {  
    let reversedStr = '';  
    for (let i = 0; i < s.length; i++) {  
        reversedStr = s[i] + reversedStr;  
    }  
    return reversedStr;  
}  



// Count Characters: Create a function that counts the number of characters in a string.

function main() {  
    const userInput = prompt("Enter a string to count characters:");  

    const characterCount = countCharacters(userInput);  
    console.log("Number of characters: ", characterCount);  
}



// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWordsWithPunctuation(sentence) {  
    return sentence.split(' ').map(word => {  
        // Check if the word is not empty  
        if (word.length > 0) {  
            // Capitalize the first letter and append the rest of the word  
            let firstChar = word.charAt(0).toUpperCase();  
            let remainingChars = word.slice(1);  
            return firstChar + remainingChars;  
        }  
        return word; // In case there are empty strings in the array  
    }).join(' ');  
}  