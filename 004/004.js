let sides = [5, 6, 7];
let perimeter = undefined;
let pabc = undefined;
let area = undefined;
if(sides.length == 3) {
    perimeter = sides.reduce( (side, total) => { return total += side; } ) / 2;
    pabc = sides.map( (side) => { return perimeter - side; } );
    area = Math.sqrt( perimeter * pabc.reduce( (pelement, total) => {return total *= pelement}) );
}
console.log(sides);
console.log(perimeter);
console.log(pabc);
console.log(area);
