const binaryArt = require('./src/core/BinaryArt');
const dateCalculator = require('./src/core/DateCalculator');


const yearInput = process.argv[2];
if(yearInput === undefined ) process.exit()
if(yearInput.length != 4) process.exit()


const charInput = process.argv[3];
if(charInput === undefined ) process.exit()
if(charInput.length > 6) process.exit()


let binaryArray = binaryArt.StringToBinary(charInput.toUpperCase());
let date = dateCalculator.findFirstYearSundayDate(yearInput);
console.log(binaryArray)
let commitDates = []

for (let col = 0; col < binaryArray[0].length; col++) {
    for (let row = 0; row < binaryArray.length; row++) {
        const flag = binaryArray[row][col]
        if(flag === '1') commitDates.push(date.toISOString().split('T')[0])
        date.setDate(date.getDate() + 1)
    }
}

for (const commitDate of commitDates) {
    console.log(commitDate)
}
