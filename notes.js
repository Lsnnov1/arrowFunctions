const nums = [1,2,3,4,6,7,8]

nums.filter(function(num){
    return num % 2 === 0;
});

// arrow func exercise

const dailyRainTotals = [ [1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.9, 0.9, 1.5] ];

// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((acc, next) => {
//         return acc + next;
//     })
// })

// one line with arrow functions
dailyRainTotals.map((hrt) => hrt.reduce((acc, next) => acc + next))