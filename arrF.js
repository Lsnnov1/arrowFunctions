// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

// create function es2015

const double = arr => {arr.map((num) => {return num * 2})}

// refactor into arrow functions:  
const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => {
        return num ** 2;
    });
    const evens = squares.filter((sqaured) => {
        return sqaured % 2 === 0;
    })
    return evens;
}