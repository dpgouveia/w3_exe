// Main function
console.log('\n// Main function');
let cdow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let cday = new Date();
console.log(`Today is: ${cdow[cday.getDay()]}`);
console.log(`Current time is: ${cday.getHours()}:${cday.getMinutes()}:${cday.getSeconds()}`);
