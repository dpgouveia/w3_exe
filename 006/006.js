// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

document.querySelector('#btnCalc').onclick = function() {
    const year = Number(document.querySelector('#txtYear').value);
    let div4 = year % 4 == 0;
    let div100 = year % 100 == 0;
    let div400 = year % 400 == 0;
    //console.log(`div4: ${div4} | div100: ${div100} | div400: ${div400}`);
    let output;
    if(year <= 0) {
        output = false;
    }
    else if(div4 && div100 && div400) {
        output = true;
    }
    else if(div4 && div400) {
        output = true;
    }
    else if(div4 && div100) {
        output = false;
    } else if(div4) {
        output = true;
    } else {
        output = false;
    }
    console.log(`Year ${year} is a leap year? ${output}`);

    // Solucao do site (muito mais inteligente)
    console.log(`(Simple): Year ${year} is a leap year? ${ (year > 0) ? ((year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0)) : false }`);

}

