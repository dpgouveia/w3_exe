// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically 
// removing one letter from the end of the string and attaching it to the front

// Testing on console log (node js) -- approach 02
let displayString = 'w3resource'
const endIndex = displayString.length-1;
setInterval(() => {
    console.log(`${displayString}`);
    displayString = `${displayString[endIndex]}${displayString.substr(0, endIndex)}`;
}, 1000);

// Testing in a web page
let h1 = document.querySelector('#h1DisplayText');
h1.innerText = displayString;
setInterval(() => {
    h1.innerText = `${h1.innerText[endIndex]}${h1.innerText.substr(0, endIndex)}`;    
}, 1000); 
